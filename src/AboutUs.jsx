import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-green-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 text-center">About Us</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>Learn more about us! This is the About Us page.</p>
                <p>Go back to the <Link to="/" className="text-green-500 hover:text-green-700">Home</Link> page or visit the <Link to="/team" className="text-green-500 hover:text-green-700">Team</Link> page.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
