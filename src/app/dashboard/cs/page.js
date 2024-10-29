// src/pages/csBranches.js
"use client";

import React, { useState } from 'react';
import { csBranches, csBasic } from '@/app/data'; // Adjust the import path as necessary
import Link from 'next/link';

const CSBranches = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-900 py-10 min-h-screen dark:bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] ">
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
                <h1 className="text-4xl font-bold text-white text-center mb-6">{csBasic.title}</h1>
                <p className="text-xl text-gray-200 mb-8 text-center">{csBasic.definition}</p>
                
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-4">
                        <p className="text-2xl text-gray-200 mb-6">{csBasic.explanation}</p>
                    </div>
                    <img src={csBasic.image} alt="Computer Science" className="w-full h-auto md:w-1/2 rounded-lg" />
                </div>
            </div>

            {/* CS Branches Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {csBranches.map((branch, index) => (
          <div
            key={index}
            className="bg-gray-600 opacity-50 hover:opacity-100 hover:bg-gray-800 shadow-md rounded-lg p-4 
            mx-4 transition-transform duration-300 transform hover:scale-105  hover:shadow-2xl hover:shadow-white "
          >
            <img
              src={branch.image}
              alt={branch.branch}
              className="w-full h-32 object-cover rounded-lg mb-4 opacity-100"
            />
            <h3 className="text-xl font-semibold opacity-100">
              {branch.branch}
            </h3>
            <p className="text-gray-300 text-sm ">{branch.description}</p>
          </div>
        ))}
      </div>
        </div>
    );
};

export default CSBranches;
