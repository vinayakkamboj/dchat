"use client";

import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto p-4">
        <ul className="flex justify-between space-x-8">
          <li>
            <a href="/" className="font-bold hover:text-gray-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/chat" className="hover:text-gray-300 transition">
              Chat
            </a>
          </li>
          <li>
            <a href="/profile" className="hover:text-gray-300 transition">
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
