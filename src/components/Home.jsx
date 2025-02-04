import React, { useState, useEffect } from "react";
import "./HedgingAnimation.css";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { FaInstagramSquare, FaFacebook, FaTelegram, FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";  
import { IoLogoTwitter } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [iteration, setIteration] = useState(0);
  const [resetAnimation, setResetAnimation] = useState(false);

  const professions = [
    { text: "EXPIRY DAY STRATEGIES", gif: "./assets/animation/expirydaystrategies.gif", duration: 6000 },
    { text: "Option Buying & Selling", gif: "./assets/animation/optionbuyingselling1.gif", duration: 6000 },
    { text: "Hedging & Risk Management", gif: "./assets/animation/hedgingandriskmanagement1.gif", duration: 6000 },
    { text: "LEARN BULL BEAR TRAP", gif: "./assets/animation/learnbullbeartrap1.gif", duration: 6000 },
  ];

  const resetComponent = () => {
    setCurrentIndex(0);
    setIteration((prev) => prev + 1);
    setResetAnimation(true);
    setTimeout(() => setResetAnimation(false), 100);
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        console.log("User  returned, resetting animation...");
        resetComponent();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        console.log("User  scrolled to top, resetting animation...");
        resetComponent();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const totalCycleDuration = professions.reduce((sum, item) => sum + item.duration, 0);

    const cycleInterval = setInterval(() => {
      setIteration((prev) => prev + 1);
      setCurrentIndex(0);
    }, totalCycleDuration);

    return () => clearInterval(cycleInterval);
  }, [professions, iteration]);

  useEffect(() => {
    const currentDuration = professions[currentIndex].duration;

    const gifTimeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, currentDuration);

    return () => clearTimeout(gifTimeout);
  }, [currentIndex, iteration, professions]);

  return (
    <div className="home-container">
      <section className="home" id="home">
        <div className="home-content">
          <img
            src={professions[currentIndex].gif}
            alt="Home-animation"
            className="profession-gif"
          />
        </div>

        <div className="miditem">
          <div className="home-button">
            <ul className="home-button-item">
              <li>
                <button><Link to="contact-us" smooth={true} duration={200} offset={-90} className="text-white hover:text-yellow-300 transition cursor-pointer">
                <FaBookOpenReader />       Apply Now
                                    </Link></button>
              </li>
              <li>
                <button><a href="tel:+916206256034" target="_blank"><FaPhoneAlt />Call Us</a></button>
              </li>
              <li>
                <button><a href="https://api.whatsapp.com/send?phone=+916206256034&text=Hello !" target="_blank"><FaWhatsapp />Whatsapp</a></button>
              </li>
              <li>
                <button><a href="https://maps.app.goo.gl/nysZCvyyBa1e1K3o7" target="_blank"><FaMapMarkerAlt />Location</a></button>
              </li>
            </ul>
          </div>

          <div className="scontainer">
            <a href="https://www.instagram.com/tradeneeti" target="_blank">
              <FaInstagramSquare size={25} />
            </a>
            <a href="https://www.facebook.com/tradeneetiacademy" target="_blank">
              <FaFacebook size={25} />
            </a>
            <a href="#" target="_blank">
              <IoLogoTwitter size={25} />
            </a>
            <a href="#" target="_blank">
              <FaTelegram size={25} />
            </a>
            <button>
            <a href="mailto:support@tradeneeti.com" target="_blank">
              <MdMail size={25} />
              </a>
            </button>
          </div>
        </div>

        <div className="overlay2">
          <img src="./assets/main.jpg" alt="Overlay Shape" className="overlay-image1" />
          <div className="image-style">
            <img
              src="./assets/aka1.jpg"
              alt="Overlay Shape"
              className="overlay-image2"
              data-aos="fade-left"
              data-aos-duration="1000"
            />
            <img
              src="./assets/teacher2.jpg"
              alt="Overlay Shape"
              className="overlay-image2"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
        </div>

        <div className="profession-container">
          <div
            className="profession-box"
            style={{
              animation: resetAnimation ? "none" : `professionRotate ${professions.reduce(
                (sum, item) => sum + item.duration,
                0
              )}ms linear infinite`,
            }}
          >
            {professions.map((profession, index) => (
              <div
                key={index}
                className={`profession ${index === currentIndex ? "active" : ""}`}
                style={{ "--i": index }}
              >
                <h3>{profession.text}</h3>
              </div>
            ))}
            <div className="circle"></div>
          </div>

          <div className="overlay">
            <img src="./assets/main.jpg" alt="Overlay Shape" className="overlay-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;