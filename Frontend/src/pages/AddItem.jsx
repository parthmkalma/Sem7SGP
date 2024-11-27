import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { useUser } from "../UserContext";
import { useState } from "react";
import axios from "axios";

export default function Component() {
  const { name, email } = useUser(); // Get the user's name and email from context
  const [formData, setFormData] = useState({
    applianceName: "",
    monthlyRent: "",
    notes: "",
    contactNumber: "", // New field
    location: "", // New field
  });
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const fileNames = Array.from(e.target.files).map((file) => file.name);
    setImages(fileNames);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const payload = {
      ...formData, // Includes applianceName, monthlyRent, notes, contactNumber, location
      userName: name, // Include the user's name
      userEmail: email, // Include the user's email
      images, // Save file names or paths
    };

    try {
      const response = await axios.post(
        "http://localhost:4500/appliances", // JSON Server endpoint
        payload
      );

      alert("Appliance saved successfully!");
      setFormData({
        applianceName: "",
        monthlyRent: "",
        notes: "",
        contactNumber: "", // Reset contact number
        location: "", // Reset location
      });
      setImages([]);
    } catch (error) {
      console.error("Error saving appliance:", error);
      alert("Failed to save appliance.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {name ? (
        <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl mt-4 ">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold">Add Rental Appliance</h1>
              <p className="text-gray-500">
                Enter the details of your rental appliance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="applianceName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Appliance Name
                    </label>
                    <input
                      id="applianceName"
                      placeholder="e.g. Refrigerator"
                      value={formData.applianceName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="monthlyRent"
                      className="text-sm font-medium text-gray-700"
                    >
                      Monthly Rent
                    </label>
                    <input
                      id="monthlyRent"
                      type="number"
                      placeholder="e.g. $50"
                      value={formData.monthlyRent}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="contactNumber"
                      className="text-sm font-medium text-gray-700"
                    >
                      Contact Number
                    </label>
                    <input
                      id="contactNumber"
                      type="tel"
                      placeholder="e.g. 123-456-7890"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="location"
                      className="text-sm font-medium text-gray-700"
                    >
                      Location
                    </label>
                    <input
                      id="location"
                      placeholder="e.g. New York, NY"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="notes"
                    className="text-sm font-medium text-gray-700"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    placeholder="Enter any additional details"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="photos"
                    className="text-sm font-medium text-gray-700"
                  >
                    Upload Photos
                  </label>
                  <input
                    id="photos"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-4 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? "Saving..." : "Save Appliance"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              You are not logged in. Please login.
            </h1>
            <div className="mt-6">
              <Link
                to="/Login"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
