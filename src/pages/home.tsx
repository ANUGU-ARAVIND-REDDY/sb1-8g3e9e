import React from 'react';
import { SearchBar } from '@/components/ui/search-bar';
import { CourseCard } from '@/components/ui/course-card';
import { TrendingUp, Sparkles } from 'lucide-react';

const trendingTopics = [
  'Python Programming',
  'Data Science',
  'Web Development',
  'Machine Learning',
  'Digital Marketing',
  'UI/UX Design',
];

const featuredCourses = [
  {
    title: 'Complete Python Bootcamp',
    platform: 'Udemy',
    instructor: 'Dr. Angela Yu',
    rating: 4.8,
    reviews: 154232,
    price: 89.99,
    duration: '48 hours',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800',
    url: '#',
  },
  {
    title: 'Machine Learning A-Z',
    platform: 'Coursera',
    instructor: 'Andrew Ng',
    rating: 4.9,
    reviews: 98421,
    price: 79.99,
    duration: '56 hours',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800',
    url: '#',
  },
  {
    title: 'The Complete Web Developer in 2024',
    platform: 'LinkedIn Learning',
    instructor: 'Colt Steele',
    rating: 4.7,
    reviews: 75324,
    price: 94.99,
    duration: '63 hours',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    url: '#',
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find the best courses<br />tailored for you
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-blue-100 sm:text-xl md:mt-5 md:max-w-3xl">
            Compare courses from top platforms and discover your perfect learning path
          </p>
          <div className="mt-10">
            <SearchBar suggestions={trendingTopics} className="max-w-2xl" />
          </div>
        </div>
      </section>

      {/* Trending Topics */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Trending Topics</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trendingTopics.map((topic) => (
            <button
              key={topic}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              {topic}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Featured Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
}