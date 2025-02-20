"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiUserPlus, FiShoppingBag } from 'react-icons/fi'

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container-responsive">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-responsive mb-4">
            Be Part of the Change!
          </h2>
          <p className="text-responsive text-primary-foreground/80 max-w-2xl mx-auto">
            Sign up as a vendor or volunteer today and join our mission to reduce food waste while helping those in need.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/auth/signup?role=vendor"
            className="group relative overflow-hidden rounded-full bg-white text-primary hover:text-white px-8 py-4 flex items-center gap-2 transition-colors"
          >
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <FiShoppingBag className="w-5 h-5 relative z-10" />
            <span className="relative z-10 font-semibold">Sign Up as Vendor</span>
          </Link>

          <Link
            href="/auth/signup?role=volunteer"
            className="group relative overflow-hidden rounded-full bg-white text-primary hover:text-white px-8 py-4 flex items-center gap-2 transition-colors"
          >
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <FiUserPlus className="w-5 h-5 relative z-10" />
            <span className="relative z-10 font-semibold">Sign Up as Volunteer</span>
          </Link>
        </motion.div>

        {/* Featured Partners */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-primary-foreground/60 mb-6">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Replace with actual partner logos */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-32 h-12 bg-white/10 rounded-lg flex items-center justify-center"
              >
                <span className="text-primary-foreground/40">Partner {i}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-white transition-colors"
            >
              <span>Want to Partner With Us?</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 