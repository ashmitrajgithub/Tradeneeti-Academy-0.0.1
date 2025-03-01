import React from "react";
import { Link } from "react-scroll";
import { FaHome, FaPaperPlane, FaGraduationCap, FaEnvelope } from "react-icons/fa";

function Hamburger({ toggleMenu }) {
  return (
    <div className="bg-gray-800 text-white p-4 flex flex-col space-y-4">
      <Link
        to="home"
        smooth={true}
        duration={200}
        offset={-150}
        onClick={toggleMenu}
        className="flex items-center space-x-2 cursor-pointer hover:text-gray-400 transition"
      >
        <FaHome />
        <span>Home</span>
      </Link>
      <Link
        to="apply-now"
        smooth={true}
        duration={200}
        offset={-90}
        onClick={toggleMenu}
        className="flex items-center space-x-2 cursor-pointer hover:text-gray-400 transition"
      >
        <FaPaperPlane />
        <span>Apply Now</span>
      </Link>
      <Link
        to="courses"
        smooth={true}
        duration={200}
        offset={-90}
        onClick={toggleMenu}
        className="flex items-center space-x-2 cursor-pointer hover:text-gray-400 transition"
      >
        <FaGraduationCap />
        <span>Courses</span>
      </Link>
      <Link
        to="contact-us"
        smooth={true}
        duration={200}
        offset={-90}
        onClick={toggleMenu}
        className="flex items-center space-x-2 cursor-pointer hover:text-gray-400 transition"
      >
        <FaEnvelope />
        <span>Contact Us</span>
      </Link>
    </div>
  );
}

export default Hamburger;
