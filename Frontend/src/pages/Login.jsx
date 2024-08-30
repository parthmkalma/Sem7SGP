import React from "react";
import { Refrigerator } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";

export default function Component() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center space-y-3 text-center">
            <Refrigerator className="w-16 h-16 text-primary" />
            <h1 className="text-4xl font-bold text-gray-800">RentiFy</h1>
            <p className="text-sm text-gray-500">
              Log in to manage your appliance rentals
            </p>
          </div>
          <form className="space-y-6">
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
            <button
              className="w-full px-4 py-3 text-white bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              type="submit"
            >
              Log In
            </button>
          </form>
          <div className="text-center text-sm">
            <Link className="underline text-primary" to="#">
              Forgot password?
            </Link>
          </div>
          <div className="text-center text-sm">
            {"Don't have an account? "}
            <Link className="underline text-primary" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}
