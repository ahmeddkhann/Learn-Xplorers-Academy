// src/pages/literature.js
"use client";

import React, { useState } from 'react';
import { literatureBasic, literatureGenres } from '@/app/data';
import Link from 'next/link';

const Literature = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-900 py-10 min-h-screen overflow-hidden">
            {/* Navbar */}
            <div className="bg-purple-800 p-4 text-gray-300">
                <div className="flex justify-end items-center">
                    <button
                        className="text-gray-200 hover:text-gray-300 sm:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>
                <div className={`sm:flex ${isOpen ? 'block' : 'hidden'} justify-end`}>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/english"}>
                        Home
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/english/books"}>
                        Books
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/english/authors"}>
                        Authors
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard"}>
                        Dashboard
                    </Link>
                </div>
            </div>

            {/* Page Title and Basic Information */}
            <div className="container mx-auto mt-8 p-4">
                <h1 className="text-4xl font-bold text-white text-center mb-6">{literatureBasic.title}</h1>
                <p className="text-xl text-gray-200 mb-8 text-center">{literatureBasic.definition}</p>
                
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-4">
                        <p className="text-2xl text-gray-200 mb-6">{literatureBasic.explanation}</p>
                    </div>
                    <img src={literatureBasic.image} alt="English Literature" className="w-full h-auto md:w-1/2 rounded-lg" />
                </div>
            </div>

            {/* Literature Genres */}
            <h2 className="text-3xl font-semibold text-white text-center mt-10 mb-4">Genres of English Literature</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4">
                {literatureGenres.map((genre, index) => (
                    <div key={index} className="bg-purple-700 shadow-md rounded-lg p-4 transition-transform duration-300 hover:scale-105">
                        <img src={genre.image} alt={genre.genre} className="w-full h-32 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-semibold text-gray-100">{genre.genre}</h3>
                        <p className="text-gray-300">{genre.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Literature;
