import React, { useState } from "react";

const images = [
  "https://keyvendors.com/blogs/wp-content/uploads/2023/06/rental-furniture.png",
  "https://roofandfloor.thehindu.com/raf/real-estate-blog/wp-content/uploads/sites/14/2018/10/Furniture-rental-1920x480-840x480.jpg",
  "https://www.tenanto.in/images/category/living%20room.webp",
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-xs sm:max-w-full mx-auto">
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Appliances"
          className="w-full h-96 object-cover rounded-xl transition-all duration-500"
        />
      </div>

      {/* Previous button with SVG arrow */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black p-2 rounded-full"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next button with SVG arrow */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black p-2 rounded-full"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default ImageCarousel;
