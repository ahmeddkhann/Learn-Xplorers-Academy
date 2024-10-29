// src/pages/physics.js
"use client";

import React, { useState } from 'react';
import { physicsBasic, physicsBranches } from '@/app/data';
import Link from 'next/link';

const Physics = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-900 py-10 min-h-screen overflow-hidden">
            {/* Navbar */}
            <div className="bg-blue-800 p-4 text-gray-300">
                <div className="flex justify-end items-center">
                    <button
                        className="text-gray-200 hover:text-gray-300 sm:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>
                <div className={`sm:flex ${isOpen ? 'block' : 'hidden'} justify-end`}>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/physics"}>
                        Home
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/physics/books"}>
                        Books
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/physics/physicists"}>
                        Physicists
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard"}>
                        Dashboard
                    </Link>
                </div>
            </div>

            {/* Page Content */}
            <div className="container mx-auto mt-8 p-4">
                <h1 className="text-4xl font-bold text-gray-200 mb-6 text-center">{physicsBasic.title}</h1>
                <p className="text-xl text-gray-200 mb-8 text-center">{physicsBasic.definition}</p>
                
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-4">
                        <p className="text-2xl text-gray-200 mb-6">{physicsBasic.explanation}</p>
                    </div>
                    <img src={physicsBasic.image} alt="Physics" className="w-full h-auto md:w-1/2 rounded-lg" />
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white text-center mt-10 mb-4">Branches of Physics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {physicsBranches.map((branch, index) => (
                    <div key={index} className="bg-gray-600 shadow-md rounded-lg p-4 mx-4 transition-transform duration-300 hover:scale-105">
                        <img src={branch.image} alt={branch.branch} className="w-full h-32 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold">{branch.branch}</h3>
                        <p className="text-gray-300 opacity-50 text-sm">{branch.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Physics;
