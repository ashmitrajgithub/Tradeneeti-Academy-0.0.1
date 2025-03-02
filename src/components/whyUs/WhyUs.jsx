"use client"

import { useEffect, useRef, useState } from "react"
import WhytoJoin from "../WhytoJoin"
import WhyUsItems from "./WhyUsItems"
import Faculty from "../faculty/Faculty"
import AOS from "aos"
import "aos/dist/aos.css"
import "./WhyUs.css"

function WhyUs() {
  const parallaxRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollPosition, setScrollPosition] = useState(0)

  const services = [
    {
      index: 1,
      image: "/assets/011.jpg",
      title: "Global Market Courses for Industry Excellence",
      description:
        "We offer the most comprehensive global market courses, covering a wide range of industries. Our expert-designed programs provide in-depth insights, equipping professionals with essential skills and knowledge to stay ahead in today's competitive business environment.",
    },
    {
      index: 2,
      image: "/assets/013.jpg",
      title: "Empowering Independent and Profitable Traders",
      description:
        "We aim to create independent and consistently profitable traders by providing expert training, in-depth strategies, and practical tools. Our programs empower individuals to make informed decisions, manage risk effectively, and build a sustainable trading career.",
    },
    {
      index: 3,
      image: "/assets/014.jpg",
      title: "Global Financial Education and Mentorship",
      description:
        "We mentor students worldwide, offering diverse and comprehensive financial education. Our courses cover various financial concepts, from basic principles to advanced strategies, ensuring that learners gain the knowledge and skills needed to excel in global financial markets.",
    },
    {
      index: 4,
      image: "/assets/01.jpg",
      title: "Building a Community of Independent Traders",
      description:
        "Our goal is to create a strong trading community of independent traders, where individuals can share knowledge, insights, and strategies. By fostering collaboration and providing continuous support, we empower traders to achieve success and financial independence.",
    },
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    })

    // Parallax effect on scroll
    const handleScroll = () => {
      if (!parallaxRef.current) return
      
      const scrollY = window.scrollY
      setScrollPosition(scrollY)
      
      const elements = parallaxRef.current.querySelectorAll(".parallax-element")
      elements.forEach((el) => {
        const speed = el.getAttribute("data-speed") || 0.1
        const direction = el.getAttribute("data-direction") || 1
        el.style.transform = `translate(0, ${scrollY * speed * direction}px)`
      })

      // Animate the header based on scroll
      const header = parallaxRef.current.querySelector(".why-us-header")
      if (header) {
        const headerTop = header.getBoundingClientRect().top
        const opacity = Math.max(0, Math.min(1, 1 - (headerTop / -300)))
        header.style.opacity = opacity
        header.style.transform = `translate(0, ${Math.min(0, headerTop/5)}px)`
      }

      AOS.refresh()
    }

    // Mouse move effect for interactive background
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      if (!parallaxRef.current) return
      
      const blobs = parallaxRef.current.querySelectorAll(".blob")
      const { innerWidth, innerHeight } = window
      
      blobs.forEach((blob, index) => {
        const speed = 0.02 + (index * 0.01)
        const x = (e.clientX - innerWidth / 2) * speed
        const y = (e.clientY - innerHeight / 2) * speed
        blob.style.transform = `translate(${x}px, ${y}px) scale(${1 + Math.sin(Date.now() * 0.001 + index) * 0.05})`
      })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    // Initial call to set positions
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <section className="why-us-section" id="why-us" ref={parallaxRef}>
        {/* Dynamic background elements */}
        <div className="background-gradient"></div>
        <div className="parallax-element blob blob-1" data-speed="0.05" data-direction="-1"></div>
        <div className="parallax-element blob blob-2" data-speed="0.08" data-direction="1"></div>
        <div className="parallax-element blob blob-3" data-speed="0.03" data-direction="-1"></div>
        <div className="parallax-element blob blob-4" data-speed="0.06" data-direction="1"></div>
        <div className="parallax-element blob blob-5" data-speed="0.04" data-direction="-1"></div>
        
        {/* Animated grid pattern */}
        <div className="grid-pattern"></div>
        
        {/* Interactive particles */}
        <div className="particles-container">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            ></div>
          ))}
        </div>

        <div className="why-us-container">
          {/* Header section with enhanced animations */}
          <div className="why-us-header" data-aos="fade-up">
            <div className="header-badge">
              <span className="subtitle">OUR DIFFERENCE</span>
            </div>
            <h2 className="title">
              What Makes <span className="highlight">TNA Different?</span>
            </h2>
            <div className="title-decoration">
              <div className="title-underline"></div>
              <div className="title-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <p className="description">
              Discover why thousands of traders choose TNA for their financial education and market training needs.
            </p>
          </div>

          {/* Services list with enhanced animations */}
          <div className="why-us-items">
            {services.map((service, index) => (
              <WhyUsItems
                key={service.index}
                index={service.index}
                image={service.image}
                title={service.title}
                description={service.description}
                isReverse={index % 2 !== 0}
                scrollPosition={scrollPosition}
              />
            ))}
          </div>
        </div>

        {/* Enhanced wave divider with animation */}
        <div className="wave-divider">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
      </section>

      {/* WhytoJoin Section */}
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <WhytoJoin />
      </div>

      <Faculty id="faculty" />
    </>
  )
}

export default WhyUs
