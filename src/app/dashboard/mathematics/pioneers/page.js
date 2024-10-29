// src/pages/mathPioneers.js
"use client";

import React, { useState } from 'react';
import { mathPioneers } from '@/app/data'; // Adjust the import path as necessary
import Link from 'next/link';

const MathPioneers = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-900 py-10 min-h-screen">
            {/* Navbar */}
            <div className="bg-blue-800 p-4 text-gray-300 hover:text-gray-400">
                <div className="flex justify-end items-center">
                    <button
                        className="text-gray-200 hover:text-gray-300 sm:hidden hover:underline"
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
                <h1 className="text-4xl font-bold text-white text-center mb-6">Mathematical Pioneers</h1>
            </div>

            {/* Pioneers Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-0 sm:mx-4">
                {mathPioneers.map((pioneer) => (
                    <div key={pioneer.id} className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 p-4">
                        <img src={pioneer.image} alt={pioneer.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                        <h2 className="text-xl text-gray-100 font-bold">{pioneer.name}</h2>
                        <p className="text-gray-200 mb-2">{pioneer.span}</p>
                        <p className="text-gray-400">{pioneer.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MathPioneers;
