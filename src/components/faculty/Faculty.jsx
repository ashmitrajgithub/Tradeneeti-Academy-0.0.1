"use client"

import Courses from "../courses/Courses"
import { useState, useEffect, useRef, useCallback } from "react"
import { Twitter, Linkedin, ChevronLeft, ChevronRight, Star, Sparkles, Award } from "lucide-react"

export default function Faculty() {
  const facultyMembers = [
    {
      name: "Hardik Sir",
      role: "Professor of Literature",
      image: "./assets/hardiksir.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Aakash Sir",
      role: "Senior Lecturer, Design",
      image: "./assets/aakash sir 01.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Pratik Sir",
      role: "Head of Computer Science",
      image: "./assets/Pratiksir.png",
      twitter: "#",
      linkedin: "#",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState("next")
  const autoRotateRef = useRef(null)

  const nextFaculty = useCallback(() => {
    if (isAnimating) return
    setDirection("next")
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % facultyMembers.length)
      setIsAnimating(false)
    }, 500)
  }, [isAnimating, facultyMembers])

  const prevFaculty = () => {
    if (isAnimating) return
    setDirection("prev")
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + facultyMembers.length) % facultyMembers.length)
      setIsAnimating(false)
    }, 500)
  }

  // Touch swipe functionality
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX)
  const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX)
  const handleTouchEnd = () => {
    if (touchStart && touchEnd) {
      if (touchEnd - touchStart > 50) prevFaculty()
      else if (touchStart - touchEnd > 50) nextFaculty()
    }
    setTouchStart(null)
    setTouchEnd(null)
  }

  // Auto rotate every 3 seconds
  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      nextFaculty()
    }, 3000)

    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current)
    }
  }, [nextFaculty])

  // Current faculty member
  const faculty = facultyMembers[currentIndex]

  // Random stars for background
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 0.5 + 0.2,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }))

  return (
    <section
      className="relative min-h-screen overflow-hidden faculty"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      id="faculty"
    >
      {/* Cosmic background with animated stars */}
      <div
  className="absolute inset-0 overflow-hidden"
  style={{ background: 'linear-gradient(45deg, #000, #434242)' }}
>

        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white opacity-70"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
            }}
          />
        ))}

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-3/4 -right-20 w-80 h-80 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Section title with animated underline */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Faculty</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto relative">
            <div className="absolute -top-1 left-0 w-6 h-3 bg-purple-400 rounded-full animate-slider"></div>
          </div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            A team of experienced educators and industry experts dedicated to student success.
          </p>
        </div>

        {/* Faculty showcase - single card with animations */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-[0_0_50px_rgba(124,58,237,0.15)] border border-gray-700/50 overflow-hidden
              ${isAnimating ? (direction === "next" ? "animate-slide-out-left" : "animate-slide-out-right") : "animate-fade-in"}`}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 p-4">
              <Award className="w-8 h-8 text-purple-400 opacity-50" />
            </div>
            <div className="absolute bottom-0 left-0 p-4">
              <Star className="w-6 h-6 text-yellow-400 opacity-50" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              {/* Faculty image with animated border */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow blur-sm opacity-70"></div>
                <div className="relative w-64 h-64 rounded-full border-4 border-gray-800 p-2 bg-gray-900 z-10">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src={faculty.image || "/placeholder.svg"}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                    Expert
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-amber-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    Top Rated
                  </div>
                </div>
              </div>

              {/* Faculty info with animated reveal */}
              <div className="flex-1 text-center md:text-left">
                <div className="space-y-4">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {faculty.name}
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-700/30">
                    <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                    <p className="text-purple-200 font-medium">{faculty.role}</p>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    Passionate educator with exceptional expertise in their field. Dedicated to inspiring the next
                    generation of professionals through innovative teaching methods and real-world applications.
                  </p>

                  <div className="pt-4 flex items-center justify-center md:justify-start space-x-4">
                    <a
                      href={faculty.twitter}
                      className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href={faculty.linkedin}
                      className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center items-center mt-12 space-x-6">
          <button
            onClick={prevFaculty}
            className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600/50 hover:border-purple-500/50 transition-all duration-300"
            aria-label="Previous faculty member"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Pagination indicators */}
          <div className="flex items-center space-x-3">
            {facultyMembers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (idx > currentIndex) setDirection("next")
                  else if (idx < currentIndex) setDirection("prev")
                  setIsAnimating(true)
                  setTimeout(() => {
                    setCurrentIndex(idx)
                    setIsAnimating(false)
                  }, 500)
                }}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-purple-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to faculty slide ${idx + 1}`}
              >
                {idx === currentIndex && (
                  <span className="absolute inset-0 rounded-full animate-ping bg-purple-400 opacity-75"></span>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={nextFaculty}
            className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600/50 hover:border-purple-500/50 transition-all duration-300"
            aria-label="Next faculty member"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        
        @keyframes slider {
          0% { left: 0; }
          100% { left: calc(100% - 24px); }
        }
        
        .animate-slider {
          animation: slider 3s ease-in-out infinite alternate;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animate-slide-out-left {
          animation: slideOutLeft 0.5s ease-out forwards;
        }
        
        .animate-slide-out-right {
          animation: slideOutRight 0.5s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-100px); }
        }
        
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(100px); }
        }
      `}</style>

      <Courses id="courses" />
    </section>
  )
}

