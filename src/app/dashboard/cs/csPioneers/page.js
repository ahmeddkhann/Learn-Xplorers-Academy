// src/pages/csPioneers.js
"use client";

import React, { useState } from 'react';
import { csPioneers } from '@/app/data'; // Adjust the import path as necessary
import Link from 'next/link';

const CSPioneers = () => {
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
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300 hover:underline" href={"/dashboard/cs"}>
                        Home
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300 hover:underline" href={"/dashboard/cs/books"}>
                        Books
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300 hover:underline" href={"/dashboard/cs/csPioneers"}>
                        CS Pioneers
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300 hover:underline" href={"/dashboard"}>
                        Dashboard
                    </Link>
                </div>
            </div>

            {/* Page Title */}
            <div className="container mx-auto mt-8 p-4">
                <h1 className="text-4xl font-bold text-white text-center mb-6">Pioneers of Computer Science</h1>
                <p className="text-xl text-gray-200 mb-8 text-center">
                    A tribute to the remarkable individuals who shaped the field of computer science.
                </p>
            </div>

            {/* Pioneers List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-0 sm:mx-4">
                {csPioneers.map((pioneer) => (
                    <div key={pioneer.id} className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden hover:bg-gray-950
                    opacity-80 hover:opacity-100  hover:shadow-white hover:shadow-2xl
                     transition-transform duration-300 hover:scale-105">
                        <img src={pioneer.image} alt={pioneer.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl text-gray-100 font-bold">{pioneer.name}</h2>
                            <p className="text-gray-200">{pioneer.span}</p>
                            <p className="text-gray-200 mb-2">{pioneer.description}</p>
                        </div>
                        <div className='mb-4 ml-4 text-white'>
           <Link href={"#"} className='bg-blue-600 hover:bg-blue-800 px-3 py-2 rounded-lg '>
              View more
           </Link>
           </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CSPioneers;
