// src/pages/literaryFigures.js
"use client";

import React, { useState } from 'react';
import { literaryFigures } from '@/app/data'; // Adjust the import path as necessary
import Link from 'next/link';

const LiteraryFigures = () => {
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
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300 hover:underline" href={"/dashboard/english"}>
                        Home
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300 hover:underline" href={"/dashboard/english/books"}>
                        Books
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300 hover:underline" href={"/dashboard/english/authors"}>
                        Authors
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300 hover:underline" href={"/dashboard"}>
                        Dashboard
                    </Link>
                </div>
            </div>

            {/* Page Title */}
            <div className="container mx-auto mt-8 p-4">
                <h1 className="text-4xl font-bold text-white text-center mb-6">Literary Figures</h1>
            </div>

            {/* Literary Figures Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-0 sm:mx-4">
                {literaryFigures.map((figure) => (
                    <div key={figure.id} className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden transition-transform duration-300
                    opacity-50 hover:opacity-100 hover:translate-x-3 hover:translate-y-3 hover:shadow-white hover:shadow-2xl hover:bg-gray-950 hover:scale-105 p-4">
                        <img src={figure.image} alt={figure.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                        <h2 className="text-xl text-gray-100 font-bold">{figure.name}</h2>
                        <p className="text-gray-200 mb-2">{figure.span}</p>
                        <p className="text-gray-400">{figure.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiteraryFigures;
