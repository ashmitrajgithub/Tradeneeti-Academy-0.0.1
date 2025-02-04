import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function Location({ closePopup }) {
  const handleOpenMap = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300">
      <div
        className="bg-gradient-to-r from-purple-200 via-purple-300 to-white rounded-xl shadow-lg p-8 w-96 max-w-md transform transition-all duration-300 ease-in-out scale-100 hover:scale-105"
        style={{
          background:
            "linear-gradient(180deg, rgba(147, 112, 219, 0.8) 0%, rgba(216, 191, 216, 0.7) 50%, rgba(255, 255, 255, 0.6) 100%)",
        }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          <span className="bg-gradient-to-r from-purple-500 to-white text-gray-800 text-transparent bg-clip-text">
            Select Your Location
          </span>
        </h2>
        <ul className="space-y-6">
          <li className="flex justify-between items-center hover:bg-gradient-to-r from-purple-400 to-white text-gray-800 rounded-lg p-4 transition-all duration-300 cursor-pointer transform hover:scale-105">
            <a
              href="https://www.google.com/maps/place/Tradeneeti+Academy/@25.614639,85.1425161,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed598ff3384279:0x436f7bf4130b8975!8m2!3d25.614639!4d85.145091!16s%2Fg%2F11wqw1p0jy?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-gray-800"
            >
              Adharshila Complex, west of RBI, 411, Gandhi Maidan Rd, opposite gate No : 9
            </a>
            <FaMapMarkerAlt
              size={80}
              className="text-teal-500 hover:text-gray-700 transition-colors duration-300"
            />
          </li>
          <li className="flex justify-between items-center hover:bg-gradient-to-r from-purple-400 to-white text-gray-800 rounded-lg p-4 transition-all duration-300 cursor-pointer transform hover:scale-105">
            <a
              href="https://maps.app.goo.gl/whWcARtW8cBHC81b7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-gray-800"
            >
              5th floor, Sharswati bashant enclave, near Alankar motors, bording canal road
            </a>
            <FaMapMarkerAlt
              size={80}
              className="text-teal-500 hover:text-gray-700 transition-colors duration-300"
            />
          </li>
        </ul>
        <div className="flex justify-center mt-6">
          <button
            onClick={closePopup}
            className="bg-gradient-to-r from-purple-500 to-white text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-gradient-to-r hover:from-white hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Location;
