export interface ApiResponse<T = any> {
  data?: T
  error?: {
    code: string
    message: string
    details?: any
  }
  meta?: {
    pagination?: {
      total: number
      pages: number
      page: number
      limit: number
    }
  }
}

export interface ApiErrorResponse {
  error: {
    code: string
    message: string
    details?: any
  }
}

export interface ApiSuccessResponse<T> {
  data: T
  meta?: {
    pagination?: {
      total: number
      pages: number
      page: number
      limit: number
    }
  }
}

export type ApiResponseStatus = 
  | 200 // OK
  | 201 // Created
  | 204 // No Content
  | 400 // Bad Request
  | 401 // Unauthorized
  | 403 // Forbidden
  | 404 // Not Found
  | 409 // Conflict
  | 415 // Unsupported Media Type
  | 422 // Unprocessable Entity
  | 429 // Too Many Requests
  | 500 // Internal Server Error

export const API_ERROR_CODES = {
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const

export type ApiErrorCode = typeof API_ERROR_CODES[keyof typeof API_ERROR_CODES]

// Helper function to create error responses
export function createErrorResponse(
  code: ApiErrorCode,
  message: string,
  details?: any
): ApiErrorResponse {
  return {
    error: {
      code,
      message,
      ...(details && { details }),
    },
  }
}

// Helper function to create success responses
export function createSuccessResponse<T>(
  data: T,
  meta?: ApiSuccessResponse<T>['meta']
): ApiSuccessResponse<T> {
  return {
    data,
    ...(meta && { meta }),
  }
}

// Helper function to handle common API errors
export function handleApiError(error: unknown): ApiErrorResponse {
  console.error('API Error:', error)

  if (error instanceof Error) {
    return createErrorResponse(
      API_ERROR_CODES.INTERNAL_ERROR,
      'An unexpected error occurred',
      process.env.NODE_ENV === 'development' ? error.message : undefined
    )
  }

  return createErrorResponse(
    API_ERROR_CODES.INTERNAL_ERROR,
    'An unexpected error occurred'
  )
} 