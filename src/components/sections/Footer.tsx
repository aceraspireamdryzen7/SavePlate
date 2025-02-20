import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Privacy Policy', href: '/privacy' },
]

const socialLinks = [
  { name: 'Facebook', icon: FaFacebook, href: '#' },
  { name: 'Twitter', icon: FaTwitter, href: '#' },
  { name: 'Instagram', icon: FaInstagram, href: '#' },
  { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary py-20">
      <div className="container-responsive">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SavePlate</h3>
            <p className="text-muted-foreground mb-6">
              Connecting food vendors with volunteers to reduce waste and help those in need.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="flex gap-2">
              <div className="relative flex-1">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-base pl-10 w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-primary px-4 py-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} SavePlate. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 