"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface TestimonialProps {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: TestimonialProps[] = [
  {
    name: "John Doe",
    role: "Restaurant Owner",
    image: "/testimonials/john-doe.jpg",
    quote: "SavePlate has helped us reduce food waste significantly while making a positive impact in our community.",
  },
  {
    name: "Jane Smith",
    role: "Volunteer",
    image: "/testimonials/jane-smith.jpg",
    quote: "Being a SavePlate volunteer has been incredibly rewarding. I've met amazing people and helped feed those in need.",
  },
  {
    name: "Mike Johnson",
    role: "Food Bank Manager",
    image: "/testimonials/mike-johnson.jpg",
    quote: "The platform has streamlined our food donation process and helped us serve more people efficiently.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-2 mb-4">What People Say</h2>
          <p className="paragraph text-muted-foreground">
            Hear from our community of vendors, volunteers, and beneficiaries.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="card-base p-8 text-center"
          >
            <div className="relative w-20 h-20 mx-auto mb-6">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <blockquote className="text-xl mb-6 italic text-muted-foreground">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div>
              <h3 className="heading-4">{testimonials[currentIndex].name}</h3>
              <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-background border shadow-sm hover:bg-accent"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-background border shadow-sm hover:bg-accent"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
} 