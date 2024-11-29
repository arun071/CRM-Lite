import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! The page you are looking for does not exist.</p>
        <div className="text-6xl text-gray-400 mb-6">
          <span role="img" aria-label="confused face">🤷‍♂️</span>
        </div>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
