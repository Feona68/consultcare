import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl font-bold mb-8">Sign Up</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block text-gray-700">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">Address:</label>
            <input
              type="text"
              id="address"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNo" className="block text-gray-700">Phone Number:</label>
            <input
              type="tel"
              id="phoneNo"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sex" className="block text-gray-700">Gender:</label>
            <select
              id="sex"
              className="border rounded w-full py-2 px-3"
              required
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login/user" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;