"use client"

import { useState, useEffect, useRef } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import "./Home.css"
import { motion, AnimatePresence } from "framer-motion"

const Home = () => {
  // Hero section services (unchanged)
  const services = [
    {
      name: "EXPIRY DAY STRATEGIES",
      icon: "📅",
      description: "Expert guidance on maximizing profits during market expiry days",
    },
    {
      name: "SWING TRADING SETUP",
      icon: "📈",
      description: "Strategic positions for multi-day market movements",
    },
    {
      name: "RESULT BASED STRATEGIES",
      icon: "🎯",
      description: "Data-driven methods with proven track records",
    },
    {
      name: "BULL BEAR TRAP MASTERY",
      icon: "🔍",
      description: "Advanced techniques to identify market manipulation",
    },
    {
      name: "OPTIONS TRADING PRO",
      icon: "💹",
      description: "Professional options trading strategies and risk management",
    },
    {
      name: "TECHNICAL ANALYSIS",
      icon: "📊",
      description: "Master chart patterns and market psychology",
    },
    {
      name: "INDICATOR MASTERY",
      icon: "📉",
      description: "Strategic use of technical indicators for precise trading",
    },
  ]

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  
  // New state for gallery "Load More/Load Less" functionality
  const [showMore, setShowMore] = useState(false)

  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: false })
  }, [])

  useEffect(() => {
    setIsVisible(true)

    const timer = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length)
        setIsVisible(true)
      }, 500)
    }, 4000)

    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - left) / width
        const y = (e.clientY - top) / height
        setMousePosition({ x, y })
      }
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(timer)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [services])

  // Gallery images array – replace URLs with your images as desired
  const galleryImages = [
    {
      id: 1,
      title: "Sunset Bliss",
      description: "Experience the serene beauty of the setting sun.",
      src: "assets/014.jpg",
      size: "featured",
    },
    {
      id: 2,
      title: "Mountain Majesty",
      description: "A breathtaking view of the towering mountains.",
      src: "assets/h1.jpg",
      size: "medium",
    },
    {
      id: 3,
      title: "Forest Escape",
      description: "Wander into the lush green forest.",
      src: "assets/02.jpg",
      size: "small",
    },
    {
      id: 4,
      title: "City Lights",
      description: "Feel the energy of the bustling city.",
      src: "assets/03.jpg",
      size: "small",
    },
    {
      id: 5,
      title: "Ocean View",
      description: "Dive into the deep blue sea.",
      src: "assets/04.jpg",
      size: "medium",
    },
    {
      id: 6,
      title: "Desert Mirage",
      description: "Explore the vastness of the sandy dunes.",
      src: "assets/011.jpg",
      size: "small",
    },
    {
      id: 7,
      title: "Desert Mirage",
      description: "Explore the vastness of the sandy dunes.",
      src: "assets/h5.jpg",
      size: "small",
    },
    {
      id: 8,
      title: "Mystery Image",
      src: "assets/01.jpg",
      size: "featured",
    },
    {
      id: 9,
      title: "Countryside Charm",
      description: "Embrace the peaceful life in the countryside.",
      src: "assets/h4.jpg",
      size: "small",
    },
    {
      id: 10,
      title: "Countryside Charm",
      description: "Embrace the peaceful life in the countryside.",
      src: "assets/h2.jpg",
      size: "small",
    },
    {
      id: 11,
      title: "Countryside Charm",
      description: "Embrace the peaceful life in the countryside.",
      src: "assets/h3.jpg",
      size: "small",
    },
  ]

  // Determine which images to display based on showMore state
  const displayedImages = showMore ? galleryImages : galleryImages.slice(0, 4)

  // State for the active (modal) image
  const [activeImage, setActiveImage] = useState(null)

  // Modal navigation functions
  const handleNextImage = () => {
    const currentIndex = galleryImages.findIndex((img) => img.id === activeImage.id)
    const nextIndex = (currentIndex + 1) % galleryImages.length
    setActiveImage(galleryImages[nextIndex])
  }

  const handlePrevImage = () => {
    const currentIndex = galleryImages.findIndex((img) => img.id === activeImage.id)
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    setActiveImage(galleryImages[prevIndex])
  }

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section" ref={heroRef}>
        <div className="hero-background">
          <div
            className="gradient-sphere sphere-1"
            style={{
              transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
            }}
          ></div>
          <div
            className="gradient-sphere sphere-2"
            style={{
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            }}
          ></div>
          <div
            className="gradient-sphere sphere-3"
            style={{
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * 20}px)`,
            }}
          ></div>
        </div>

        <div className="floating-cards">
          {services.slice(0, 5).map((service, i) => (
            <div
              key={i}
              className={`floating-card card-${i + 1}`}
              style={{
                transform: `translate(${mousePosition.x * (i % 2 === 0 ? -15 : 15)}px, ${
                  mousePosition.y * (i % 3 === 0 ? -15 : 15)
                }px) rotate(${(i % 2 === 0 ? -1 : 1) * 5}deg)`,
              }}
            >
              <div className="card-content">
                <div className="card-icon">{service.icon}</div>
                <div className="card-label">{service.name.split(" ")[0]}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-content">
          <div className="brand-tag">
            <span className="brand-tag-glow"></span>
            <span className="brand-icon">🚀</span> Professional Trading Education
          </div>

          <div className="rotating-titles-container">
            <div className="title-background"></div>
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentServiceIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className={`rotating-title ${isVisible ? "visible" : ""}`}
              >
                {services[currentServiceIndex].name}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentServiceIndex}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`rotating-description ${isVisible ? "visible" : ""}`}
              >
                {services[currentServiceIndex].description}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="hero-subtitle">
            Transform your trading with professional strategies and real-time market insights
          </p>

          <div className="hero-buttons">
            <motion.button
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="button-content">
                Begin Your Journey
                <svg
                  className="button-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H20M20 12L14 6M20 12L14 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="button-glow"></span>
              </span>
            </motion.button>
            <motion.button
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="button-content">
                View Programs
                <span className="button-border"></span>
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="section-header" data-aos="fade-up">
          <div className="section-badge">Gallery</div>
          <h2 className="section-title">Explore Our Moments</h2>
          <p className="section-subtitle">
            Discover stunning visuals captured from around the world.
          </p>
        </div>
        <div className="gallery-container">
          <div className="gallery-grid">
            {displayedImages.map((image, index) => (
              <motion.div
                key={image.id}
                className={`gallery-item ${image.size}`}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setActiveImage(image)}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="gallery-item-inner">
                  <img src={image.src} alt={`Gallery image ${image.id}`} />
                  <div className="gallery-overlay"></div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="section-cta" data-aos="fade-up">
            <motion.button
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Load Less" : "Load More"}
            </motion.button>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="gallery-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="gallery-modal-overlay" onClick={() => setActiveImage(null)}></div>
            <div className="gallery-modal-content">
              <button className="gallery-modal-close" onClick={() => setActiveImage(null)}>
                &times;
              </button>
              <div className="gallery-modal-image-container">
                <motion.img
                  src={activeImage.src}
                  alt={`Gallery image ${activeImage.id}`}
                  className="gallery-modal-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <button className="gallery-modal-nav prev" onClick={handlePrevImage}>
                  &#10094;
                </button>
                <button className="gallery-modal-nav next" onClick={handleNextImage}>
                  &#10095;
                </button>
              </div>
              <div className="gallery-modal-thumbnails">
                {galleryImages.map((img) => (
                  <motion.div
                    key={img.id}
                    className={`gallery-modal-thumbnail ${activeImage.id === img.id ? "active" : ""}`}
                    onClick={() => setActiveImage(img)}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img src={img.src} alt={`Thumbnail ${img.id}`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
