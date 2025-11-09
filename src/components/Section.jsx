import React from "react"
import Button from "./Button"

// images imported
import section3 from "../assets/section3.jpg"
import section4 from "../assets/section4.jpg"
import section6 from "../assets/section6.jpg"
import hero3 from "../assets/hero3.jpg"

// section grid items
const sections = [
  {
    img: section6,
    title: "Using them togethe \nsets them apart",
    subtitle: "Apple device work together so seamlessly,\nit almost feels like magic.",
  },
  {
    img: hero3,
    title: "iPad Pro",
    subtitle: "Advanced AI performance\nand game‑changing capabilities.",
  },
  {
    img: section3,
    title: "WATCH SERIES 11",
    subtitle: "The ultimate way to\nwatch your health.",
  },
  {
    img: section4,
    title: "AirPods Pro 3",
    subtitle: "The world’s best in‑ear\nActive Noise Cancellation.",
  },
  {
    img: section4,
    title: "MacBook Air",
    subtitle: "Sky blue colour.\nSky high performance with M4.",
  },
  {
    img: section6,
    title: "Trade In",
    subtitle: "Upgrade and save.\nIt's that easy",
  },

]

const Section = () => {
  return (
    // section container
    <div className="p-0 sm:p-3 bg-white cursor-pointer">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-full mx-auto">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="relative w-full h-[550px] overflow-hidden"
          >
            {/* Cover Image */}
            <img
              src={section.img}
              alt={section.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Apple logo for specific sections */}
            {section.title === "WATCH SERIES 11" && (
              <div className="absolute top-10 sm:top-8 md:top-10 left-20 sm:left-48 flex items-center space-x-1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple logo"
                  className="w-6 sm:w-7 h-6 sm:h-7"
                />
              </div>
            )}

            {section.title === "Trade In" && (
              <div className="absolute top-10 sm:top-8 md:top-10 left-36 sm:left-64 flex items-center space-x-1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple logo"
                  className="w-6 sm:w-7 h-6 sm:h-7"
                />
              </div>
            )}


            {/* Text & Button overlay */}
            <div className={`relative z-10 px-6 pt-8 text-center ${section.title === "iPad Pro" ? "text-white" : "text-black"}`}>
              <h2 className="text-3xl md:text-4xl font-semibold whitespace-pre-line">
                {section.title}
              </h2>
              <p className="mt-2 text-lg md:text-xl whitespace-pre-line">
                {section.subtitle}
              </p>
              <div className="mt-6 flex justify-center">
                {section.title === "Trade In" ? (
                  <button className="bg-blue-600 text-white px-7 py-3 rounded-full font-medium text-m hover:bg-blue-700 transition duration-300">
                    Get your estimate
                  </button>
                ) : section.title === "Using them togethe \nsets them apart" ? (
                  <button className="bg-blue-600 text-white px-7 py-3 rounded-full font-medium text-m hover:bg-blue-700 transition duration-300">
                    Learn more
                  </button>
                ) : (
                  <Button />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section
