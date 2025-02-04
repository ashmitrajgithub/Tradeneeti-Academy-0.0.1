// import React, { useState, useEffect } from "react";
// import "./HedgingAnimation.css";
// import AOS from 'aos'; // Import AOS
// import 'aos/dist/aos.css'; // Import AOS styles
// import { FaInstagramSquare, FaFacebook, FaTelegram, FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";  
// import { IoLogoTwitter } from "react-icons/io";
// import { MdMail } from "react-icons/md";
// import { FaBookOpenReader } from "react-icons/fa6";

// const App = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [iteration, setIteration] = useState(0);
//   const [resetAnimation, setResetAnimation] = useState(false);

//   const professions = [
//     { text: "EXPIRY DAY STRATEGIES", gif: "/assets/animation/expirydaystrategies1.gif", duration: 6000 },
//     { text: "Option Buying & Selling", gif: "/assets/animation/optionbuyingselling1.gif", duration: 6000 },
//     { text: "Hedging & Risk Management", gif: "/assets/animation/hedgingandriskmanagement1.gif", duration: 6000 },
//     { text: "LEARN BULL BEAR TRAP", gif: "/assets/animation/learnbullbeartrap1.gif", duration: 6000 },
//   ];

//   const resetComponent = () => {
//     setCurrentIndex(0);
//     setIteration((prev) => prev + 1);
//     setResetAnimation(true);
//     setTimeout(() => setResetAnimation(false), 100);
//   };

//   useEffect(() => {
//     AOS.init(); // Initialize AOS
//     const handleVisibilityChange = () => {
//       if (!document.hidden) {
//         console.log("User  returned, resetting animation...");
//         resetComponent();
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);
//     return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY === 0) {
//         console.log("User  scrolled to top, resetting animation...");
//         resetComponent();
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const totalCycleDuration = professions.reduce((sum, item) => sum + item.duration, 0);

//     const cycleInterval = setInterval(() => {
//       setIteration((prev) => prev + 1);
//       setCurrentIndex(0);
//     }, totalCycleDuration);

//     return () => clearInterval(cycleInterval);
//   }, [professions, iteration]);

//   useEffect(() => {
//     const currentDuration = professions[currentIndex].duration;

//     const gifTimeout = setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % professions.length);
//     }, currentDuration);

//     return () => clearTimeout(gifTimeout);
//   }, [currentIndex, iteration, professions]);

//   return (
//     <div className="home-container">
//       <section className="home" id="home">
//         <div className="home-content">
//           <img
//             src={professions[currentIndex].gif}
//             alt="Home-animation"
//             className="profession-gif"
//           />
//         </div>

//         <div className="miditem">
//           <div className="home-button">
//             <ul className="home-button-item">
//               <li>
//                 <button><a href="#"><FaBookOpenReader />Demo Class</a></button>
//               </li>
//               <li>
//                 <button><a href="#"><FaPhoneAlt />Call Us</a></button>
//               </li>
//               <li>
//                 <button><a href="#"><FaWhatsapp />Whatsapp</a></button>
//               </li>
//               <li>
//                 <button><a href="#"><FaMapMarkerAlt />Location</a></button>
//               </li>
//             </ul>
//           </div>

//           <div className="scontainer">
//             <a href="#" target="_blank">
//               <FaInstagramSquare size={25} />
//             </a>
//             <a href="#" target="_blank">
//               <FaFacebook size={25} />
//             </a>
//             <a href="#" target="_blank">
//               <IoLogoTwitter size={25} />
//             </a>
//             <a href="#" target="_blank">
//               <FaTelegram size={25} />
//             </a>
//             <button>
//               <MdMail size={25} />
//             </button>
//           </div>
//         </div>

//         <div className="overlay2">
//           <img src="/assets/teacher2.jpg" alt="Overlay Shape" className="overlay-image1" />
//           <div className="image-style">
//             <img
//               src="/assets/aka1.jpg"
//               alt="Overlay Shape"
//               className="overlay-image2 img-fluid rounded-5 h-100 fit-cover"
//               data-aos="fade-left"
//               data-aos-duration="1000"
//             />
//             <img
//               src="/assets/main.jpg"
//               alt="Overlay Shape"
//               className="overlay-image2 img-fluid rounded-5 h-100 fit-cover"
//               data-aos="fade-up"
//               data-aos-duration="1000"
//             />
//           </div>
//         </div>

//         <div className="profession-container">
//           <div
//             className="profession-box"
//             style={{
//               animation: resetAnimation ? "none" : `professionRotate ${professions.reduce(
//                 (sum, item) => sum + item.duration,
//                 0
//               )}ms linear infinite`,
//             }}
//           >
//             {professions.map((profession, index) => (
//               <div
//                 key={index}
//                 className={`profession ${index === currentIndex ? "active" : ""}`}
//                 style={{ "--i": index }}
//               >
//                 <h3>{profession.text}</h3>
//               </div>
//             ))}
//             <div className="circle"></div>
//           </div>

//           <div className="overlay">
//             <img src="/assets/main.jpg" alt="Overlay Shape" className="overlay-image" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;