// src/pages/csBooks.js
"use client";

import React, { useState } from 'react';
import { csBooks } from '@/app/data'; // Adjust the import path as necessary
import Link from 'next/link';

const CSBooks = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-900 py-10 min-h-screen">
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
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/cs"}>
                        Home
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/cs/books"}>
                        Books
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard/cs/csPioneers"}>
                        CS Pioneers
                    </Link>
                    <Link className="block mr-10 text-gray-200 hover:text-gray-300" href={"/dashboard"}>
                        Dashboard
                    </Link>
                </div>
            </div>

            {/* Page Title */}
            <div className="container mx-auto mt-8 p-4">
                <h1 className="text-4xl font-bold text-white text-center mb-6">Computer Science Books</h1>
                <p className="text-xl text-gray-200 mb-8 text-center">
                    A curated list of essential books for understanding computer science.
                </p>
            </div>

            {/* Books List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-0 sm:mx-4">
                {csBooks.map((book, index) => (
                    <div key={index} className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 p-4">
                        <h2 className="text-xl text-gray-100 font-bold">{book.title}</h2>
                        <p className="text-gray-200">by {book.author}</p>
                        <p className="text-gray-300 italic">{book.year}</p>
                        <p className="text-gray-200 mb-2">{book.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CSBooks;
