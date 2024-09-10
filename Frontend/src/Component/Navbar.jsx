import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../UserContext"; // Import your context hook

function Navbar() {
  const { name } = useUser(); // Get the name from context

  return (
    <div>
      <header className="bg-muted px-4 lg:px-6 h-14 flex items-center">
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
            <span className="text-sm font-medium">Hello, {name}</span>
          ) : (
            <Link
              to="/Login"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Login
            </Link>
          )}
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
