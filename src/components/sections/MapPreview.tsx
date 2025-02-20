"use client"

import { motion } from 'framer-motion'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const center = {
  lat: 40.7128,
  lng: -74.0060,
}

const markers = [
  { id: 1, position: { lat: 40.7128, lng: -74.0060 }, title: "Restaurant A" },
  { id: 2, position: { lat: 40.7148, lng: -74.0068 }, title: "Restaurant B" },
  { id: 3, position: { lat: 40.7108, lng: -74.0048 }, title: "Food Bank" },
]

export default function MapPreview() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  })

  const mapOptions = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,
    scrollwheel: false,
  }), [])

  if (!isLoaded) {
    return (
      <div className="h-[400px] w-full bg-secondary animate-pulse rounded-lg">
        <div className="h-full w-full flex items-center justify-center">
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container-responsive">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-responsive mb-4">Available Food Donations</h2>
          <p className="text-responsive text-muted-foreground">
            Find food donations near you and make a difference in your community
          </p>
        </motion.div>

        <motion.div
          className="relative h-[500px] rounded-xl overflow-hidden card-base"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GoogleMap
            options={mapOptions}
            zoom={14}
            center={center}
            mapContainerClassName="w-full h-full"
          >
            {markers.map(({ id, position, title }) => (
              <MarkerF
                key={id}
                position={position}
                title={title}
                icon={{
                  url: '/marker.svg',
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
              />
            ))}
          </GoogleMap>

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/marker-selected.svg"
                  alt="Vendor"
                  width={24}
                  height={24}
                />
                <span>Food Vendors</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/marker.svg"
                  alt="Volunteer"
                  width={24}
                  height={24}
                />
                <span>Volunteers</span>
              </div>
            </div>
          </div>

          {/* View Full Map Button */}
          <Link
            href="/map"
            className="absolute bottom-4 right-4 btn-primary px-6 py-2 rounded-full shadow-lg"
          >
            View Full Map
          </Link>
        </motion.div>

        {/* Stats Below Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <motion.div
            className="card-base p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold">Active Donations</h4>
            <p className="text-2xl font-bold text-primary">25</p>
          </motion.div>
          <motion.div
            className="card-base p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold">Available Volunteers</h4>
            <p className="text-2xl font-bold text-primary">12</p>
          </motion.div>
          <motion.div
            className="card-base p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold">Average Response Time</h4>
            <p className="text-2xl font-bold text-primary">15 min</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 