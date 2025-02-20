"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center bg-background">
      <div className="container-custom grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 z-10"
        >
          <h1 className="heading-1 text-4xl lg:text-5xl font-extrabold tracking-tight">
            Save Food, Feed Lives – Join the Movement!
          </h1>
          <p className="paragraph text-muted-foreground text-lg">
            Connect with local vendors and volunteers to reduce food waste and help those in need. Every meal saved is a step towards a better future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a
              href="/donate"
              className="button-primary text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="button-secondary text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-secondary/30 animate-pulse" />
          <Image
            src="/images/volunteers.jpg"
            alt="Diverse group of volunteers in blue vests smiling and ready to help"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={95}
            onLoad={(event) => {
              const img = event.target as HTMLImageElement
              const parent = img.parentElement
              if (parent) {
                parent.classList.remove('bg-secondary/30', 'animate-pulse')
              }
            }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
        </motion.div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-primary/2 to-transparent pointer-events-none" />
    </section>
  )
} 