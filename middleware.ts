import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { Redis } from '@upstash/redis'
import { getToken } from 'next-auth/jwt'

// Initialize Redis client for rate limiting (if configured)
let redis: Redis | null = null
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  try {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  } catch (error) {
    console.warn('Redis initialization failed, rate limiting will be disabled:', error)
  }
}

// Common security headers
const securityHeaders = {
  'X-DNS-Prefetch-Control': 'on',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
  'X-XSS-Protection': '1; mode=block',
  'Content-Security-Policy': "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self' https:; font-src 'self' data:; frame-src 'self';",
}

// Rate limiting configuration
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX || '100')
const RATE_LIMIT_WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000')

// Helper function to get client IP
const getClientIp = (request: NextRequest): string => {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }
  return '127.0.0.1'
}

// Helper function for rate limiting
const checkRateLimit = async (ip: string, path: string): Promise<boolean> => {
  if (!redis) return true // Skip rate limiting if Redis is not configured
  
  try {
    const key = `rate-limit:${ip}:${path}`
    const current = await redis.incr(key)
    if (current === 1) {
      await redis.expire(key, Math.floor(RATE_LIMIT_WINDOW_MS / 1000))
    }
    return current <= RATE_LIMIT_MAX
  } catch (error) {
    console.warn('Rate limiting check failed, allowing request:', error)
    return true
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url)

  // Skip middleware for static files and public assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  // Create base response
  const response = NextResponse.next()

  // Add security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Handle API routes
  if (pathname.startsWith('/api')) {
    // Add API version header
    response.headers.set('X-API-Version', '1.0')

    // Add CORS headers
    if (process.env.NODE_ENV === 'development') {
      response.headers.set('Access-Control-Allow-Origin', '*')
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
      response.headers.set('Access-Control-Allow-Credentials', 'true')

      // Handle preflight requests
      if (request.method === 'OPTIONS') {
        return new NextResponse(null, { status: 200, headers: response.headers })
      }
    } else {
      const origin = request.headers.get('origin')
      const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || []
      if (origin && allowedOrigins.includes(origin)) {
        response.headers.set('Access-Control-Allow-Origin', origin)
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        response.headers.set('Access-Control-Allow-Credentials', 'true')

        if (request.method === 'OPTIONS') {
          return new NextResponse(null, { status: 200, headers: response.headers })
        }
      }
    }

    // Apply rate limiting for API routes
    const ip = getClientIp(request)
    const withinLimit = await checkRateLimit(ip, pathname)
    
    if (!withinLimit) {
      response.headers.set('Retry-After', (RATE_LIMIT_WINDOW_MS / 1000).toString())
      return new NextResponse(
        JSON.stringify({ error: 'Too many requests' }),
        { status: 429, headers: response.headers }
      )
    }

    // Check authentication for protected routes
    if (!pathname.startsWith('/api/auth')) {
      try {
        const token = await getToken({ req: request })
        if (!token) {
          return new NextResponse(
            JSON.stringify({ error: 'Unauthorized' }),
            { status: 401, headers: response.headers }
          )
        }
      } catch (error) {
        console.error('Authentication error:', error)
        return new NextResponse(
          JSON.stringify({ error: 'Authentication failed' }),
          { status: 401, headers: response.headers }
        )
      }
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 