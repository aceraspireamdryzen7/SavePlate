"use client"

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { FiPackage, FiTruck, FiAward } from 'react-icons/fi'

interface StepProps {
  title: string
  description: string
  icon: IconType
  delay: number
}

function Step({ title, description, icon: Icon, delay }: StepProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <motion.div
        className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-8 h-8 text-primary" />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container-responsive">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-responsive mb-4">How It Works</h2>
          <p className="text-responsive text-muted-foreground">
            Join our mission to reduce food waste in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-primary/20">
            <motion.div
              className="absolute inset-0 bg-primary"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>

          <Step
            title="Register Surplus Food"
            description="Vendors can list their surplus food items in seconds"
            icon={FiPackage}
            delay={0.2}
          />
          <Step
            title="Pick Up & Deliver"
            description="Volunteers collect and distribute food to those in need"
            icon={FiTruck}
            delay={0.4}
          />
          <Step
            title="Make a Difference"
            description="Earn points and track your impact on the community"
            icon={FiAward}
            delay={0.6}
          />
        </div>

        {/* Optional Video Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full">
            <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <svg
                className="w-4 h-4 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            Watch How It Works
          </button>
        </motion.div>
      </div>
    </section>
  )
} 