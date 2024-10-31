// src/pages/mathBooks.js
"use client";

import React, { useState } from 'react';
import { mathBooks } from '@/app/data'; // Adjust the import path as necessary
import Link from 'next/link';
import { BackgroundGradient } from '@/components/ui/background-gradient';

const MathBooks = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-900 py-10 min-h-screen">
            {/* Navbar */}
            <div className="bg-blue-800 p-4 text-gray-300 hover:text-gray-400">
                <div className="flex justify-end items-center hover:underline">
                    <button
                        className="text-gray-200 hover:text-gray-300 sm:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>
                <div className={`sm:flex ${isOpen ? 'block' : 'hidden'} justify-end`}>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300 hover:underline" href={"/dashboard/mathematics"}>
                        Home
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300 hover:underline" href={"/dashboard/mathematics/books"}>
                        Books
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300 hover:underline" href={"/dashboard/mathematics/pioneers"}>
                        Pioneers
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300 hover:underline" href={"/dashboard"}>
                        Dashboard
                    </Link>
                </div>
            </div>

            {/* Page Title */}
            <div className="container mx-auto mt-8 p-4">
                <h1 className="text-4xl font-bold text-white text-center mb-6">Mathematics Books</h1>
            </div>

            {/* Book Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-0 sm:mx-4">
        {mathBooks.map((book, index) => (
          <BackgroundGradient key={index} className="rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 p-4">
            <div className="p-4 bg-gray-800 shadow-2xl">
              <h2 className="text-xl text-gray-100 font-bold">{book.title}</h2>
              <p className="text-gray-200 mb-2">by {book.author}</p>
              <p className="text-gray-300">Published: {book.year}</p>
              <p className="text-gray-400 mt-2">{book.description}</p>
              <div className='mt-4 mb-2 text-black'>
           <Link href={"#"} className='bg-gray-100 hover:bg-gray-400 px-3 py-2 rounded-lg '>
              Read more
           </Link>
           </div>
            </div>
          </BackgroundGradient>
        ))}
      </div>
        </div>
    );
};

export default MathBooks;
