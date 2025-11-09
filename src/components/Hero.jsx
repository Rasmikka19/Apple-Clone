import React from "react"
import Button from "./Button"

// images imported
import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/section6.jpg"
import hero3 from "../assets/hero3.jpg"


// hero section items
const heroSections = [
  {
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    img: hero1,
  },
  {
    title: "iPhone Air",
    subtitle: "The thinnest iPhone ever.\nWith the power of pro inside.",
    img: hero2,
  },
  {
    title: "MacBook Pro 14″",
    subtitle: "Supercharged by M5.",
    img: hero3,
  },
]


const Hero = () => {
  return (
    <div className="flex flex-col w-full cursor-pointer">
      {heroSections.map((section, index) => (
        // hero container
        <section
          key={index}
          className="relative w-full min-h-[75vh] md:min-h-[80vh] flex items-center justify-center text-center overflow-hidden"
        >
          {/* images */}
          <img
            src={section.img}
            alt={section.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* textcolor */}
          <div
            className={`relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 mb-auto mt-8 sm:mt-10 ${section.title === "iPhone Air" ? "text-black" : "text-white"
              }`}
          >
            {/* texts */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-snug">
              {section.title}
            </h1>
            <p className="mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl whitespace-pre-line">
              {section.subtitle}
            </p>

            {/* buttons */}
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button />
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Hero
