import React from "react";
// import Image from "next/image";

function ApplianceCard({ appliance }) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
      {/* Appliance Image */}
      <div className="relative h-48">
        <img
          src={`http://localhost:4500/${appliance.images[0]}`}
          alt={appliance.applianceName}
          layout="fill"
          objectFit="cover"
          className="grayscale" // Apply grayscale filter to the image
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
        <p className="text-sm text-gray-600 mb-2">Description: {appliance.notes}</p>
        <p className="text-sm text-gray-600">
          Posted by: {appliance.userName} 
        </p>
      </div>

      {/* Rent Button */}
      <div className="p-4 bg-gray-100">
        <button className="w-full py-2 rounded-lg font-semibold bg-black text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
          Rent Now
        </button>
      </div>
    </div>
  );
}

export default ApplianceCard;
