import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful sign up
    setShowPopup(true);

    // Optional: reset the form
    e.target.reset();
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50 relative dark:bg-dark-contrast">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md dark:bg-dark-contrast">
        <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">Create an Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-orange-500">Full Name</label>
            <input
              type="text"
              className="mt-1 w-full p-2 border dark:text-gray-100   border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder ="John Doe" 
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-orange-500">Email</label>
            <input
              type="email"
              className="mt-1 w-full p-2 border dark:text-gray-100  border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-orange-500">Password</label>
            <input
              type="password"
              className="mt-1 w-full p-2 dark:text-gray-100  border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-orange-500">Confirm Password</label>
            <input
              type="password"
              className="mt-1 w-full p-2 border dark:text-gray-100  border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 dark:text-gray-100  text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account? <Link to='/login'  className="text-orange-500 font-medium hover:underline">Log in</Link>
        </p>
      </div>

    
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center w-80">
            <h3 className="text-xl font-semibold text-orange-500 mb-4">Account Created!</h3>
            <p className="text-gray-700 mb-4">Your account has been successfully created.</p>
            <button
              onClick={closePopup}
              className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;
