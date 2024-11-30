import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import axios from "axios";

export default function ContactAndFeedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/contact",
        formData
      );
      setResponseMessage(
        "Thank you for your message! We will get back to you soon."
      );
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage(
        "There was an error submitting your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Contact Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px] sm:grid-cols-1">
              <div className="space-y-4 text-center sm:text-left">
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Drop Your Feedback
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto sm:mx-0">
                    We'd love to hear from you! Whether you have questions about
                    our services, need support, or just want to provide
                    feedback, our team is here to help.
                  </p>
                </div>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="h-12 w-full rounded-md border border-gray-300 px-4 focus:border-primary focus:ring-primary"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="h-12 w-full rounded-md border border-gray-300 px-4 focus:border-primary focus:ring-primary"
                    required
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Your Message"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
                {responseMessage && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    {responseMessage}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Contact Us"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 RentIt. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
