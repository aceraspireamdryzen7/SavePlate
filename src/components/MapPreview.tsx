"use client";

import { useEffect, useState } from 'react';
import { Map } from '@/components/ui/map';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

interface Location {
  id: string;
  lat: number;
  lng: number;
  type: 'vendor' | 'volunteer';
  title: string;
}

export function MapPreview() {
  const router = useRouter();
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated data - replace with actual API call
    const mockLocations: Location[] = [
      { id: '1', lat: 40.7128, lng: -74.0060, type: 'vendor', title: 'Fresh Foods Market' },
      { id: '2', lat: 40.7580, lng: -73.9855, type: 'volunteer', title: 'Local Food Bank' },
      // Add more mock locations
    ];

    setTimeout(() => {
      setLocations(mockLocations);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      {isLoading ? (
        <Skeleton className="w-full h-full" />
      ) : (
        <>
          <Map
            locations={locations}
            className="w-full h-full"
            zoom={12}
            center={{ lat: 40.7128, lng: -74.0060 }}
          />
          <div className="absolute bottom-4 right-4">
            <Button 
              onClick={() => router.push('/find-food/map')}
              className="shadow-lg"
            >
              View Full Map
            </Button>
          </div>
        </>
      )}
    </div>
  );
} 