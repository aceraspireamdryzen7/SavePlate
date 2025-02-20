"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from 'react-countup'

interface StatProps {
  value: number
  label: string
  icon: string
  delay: number
}

function StatCard({ value, label, icon, delay }: StatProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { start } = useCountUp({
    ref: ref,
    start: 0,
    end: value,
    duration: 2,
    delay: delay,
  })

  if (isInView) {
    start()
  }

  return (
    <motion.div
      className="card-base p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-3xl font-bold mb-2">
        <span ref={ref}>0</span>+
      </h3>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  )
}

export default function Impact() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-4">Our Impact</h2>
          <p className="paragraph text-muted-foreground">
            Together, we're making a difference in reducing food waste and helping those in need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            value={100000}
            label="Meals Saved"
            icon="🍲"
            delay={0.2}
          />
          <StatCard
            value={5000}
            label="Volunteers"
            icon="🚴"
            delay={0.4}
          />
          <StatCard
            value={1200}
            label="Vendors Participating"
            icon="🏪"
            delay={0.6}
          />
        </div>

        {/* Impact Visualization */}
        <motion.div
          className="mt-16 p-8 card-base"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative h-40 bg-gradient-to-r from-primary/20 to-primary rounded-lg overflow-hidden">
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-primary"
              initial={{ height: '0%' }}
              whileInView={{ height: '60%' }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-primary-foreground">
              <p className="text-xl font-semibold">60% Reduction in Food Waste</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 