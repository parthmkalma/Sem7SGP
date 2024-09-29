import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing social media icons
import { Link } from "react-router-dom";
import { useUser } from "../UserContext"; // Import your context hook

function Navbar() {
  const { name } = useUser(); // Get the name from context
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile sidebar

  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-white shadow-md">
        <Link
          to="/"
          className="flex items-center justify-center text-2xl font-bold ml-5"
        >
          RentiFy
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden block text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Links for larger screens */}
        <nav className="hidden lg:flex ml-auto gap-4 sm:gap-6 items-center">
          <Link
            to="/appliance"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Appliances
          </Link>
          <Link
            to="/AddItem"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Add Item
          </Link>
          <Link
            to="/HowItWorks"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            How It Works
          </Link>
          {name ? (
            <span className="text-sm font-medium">Profile</span>
          ) : (
            <Link
              to="/Login"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Login
            </Link>
          )}
        </nav>

        {/* Sidebar Menu for Mobile */}
        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform transition-transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
          style={{ width: "55%" }} // Sidebar takes 55% of the screen width
        >
          <div className="flex justify-end p-4">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          {/* Main Content of the Sidebar */}
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col items-start space-y-4 p-4">
              <Link
                to="/appliance"
                className="text-lg font-medium hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Appliances
              </Link>
              <Link
                to="/AddItem"
                className="text-lg font-medium hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Add Item
              </Link>
              <Link
                to="/HowItWorks"
                className="text-lg font-medium hover:underline"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              {name ? (
                <span className="text-lg font-medium">Profile</span>
              ) : (
                <Link
                  to="/Login"
                  className="text-lg font-medium hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>

            {/* Contact Us Section with Icons - Positioned at the bottom */}
            <div className="p-4 pb-24">
              <div className="text-lg font-medium mb-2">Contact Us:</div>
              <div className="flex justify-around">
                <a
                  href="https://www.instagram.com/ashish_n_khatwani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashish-khatwani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay for when sidebar is open (optional) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
