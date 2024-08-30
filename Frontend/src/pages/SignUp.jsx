import React from "react";
import { Refrigerator } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";

export default function SignupComponent() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-[650px] p-8 space-y- bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center  text-center">
            <Refrigerator className="w-16 h-16 text-primary" />
            <h1 className="text-4xl font-bold text-gray-800">RentiFy</h1>
        
          </div>
          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                placeholder="John Doe"
                required
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                placeholder="you@example.com"
                required
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                required
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                required
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <button
              className="w-full px-4 py-3 text-white bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <div className="text-center text-sm">
            {"Already have an account? "}
            <Link className="underline text-primary" to="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}