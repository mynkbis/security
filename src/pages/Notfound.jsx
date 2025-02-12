import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#002B4E] via-blue-900 to-blue-600 flex flex-col items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
        <p className="text-lg mb-8">
          The page you're looking for might have been moved, or never existed.
        </p>
        <Link
          to="/"
          className="bg-white text-blue-900 px-6 py-3 rounded-lg text-xl hover:bg-blue-900 border hover:!text-white transition-colors"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
