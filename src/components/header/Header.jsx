import React, { useState } from "react";
import { Link } from "react-scroll";
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaPaperPlane, 
  FaGraduationCap, 
  FaEnvelope 
} from "react-icons/fa";
import Hamburger from "./hamburger";
import "./header.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleMenu = () => setIsNavOpen((prev) => !prev);

  return (
    <header className="fixed top-0 w-full z-50 main-header">
      <div className="w-full bg-gradient-to-br from-black to-gray-700 p-4 flex justify-between items-center">
        {/* Left: Brand Logo */}
        <div className="flex-shrink-0">
          <img
            src="./assets/BrandLogo.png"
            alt="TREADNEETI Logo"
            className="h-8 sm:h-10"
          />
        </div>

        {/* Center: Navigation Links with Icons */}
        <nav className="hidden md:flex space-x-8 font-semibold text-white items-center">
          <Link
            to="home"
            smooth={true}
            duration={200}
            offset={-150}
            className="flex items-center space-x-1 cursor-pointer hover:text-gray-400 transition"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="apply-now"
            smooth={true}
            duration={200}
            offset={-90}
            className="flex items-center space-x-1 cursor-pointer hover:text-gray-400 transition"
          >
            <FaPaperPlane />
            <span>Apply Now</span>
          </Link>
          <Link
            to="courses"
            smooth={true}
            duration={200}
            offset={-90}
            className="flex items-center space-x-1 cursor-pointer hover:text-gray-400 transition"
          >
            <FaGraduationCap />
            <span>Courses</span>
          </Link>
          <Link
            to="contact-us"
            smooth={true}
            duration={200}
            offset={-90}
            className="flex items-center space-x-1 cursor-pointer hover:text-gray-400 transition"
          >
            <FaEnvelope />
            <span>Contact Us</span>
          </Link>
        </nav>

        {/* Right: Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isNavOpen}
            className="focus:outline-none"
          >
            {isNavOpen ? (
              <FaTimes size={32} color="white" />
            ) : (
              <FaBars size={32} color="white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div className="md:hidden">
          <Hamburger toggleMenu={toggleMenu} />
        </div>
      )}
    </header>
  );
}

export default Header;
