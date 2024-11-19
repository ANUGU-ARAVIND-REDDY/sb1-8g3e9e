import React from 'react';
import { Star, Clock, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  title: string;
  platform: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: number;
  duration: string;
  thumbnail: string;
  className?: string;
  url: string;
}

export function CourseCard({
  title,
  platform,
  instructor,
  rating,
  reviews,
  price,
  duration,
  thumbnail,
  className,
  url,
}: CourseCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200",
      "border border-gray-200 overflow-hidden",
      className
    )}>
      <div className="aspect-video relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-sm font-medium">
          {platform}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{instructor}</p>
        
        <div className="flex items-center gap-2 mb-3">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="font-medium">{rating.toFixed(1)}</span>
          <span className="text-gray-500">({reviews.toLocaleString()} reviews)</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="h-4 w-4" />
            <span>Certificate</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">
            {price === 0 ? 'Free' : `$${price.toFixed(2)}`}
          </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
}