"use client"

import { useState, useEffect, useRef } from "react"
import { FaInstagramSquare, FaFacebook, FaTwitter, FaYoutube, FaGlobe, FaMoon, FaSun } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { IoLogoWhatsapp } from "react-icons/io5"
import { Link } from "react-scroll"
import { FiMail, FiSend, FiChevronDown, FiChevronUp, FiPhone, FiMapPin, FiClock } from "react-icons/fi"

function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [language, setLanguage] = useState("English")
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isMapHovered, setIsMapHovered] = useState(false)
  const [counters, setCounters] = useState({ students: 0, courses: 0, experts: 0 })
  const statsRef = useRef(null)
  

  // Email validation
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validateEmail(email)
    setIsValidEmail(isValid)

    if (isValid) {
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  // Intersection observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000 // 2 seconds
          const steps = 50
          const interval = duration / steps

          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps

            

            if (step === steps) clearInterval(timer)
          }, interval)

          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Current year for copyright
  const currentYear = new Date().getFullYear()

  // Languages list
  const languages = ["English", "Hindi", "Spanish", "French", "German"]

  return (
    <footer
      className={`relative z-10 overflow-hidden ${isDarkMode ? "bg-gradient-to-br from-gray-900 via-black to-gray-800" : "bg-gradient-to-br from-gray-100 via-white to-gray-200"} transition-colors duration-500`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-yellow-500/10 blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-yellow-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Animated Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${isDarkMode ? "bg-white/20" : "bg-black/10"}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300"></div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Top Section with Logo, Theme Toggle, and Language Selector */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <img
                src="./assets/BrandLogo.png"
                alt="TradeNeeti Logo"
                className="w-40 h-auto transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shine"></div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 flex items-center ${isDarkMode ? "bg-gray-700 justify-end" : "bg-blue-100 justify-start"}`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span
                className={`absolute left-0.5 top-0.5 w-5 h-5 rounded-full transition-transform duration-300 flex items-center justify-center ${isDarkMode ? "translate-x-6 bg-gray-900" : "translate-x-0 bg-white"}`}
              >
                {isDarkMode ? (
                  <FaMoon className="text-yellow-300 text-xs" />
                ) : (
                  <FaSun className="text-yellow-500 text-xs" />
                )}
              </span>
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${isDarkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-100"} transition-colors`}
              >
                <FaGlobe className={isDarkMode ? "text-yellow-300" : "text-blue-500"} />
                <span>{language}</span>
                {isLanguageOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              {isLanguageOpen && (
                <div
                  className={`absolute right-0 mt-1 w-40 rounded-lg shadow-lg overflow-hidden z-20 ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang)
                        setIsLanguageOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 ${isDarkMode ? "text-gray-200 hover:bg-gray-700" : "text-gray-800 hover:bg-gray-100"} ${language === lang ? (isDarkMode ? "bg-gray-700" : "bg-gray-100") : ""} transition-colors`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Counter Section */}
        

        {/* Newsletter Subscription */}
        <div
          className={`w-full max-w-3xl mx-auto mb-16 px-6 py-10 rounded-2xl ${isDarkMode ? "bg-gradient-to-r from-gray-800 to-gray-900" : "bg-gradient-to-r from-white to-gray-100"} shadow-lg transform transition-transform hover:scale-[1.01]`}
        >
          <h3 className={`text-2xl font-bold text-center ${isDarkMode ? "text-white" : "text-gray-800"} mb-4`}>
            Stay Updated with TradeNeeti
          </h3>
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-center mb-6`}>
            Subscribe to our newsletter for the latest updates, market insights, and exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-grow">
              <FiMail
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (!isValidEmail) setIsValidEmail(true)
                }}
                placeholder="Your email address"
                className={`w-full pl-10 pr-4 py-3 rounded-lg ${
                  isDarkMode
                    ? "bg-gray-700 text-white placeholder-gray-400 focus:ring-yellow-400"
                    : "bg-white text-gray-800 placeholder-gray-500 border border-gray-300 focus:ring-blue-400"
                } focus:outline-none focus:ring-2 transition-all ${!isValidEmail ? "ring-2 ring-red-500" : ""}`}
                required
              />
              {!isValidEmail && (
                <p className="absolute text-red-500 text-xs mt-1">Please enter a valid email address</p>
              )}
            </div>
            <button
              type="submit"
              className={`${
                isDarkMode
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
              } font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              {isSubmitted ? (
                "Subscribed! ✓"
              ) : (
                <>
                  Subscribe <FiSend className="animate-pulse" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FooterSection
            title="About Us"
            isDarkMode={isDarkMode}
            items={[
              { name: "Home", to: "home", type: "scroll" },
              { name: "About Us", to: "why-us", type: "scroll" },
              { name: "Our Mission", to: "mission", type: "scroll" },
              { name: "Testimonials", to: "testimonials", type: "scroll" },
            ]}
          />

          <FooterSection
            title="Resources"
            isDarkMode={isDarkMode}
            items={[
              { name: "Faculty", to: "faculty", type: "scroll" },
              { name: "Courses", to: "courses", type: "scroll" },
              { name: "Apply Now", to: "contact-us", type: "scroll" },
              { name: "Blog", to: "/blog", type: "link" },
            ]}
          />

          <FooterSection
            title="Help and Support"
            isDarkMode={isDarkMode}
            items={[
              { name: "Knowledge Center", to: "knowledge-center", type: "scroll" },
              {
                name: "Contact Us",
                to: "https://api.whatsapp.com/send?phone=+916206256034&text=Hello !",
                type: "external",
              },
              { name: "Premium Support", to: "tel:+916206256034", type: "external" },
              { name: "FAQs", to: "/faqs", type: "link" },
            ]}
          />

          <div className="space-y-4">
            <h5
              className={`text-lg font-bold ${isDarkMode ? "text-yellow-300" : "text-blue-600"} mb-4 relative inline-block`}
            >
              Our Location
              <span
                className={`absolute -bottom-1 left-0 w-1/2 h-0.5 ${isDarkMode ? "bg-yellow-400" : "bg-blue-500"}`}
              ></span>
            </h5>

            <div
              className={`overflow-hidden rounded-xl shadow-lg ${isDarkMode ? "border border-gray-700" : "border border-gray-300"} transform transition-all duration-500 ${isMapHovered ? "scale-[1.02] shadow-xl" : ""}`}
              onMouseEnter={() => setIsMapHovered(true)}
              onMouseLeave={() => setIsMapHovered(false)}
            >
              <div className="relative">
                <iframe
                  title="Google Map"
                  className="w-full h-56"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d998.7716569839544!2d85.12343695146656!3d25.62291729491723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59e0692cf2ff%3A0xdd17a34272129ed0!2sTRADENEETI%20ACADEMY!5e0!3m2!1sen!2sin!4v1738596085164!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {isMapHovered && (
                  <div
                    className={`absolute inset-0 flex items-center justify-center ${isDarkMode ? "bg-black/40" : "bg-white/40"} transition-opacity duration-300`}
                  >
                    <a
                      href="https://goo.gl/maps/your-actual-map-link-here"
                      target="_blank"
                      rel="noreferrer"
                      className={`px-4 py-2 rounded-lg ${isDarkMode ? "bg-yellow-500 text-black" : "bg-blue-600 text-white"} font-medium transform transition-transform hover:scale-105`}
                    >
                      View Larger Map
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              <p className={`font-medium ${isDarkMode ? "text-yellow-300" : "text-blue-600"}`}>TradeNeeti Academy</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <FiMapPin className={isDarkMode ? "text-yellow-400" : "text-blue-500"} />
                  <p className="text-sm">Patna, Bihar, India</p>
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone className={isDarkMode ? "text-yellow-400" : "text-blue-500"} />
                  <p className="text-sm">+91 6206256034</p>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className={isDarkMode ? "text-yellow-400" : "text-blue-500"} />
                  <p className="text-sm">Mon-Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {socialLinks.map((social, index) => (
            <SocialIcon key={social.name} {...social} isDarkMode={isDarkMode} index={index} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`pt-8 border-t ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm text-center md:text-left`}>
              &copy; {currentYear} <span className={isDarkMode ? "text-yellow-300" : "text-blue-600"}>TradeNeeti</span>.
              All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="/privacy-policy"
                className={`${isDarkMode ? "text-gray-400 hover:text-yellow-300" : "text-gray-600 hover:text-blue-600"} transition-colors`}
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className={`${isDarkMode ? "text-gray-400 hover:text-yellow-300" : "text-gray-600 hover:text-blue-600"} transition-colors`}
              >
                Terms of Service
              </a>
              <a
                href="/sitemap"
                className={`${isDarkMode ? "text-gray-400 hover:text-yellow-300" : "text-gray-600 hover:text-blue-600"} transition-colors`}
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes shine {
          from {
            left: -100%;
          }
          to {
            left: 100%;
          }
        }
        
        .animate-shine {
          animation: shine 1.5s linear infinite;
        }
      `}</style>
    </footer>
  )
}

// Stats Counter Component
function StatCounter({ count, label, icon, isDarkMode }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`text-4xl mb-2 ${isDarkMode ? "text-yellow-300" : "text-blue-600"}`}>{icon}</div>
      <div className={`text-3xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
        {count.toLocaleString()}+
      </div>
      <div className={isDarkMode ? "text-gray-300" : "text-gray-600"}>{label}</div>
    </div>
  )
}

// Footer Section Component
function FooterSection({ title, items, isDarkMode }) {
  return (
    <div className="space-y-4">
      <h5
        className={`text-lg font-bold ${isDarkMode ? "text-yellow-300" : "text-blue-600"} mb-4 relative inline-block`}
      >
        {title}
        <span
          className={`absolute -bottom-1 left-0 w-1/2 h-0.5 ${isDarkMode ? "bg-yellow-400" : "bg-blue-500"}`}
        ></span>
      </h5>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="transform transition-transform hover:translate-x-1">
            {item.type === "scroll" ? (
              <Link
                to={item.to}
                smooth={true}
                duration={200}
                offset={-90}
                className={`${isDarkMode ? "text-gray-300 hover:text-yellow-300" : "text-gray-700 hover:text-blue-600"} transition-colors flex items-center gap-2`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? "bg-yellow-400" : "bg-blue-500"}`}></span>
                {item.name}
              </Link>
            ) : item.type === "external" ? (
              <a
                href={item.to}
                className={`${isDarkMode ? "text-gray-300 hover:text-yellow-300" : "text-gray-700 hover:text-blue-600"} transition-colors flex items-center gap-2`}
                target="_blank"
                rel="noreferrer"
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? "bg-yellow-400" : "bg-blue-500"}`}></span>
                {item.name}
              </a>
            ) : (
              <a
                href={item.to}
                className={`${isDarkMode ? "text-gray-300 hover:text-yellow-300" : "text-gray-700 hover:text-blue-600"} transition-colors flex items-center gap-2`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? "bg-yellow-400" : "bg-blue-500"}`}></span>
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Social Icon Component
function SocialIcon({ name, url, icon, hoverColor, isDarkMode, index }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
      className="group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`
        flex items-center justify-center w-12 h-12 rounded-full 
        ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100 border border-gray-200"} 
        transition-all duration-300 hover:shadow-lg group-hover:scale-110
      `}
      >
        <span className={`text-xl ${hoverColor}`}>{icon}</span>
      </div>
      <span
        className={`
        absolute -top-10 left-1/2 transform -translate-x-1/2 
        ${isDarkMode ? "bg-gray-800" : "bg-white border border-gray-200"} 
        ${isDarkMode ? "text-white" : "text-gray-800"}
        text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg
      `}
      >
        {name}
      </span>
    </a>
  )
}

// Social media links data
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/tradeneeti-academy",
    icon: <FaLinkedin />,
    hoverColor: "text-blue-500",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/tradeneetiacademy",
    icon: <FaFacebook />,
    hoverColor: "text-blue-600",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/tradeneeti",
    icon: <FaInstagramSquare />,
    hoverColor: "text-pink-500",
  },
  {
    name: "WhatsApp",
    url: "https://api.whatsapp.com/send?phone=+916206256034&text=Hello !",
    icon: <IoLogoWhatsapp />,
    hoverColor: "text-green-500",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <FaTwitter />,
    hoverColor: "text-blue-400",
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    icon: <FaYoutube />,
    hoverColor: "text-red-600",
  },
]

export default Footer

