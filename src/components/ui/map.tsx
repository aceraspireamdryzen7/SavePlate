"use client";

import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface Location {
  id: string;
  lat: number;
  lng: number;
  type: 'vendor' | 'volunteer';
  title: string;
}

interface MapProps {
  locations: Location[];
  className?: string;
  zoom?: number;
  center?: { lat: number; lng: number };
}

export function Map({ 
  locations, 
  className = '', 
  zoom = 12,
  center = { lat: 40.7128, lng: -74.0060 } // Default to NYC
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
      });

      const google = await loader.load();
      
      if (mapRef.current && !mapInstanceRef.current) {
        mapInstanceRef.current = new google.maps.Map(mapRef.current, {
          center,
          zoom,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
        });
      }

      // Clear existing markers
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];

      // Add new markers
      locations.forEach(location => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: mapInstanceRef.current,
          title: location.title,
          icon: {
            url: `/marker-${location.type}.svg`,
            scaledSize: new google.maps.Size(32, 32),
          },
        });

        markersRef.current.push(marker);
      });
    };

    initMap();
  }, [locations, zoom, center]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-full min-h-[300px] ${className}`}
    />
  );
} 