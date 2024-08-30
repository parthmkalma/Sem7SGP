import React, { useState } from "react";
import { Refrigerator } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send-otp', { email });
      setMessage('OTP sent to your email!');
      setStep(2);
    } catch (error) {
      setMessage('Error sending OTP. Please try again.');
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/verify-otp', { email, otp });
      if (response.data.success) {
        setMessage('Login successful!');
        // Redirect to another page or perform further actions
      } else {
        setMessage('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setMessage('Error verifying OTP. Please try again.');
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
            <p className="text-sm text-gray-500">
              Log in to manage your appliance rentals
            </p>
          </div>
          {step === 1 && (
            <form className="space-y-6" onSubmit={handleEmailSubmit}>
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
          <div className="text-center text-sm">
            {step === 1 ? (
              <Link className="underline text-primary" to="#">
                Forgot password?
              </Link>
            ) : (
              <p className="text-gray-500">{message}</p>
            )}
          </div>
          {step === 1 && (
            <div className="text-center text-sm">
              {"Don't have an account? "}
              <Link className="underline text-primary" to="/signup">
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
