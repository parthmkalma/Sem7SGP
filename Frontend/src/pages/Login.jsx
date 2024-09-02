import React, { useState } from "react";
import { Refrigerator } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { useUser } from "../UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState(""); // Local state for name
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const { setName: setUserName } = useUser(); // Context method to set the name
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/generate-otp", {
        email,
      });
      alert("OTP sent to your email!");
      setStep(2);
    } catch (error) {
      setMessage("Error sending OTP. Please try again.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/verify-otp", {
        email,
        otp,
      });

      const message = response.data.message;

      if (message === "OTP verified successfully") {
        setMessage("Login successful!");
        alert("Login successful!");

        // Set the name in context
        setUserName(name);

        // Redirect to home page
        navigate("/");
      } else if (message === "Invalid OTP") {
        setMessage("Invalid OTP. Please try again.");
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setMessage("Error verifying OTP. Please try again.");
      alert("Error verifying OTP. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center space-y-3 text-center">
            <Refrigerator className="w-16 h-16 text-primary" />
            <h1 className="text-4xl font-bold text-gray-800">RentiFy</h1>
          </div>
          {step === 1 && (
            <form className="space-y-6" onSubmit={handleEmailSubmit}>
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
                  value={name} // Bind the input value to the name state
                  onChange={(e) => setName(e.target.value)} // Update the name state
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <button
                className="w-full px-4 py-3 text-white bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                type="submit"
              >
                Send OTP
              </button>
            </form>
          )}
          {step === 2 && (
            <form className="space-y-6" onSubmit={handleOtpSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="otp"
                  className="text-sm font-medium text-gray-700"
                >
                  OTP
                </label>
                <input
                  id="otp"
                  placeholder="Enter OTP"
                  required
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
              <button
                className="w-full px-4 py-3 text-white bg-primary rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                type="submit"
              >
                Verify OTP
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
