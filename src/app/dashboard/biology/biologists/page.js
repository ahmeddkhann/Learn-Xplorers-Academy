// src/pages/biologists.js
"use client";

import React, { useState } from 'react';
import { biologist } from '@/app/data';
import Link from 'next/link';

const Biologists = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-900 py-10 min-h-screen overflow-hidden">
            {/* Navbar */}
            <div className="bg-green-800 p-4 text-gray-300">
                <div className="flex justify-end items-center">
                    <button
                        className="text-gray-200 hover:text-gray-300 sm:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>
                <div className={`sm:flex ${isOpen ? 'block' : 'hidden'} justify-end`}>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/biology"}>
                        Home
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/biology/books"}>
                        Books
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/biology/biologists"}>
                        Scientists
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard"}>
                        Dashboard
                    </Link>
                </div>
            </div>

            {/* Page Title */}
            <div className="container mx-auto mt-8 p-4">
                <h1 className="text-4xl font-bold text-white text-center mb-6">Notable Biologists</h1>
            </div>

            {/* Biologist Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-0 sm:mx-4">
                {biologist.map((bio) => (
                    <div key={bio.id} className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 p-4">
                        <img src={bio.image} alt={bio.name} className="w-full h-32 object-cover rounded-lg mb-4" />
                        <div className="p-4">
                            <h2 className="text-xl text-gray-100 font-bold">{bio.name}</h2>
                            <p className="text-gray-200 mb-2">{bio.span}</p>
                            <p className="text-gray-400">{bio.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Biologists;