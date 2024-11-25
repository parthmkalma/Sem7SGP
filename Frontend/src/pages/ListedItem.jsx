import React, { useState, useEffect } from "react";
import axios from "axios";
import ApplianceCard from "./ApplianceCard"; // Adjust the import if needed
import Navbar from "../Component/Navbar";

export default function ListedItems() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // State for sorting (asc or desc)
  const [appliances, setAppliances] = useState([]);

  // Fetch appliances from JSON server
  useEffect(() => {
    const fetchAppliances = async () => {
      try {
        const response = await axios.get("http://localhost:4500/appliances");
        setAppliances(response.data); // Set the fetched appliances to state
      } catch (error) {
        console.error("Error fetching appliances:", error);
      }
    };

    fetchAppliances();
  }, []);

  // Filter and sort appliances based on user input
  const filteredAndSortedAppliances = appliances
    .filter((appliance) =>
      appliance.applianceName?.toLowerCase().includes(searchTerm.toLowerCase())
    ) // Filter by name
    .sort((a, b) => {
      const rentA = parseFloat(a.monthlyRent);
      const rentB = parseFloat(b.monthlyRent);
      return sortOrder === "asc" ? rentA - rentB : rentB - rentA; // Sort by rent
    });

  return (
    <div>
      <Navbar />
      {/* Add spacing between Navbar and search bar */}
      <div className="mt-6 flex flex-col items-center gap-6 mb-8">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search appliances..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 p-2 border rounded"
        />

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full sm:w-1/4 p-2 border rounded"
        >
          <option value="asc">Sort by Rent: Low to High</option>
          <option value="desc">Sort by Rent: High to Low</option>
        </select>
      </div>

      {/* Displaying Filtered and Sorted Appliances */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAndSortedAppliances.map((appliance) => (
          <ApplianceCard key={appliance.id} appliance={appliance} />
        ))}
      </div>
    </div>
  );
}
  