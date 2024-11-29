import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPageHeader() {
  return (
    <header className="bg-gradient-to-r h-1/2 from-blue-600 to-blue-500 text-white">
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">CRM Lite</a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="hover:text-gray-200 transition">Features</a>
          <a href="#pricing" className="hover:text-gray-200 transition">Pricing</a>
          <a href="#contact" className="hover:text-gray-200 transition">Contact</a>
          <Link to="/signin" className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Manage Your Business Seamlessly
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          CRM Lite helps you track leads, manage tasks, and grow your business. Start your journey with us today!
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
            Get Started Free
          </button>
          <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </header>
  );
}
