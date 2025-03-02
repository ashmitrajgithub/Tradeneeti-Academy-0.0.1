"use client"

import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { FaHome, FaPaperPlane, FaGraduationCap, FaEnvelope, FaChevronDown } from "react-icons/fa"
import Hamburger from "./Hamburger"
import "./header.css"

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 20)

      // Determine active section based on scroll position
      const sections = ["home", "apply-now", "courses", "contact-us"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsNavOpen((prev) => !prev)

  const navItems = [
    { id: "home", icon: <FaHome className="text-lg" />, label: "Home", offset: -150 },
    { id: "apply-now", icon: <FaPaperPlane className="text-lg" />, label: "Apply Now", offset: -90 },
    { id: "courses", icon: <FaGraduationCap className="text-lg" />, label: "Courses", offset: -90 },
    { id: "contact-us", icon: <FaEnvelope className="text-lg" />, label: "Contact Us", offset: -90 },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 main-header transition-all duration-300 ${scrolled ? "header-scrolled" : ""}`}
    >
      <div className="w-full header-bg p-4 flex justify-between items-center">
        {/* Left: Brand Logo with animation */}
        <div className="flex-shrink-0 logo-container">
          <img src="./assets/BrandLogo.png" alt="TREADNEETI Logo" className="h-10 sm:h-12 logo-image" />
        </div>

        {/* Center: Navigation Links with Icons */}
        <nav className="hidden md:flex space-x-1 lg:space-x-8 font-medium text-white items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={600}
              offset={item.offset}
              activeClass="nav-active"
              className={`nav-item group px-4 py-2 rounded-full flex items-center space-x-2 cursor-pointer transition-all duration-300 ${activeSection === item.id ? "nav-active" : ""}`}
            >
              <span className="icon-container">{item.icon}</span>
              <span className="nav-text relative overflow-hidden">
                {item.label}
                <span className="nav-underline"></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Right: CTA Button (visible on desktop) */}
        <div className="hidden md:block">
          <Link
            to="apply-now"
            smooth={true}
            duration={600}
            offset={-90}
            className="cta-button flex items-center space-x-2 px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>Get Started</span>
            <FaChevronDown className="animate-bounce" />
          </Link>
        </div>

        {/* Right: Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isNavOpen}
            className="hamburger-button focus:outline-none relative w-10 h-10 flex items-center justify-center"
          >
            <div className={`hamburger-icon ${isNavOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-container">
        <div
          className="scroll-progress-bar"
          style={{
            width: `${scrolled ? (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100 : 0}%`,
          }}
        ></div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu md:hidden ${isNavOpen ? "open" : ""}`}>
        <Hamburger toggleMenu={toggleMenu} activeSection={activeSection} />
      </div>
    </header>
  )
}

export default Header

