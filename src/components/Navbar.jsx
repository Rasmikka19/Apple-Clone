import React from "react"

// icons
import { FaApple, FaSearch, FaShoppingBag, FaBars } from "react-icons/fa"

// navbar items
const links = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
]

function Navbar() {
  return (
    // nav container
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#161617]/70 text-xs text-gray-300">

      {/* Desktop View */}
      <div className="hidden md:flex justify-center items-center gap-10 py-3 px-4">

        {/* Apple logo */}
        <FaApple className="text-xl hover:text-white cursor-pointer" />

        {/* Center navigation links */}
        {links.map((item, index) => (
          <a key={index} href="#" className="hover:text-white transition">
            {item}
          </a>
        ))}

        {/* Search and Bag icons */}
        <FaSearch className="text-sm hover:text-white cursor-pointer" />
        <FaShoppingBag className="text-sm hover:text-white cursor-pointer" />
      </div>

      {/* Mobile & Tablet View */}
      <div className="flex md:hidden justify-between items-center py-3 px-4">

        {/* Left side: Apple logo */}
        <FaApple className="text-xl hover:text-white cursor-pointer" />

        {/* Right side: Search, Bag, and Menu icons */}
        <div className="flex items-center gap-5">
          <FaSearch className="text-sm hover:text-white cursor-pointer" />
          <FaShoppingBag className="text-sm hover:text-white cursor-pointer" />
          <FaBars className="text-lg hover:text-white cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
