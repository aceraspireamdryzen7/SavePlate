"use client"

import { useEffect, useState } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const mapContainerStyle = {
  width: "100%",
  height: "100%",
}

const center = {
  lat: 40.7128,
  lng: -74.0060,
}

interface DonationLocation {
  id: string
  title: string
  lat: number
  lng: number
}

const mockDonations: DonationLocation[] = [
  {
    id: "1",
    title: "Fresh Vegetables",
    lat: 40.7128,
    lng: -74.0060,
  },
  {
    id: "2",
    title: "Canned Goods",
    lat: 40.7148,
    lng: -74.0068,
  },
  {
    id: "3",
    title: "Baked Goods",
    lat: 40.7118,
    lng: -74.0055,
  },
]

export function DonationMap() {
  const [userLocation, setUserLocation] = useState(center)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        () => {
          console.log("Error getting location")
        }
      )
    }
  }, [])

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={userLocation}
        zoom={14}
      >
        {mockDonations.map((donation) => (
          <Marker
            key={donation.id}
            position={{ lat: donation.lat, lng: donation.lng }}
            title={donation.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  )
} 