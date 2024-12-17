import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-blue-50 relative overflow-hidden">
      {/* Header Section */}
      <div
        className="absolute top-0 w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x400/?airplane,clouds')",
        }}
      ></div>

      {/* Content Section */}
      <div className="z-10 mt-32 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Flight Booker</h1>
        <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto">
          Your gateway to the skies! Plan your journey with ease and convenience.
        </p>
        <Link to="/book">
          <button className="bg-blue-600 px-8 py-3 text-white rounded-lg shadow-lg hover:bg-blue-500 transition text-lg">
            Book a Flight
          </button>
        </Link>
      </div>

      {/* Airplane Icon Background */}
      <div className="absolute inset-0 bg-airplane-pattern opacity-10"></div>
    </div>
  );
};

export default LandingPage;
