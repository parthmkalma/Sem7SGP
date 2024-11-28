import React from "react";
import { useUser } from "../UserContext";

function ApplianceCard({ appliance }) {
  const { name, email } = useUser(); // Get current user details

  const handleRentNow = async () => {
    try {
      const response = await fetch("http://localhost:5000/rent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applianceId: appliance.id, // Unique identifier for the appliance
          applianceName: appliance.applianceName, // Name of the appliance
          monthlyRent: appliance.monthlyRent, // Rental price
          notes: appliance.notes, // Additional information
          contactNumber: appliance.contactNumber, // New field
          location: appliance.location, // New field
          userName: appliance.userName, // Owner's name
          userEmail: appliance.userEmail, // Owner's email
          currentLoginName: name, // Current user's name
          currentLoginEmail: email, // Current user's email
        }),
      });

      if (response.ok) {
        alert("Appliance rented successfully!");
      } else {
        const errorData = await response.json();
        alert(`Failed to rent appliance: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error renting appliance:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this appliance?")) {
      try {
        const response = await fetch(
          `http://localhost:4500/appliances/${appliance.id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          alert("Appliance deleted successfully!");
          window.location.reload();
        } else {
          const errorData = await response.json();
          alert(`Failed to delete appliance: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error deleting appliance:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
      {/* Appliance Image */}
      <div className="relative h-48">
        <img
          src={`http://localhost:4500/${appliance.images[0]}`}
          alt="fetching..."
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>

      {/* Appliance Details */}
      <div className="p-4 bg-white">
        <h2 className="text-xl font-semibold mb-2 text-black">
          {appliance.applianceName}
        </h2>
        <p className="text-lg font-bold mb-2 text-black">
          ${appliance.monthlyRent}/Month
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Description: {appliance.notes}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Location: {appliance.location}
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Contact Number: {appliance.contactNumber}
        </p>
        <p className="text-sm text-gray-600">Posted by: {appliance.userName}</p>
      </div>

      <div className="p-4 bg-gray-100 flex flex-col gap-2">
        <button
          onClick={handleRentNow}
          className="w-full py-2 rounded-lg font-semibold bg-black text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Rent Now
        </button>

        {/* Show Delete Button if the logged-in user is the owner */}
        {email === appliance.userEmail && (
          <button
            onClick={handleDelete}
            className="w-full py-2 rounded-lg font-semibold bg-red-600 text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default ApplianceCard;
