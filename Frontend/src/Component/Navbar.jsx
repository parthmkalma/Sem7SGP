import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          to="/"
          className="flex items-center justify-center text-2xl font-bold ml-5"
        >
          RentiFy
          {/* <span className="sr-only">Rental Appliances</span> */}
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            to="/appliance"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Appliances
          </Link>
          <Link
            to="/HowItWorks"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            How It Works
          </Link>
          <Link
            to="/Login"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Login
          </Link>
          <Link
            to="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
