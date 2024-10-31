"use client"

import React from 'react'
import { details } from './data'
import Link from 'next/link'
import Image from 'next/image'
import { courses } from './data'
import { BackgroundBeams } from '@/components/ui/background-beams'

const Page = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Logo at the top center */}
      <div className="mb-6 pt-4 pl-2">
        <Image
          src={details.Image}
          width={80}
          height={80}
          alt="Logo"
          className=""
        />
      </div>

      {/* Centered Content */}
      <div className="text-center px-4 flex flex-col items-center justify-center relative">
        <h1 className="text-5xl font-bold mb-4">
          {details.title}
        </h1>
        <h3 className="text-3xl mb-2">
          {details.subtitle}
        </h3>
        
        <div className='pt-5 mb-5'>
          <p className="mb-5 text-center">Here are the courses we offer!</p>

          {/* Courses Section */}
          <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 w-full">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-700 rounded-lg hover:translate-x-1 lg:hover:translate-y-2 opacity-100 hover:opacity-100 hover:bg-gray-900 hover:shadow-white hover:shadow-2xl
                 overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={course.image}
                  width={400}
                  height={150}
                  alt={course.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-200 mb-3 text-sm opacity-50">{course.description}</p>
                 
                </div>
              </div>
            ))}
          </section>
        </div>

        <div className="mt-6 text-center mb-10">
  <p className="text-lg mb-4">
    {details.text}
  </p>
  
  <div className="flex justify-center space-x-4">
    <Link href="/signup">
      <button className="px-4 py-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
        Sign Up
      </button>
    </Link>

    <Link href="/login">
      <button className="px-4 py-2 rounded-2xl bg-gray-600 text-white hover:bg-gray-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
        Log In
      </button>
    </Link>

    <Link href="/send-message">
      <button className="px-4 py-2 rounded-2xl bg-yellow-500 text-gray-800 hover:bg-yellow-600 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
        Send Feedback
      </button>
    </Link>
  </div>
</div>

      </div>
      <BackgroundBeams />
    </div>
    
  )
}

export default Page
