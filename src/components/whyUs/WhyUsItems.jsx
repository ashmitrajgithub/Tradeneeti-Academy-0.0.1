"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"
import "./WhyUs.css"

const WhyUsItems = ({ image, title, description, isReverse, index, scrollPosition }) => {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    })

    // Animate based on scroll position
    const handleScrollAnimation = () => {
      if (!cardRef.current) return
      
      const rect = cardRef.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0
      
      if (isVisible) {
        const progress = Math.min(1, Math.max(0, 1 - (rect.top / window.innerHeight)))
        controls.start({ 
          opacity: 0.3 + progress * 0.7,
          y: Math.max(0, 50 - progress * 50),
          scale: 0.95 + progress * 0.05
        })
      }
    }

    handleScrollAnimation()
    window.addEventListener('scroll', handleScrollAnimation)
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation)
    }
  }, [controls])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })

    // Apply simple scaling without any 3D rotation
    card.style.transform = `scale(${isHovered ? 1.02 : 1})`

    // Create spotlight effect based on mouse position
    const spotlightSize = rect.width * 2
    const spotlightX = (x / rect.width) * 100
    const spotlightY = (y / rect.height) * 100
    
    card.style.background = isHovered 
      ? `radial-gradient(${spotlightSize}px circle at ${spotlightX}% ${spotlightY}%, rgba(255,255,255,0.1), transparent 40%)`
      : ''
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (!cardRef.current) return
    
    // Reset transform with smooth transition
    cardRef.current.style.transform = "scale(1)"
    cardRef.current.style.background = ''
  }

  // Calculate dynamic styles based on index
  const itemDelay = index * 150
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.645, 0.045, 0.355, 1.000]
      }
    }
  }

  return (
    <motion.div 
      className={`why-us-item ${isReverse ? "reverse" : ""}`}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      data-aos="fade-up" 
      data-aos-delay={itemDelay}
    >
      <div className="item-number">
        <div className="number-circle">
          <span>{String(index).padStart(2, "0")}</span>
          <svg className="number-circle-svg" width="100" height="100">
            <circle className="number-circle-bg" cx="50" cy="50" r="40" />
            <circle 
              className="number-circle-progress" 
              cx="50" 
              cy="50" 
              r="40" 
              style={{
                strokeDashoffset: `${250 - (250 * (index / 4))}`
              }}
            />
          </svg>
        </div>
      </div>

      <div 
        className={`item-content ${isHovered ? 'hovered' : ''}`} 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="item-image-container">
          <div className="item-image-wrapper">
            <img src={image || "/placeholder.svg"} alt={title} className="item-image" />
            <div className="image-overlay"></div>
            
            {/* Dynamic light effect on hover */}
            {isHovered && (
              <div 
                className="image-light-effect"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2) 0%, transparent 50%)`
                }}
              ></div>
            )}
          </div>
          
          {/* Enhanced decorative elements */}
          <div className="image-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="item-text">
          <h3 className="item-title" data-aos="fade-up" data-aos-delay={itemDelay + 100}>
            {title}
            <span className="title-underline"></span>
          </h3>

          <p className="item-description" data-aos="fade-up" data-aos-delay={itemDelay + 200}>
            {description}
          </p>

          <div className="item-features" data-aos="fade-up" data-aos-delay={itemDelay + 300}>
            <div className="feature">
              <div className="feature-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feature-icon"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span>Expert Guidance</span>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feature-icon"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span>Practical Skills</span>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feature-icon"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span>Ongoing Support</span>
            </div>
          </div>

          <button className="learn-more-btn">
            <span className="btn-text">Learn more</span>
            <span className="btn-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="btn-icon"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default WhyUsItems
