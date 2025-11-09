import React from "react"

// images imported
import carousel1 from "../assets/carousel1.jpg"
import carousel2 from "../assets/carousel2.jpg"
import carousel3 from "../assets/carousel3.jpg"

// carousel slides
const slides = [
  {
    image: carousel1,
    title: "The Gorge",
    subtitle: "Thriller · Emmy® Award Winner",
  },
  {
    image: carousel2,
    title: "Slow Horses",
    subtitle: "Spy Drama · Emmy® Award Nominee",
  },
  {
    image: carousel3,
    title: "For All Mankind",
    subtitle: "Sci-Fi · Critically Acclaimed",
  },
]

const Carousel = () => {
  return (
    // carousel container
    <section className="w-full bg-white text-black overflow-hidden cursor-pointer">
      {/* Horizontal swipe-like row */}
      <div className="flex items-center justify-center space-x-4 px-4 sm:px-6 md:px-12 ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-[80vw] md:w-[80vw] h-[90vh] overflow-hidden"
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Apple TV+ logo */}
            <div className="absolute top-6 right-6 flex items-center space-x-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple logo"
                className="w-6 h-6"
              />
              <span className="text-lg font-semibold text-white drop-shadow-md">
                tv+
              </span>
            </div>

            {/* Bottom-left text + button */}
            <div className="absolute bottom-10 left-10 flex flex-col md:flex-row md:items-center md:space-x-4">
              <button className="bg-white text-black px-5 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition">
                Stream now
              </button>
              <p className="text-white mt-2 md:mt-0 text-lg font-medium drop-shadow">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pause Button on bottom-right */}
      <div className="flex justify-end items-center pr-3">
        <button className="w-6 h-6 mt-1 rounded-full bg-[#1c1c1e] flex items-center justify-center hover:bg-[#2c2c2e] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 4.5v15m10.5-15v15" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center space-x-2 pb-1">
        <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
      </div>
    </section>
  )
}

export default Carousel
