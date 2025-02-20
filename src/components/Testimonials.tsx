"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: 'vendor' | 'volunteer' | 'beneficiary';
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'vendor',
    image: '/avatars/vendor-1.jpg',
    content: 'SavePlate has helped us reduce food waste significantly while helping those in need. It\'s a win-win solution!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'volunteer',
    image: '/avatars/volunteer-1.jpg',
    content: 'Being a SavePlate volunteer has been incredibly rewarding. I\'ve met amazing people and made a real difference.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Food Bank NYC',
    role: 'beneficiary',
    image: '/avatars/beneficiary-1.jpg',
    content: 'The platform has streamlined our food donation process and helped us serve more people in our community.',
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="flex-shrink-0 w-full p-6 mx-4 space-y-4"
          >
            <div className="flex items-center space-x-4">
              <Avatar>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
              </Avatar>
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground capitalize">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">{testimonial.content}</p>
            <div className="flex space-x-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-primary text-primary"
                />
              ))}
            </div>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? 'bg-primary' : 'bg-muted'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
} 