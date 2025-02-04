import React, { useEffect } from "react";  // Ensure React is imported
import AOS from "aos";  // Import AOS
import "aos/dist/aos.css";  // Import AOS CSS

const WhyUsItems = ({ image, title, description, isReverse }) => {
  // Initialize AOS for individual items
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Only animate once
      offset: 200, // Offset for animation trigger
    });
  }, []);

  return (
    <div
      className={`whyUs w-6/6 m-5 xl:w-4/6 flex flex-col ${isReverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-center mb-12 rounded-3xl gap-7 shadow-custom transition-shadow duration-500 ease-in-out hover:shadow-lg`}
      data-aos="fade-up"  // AOS applied to the entire section
    >
      <div className="flex-1 text-center">
        <div className="shadow-lg rounded-lg overflow-hidden  hover:shadow-xl">
          <img
            src={image}
            className="w-full md:max-w-full"
            alt="service-img"
          />
        </div>
      </div>
      <div className="flex-1 text-left hover:opacity-100">
        <div className="mx-8">
          <h3
            data-aos="fade-up"  // Apply AOS to the title
            className="text-lg md:text-2xl pb-3 font-bold relative after:content-[''] after:block after:w-0 after:h-[3px] after:bg-gray-400 after:transition-all after:duration-300 hover:after:w-2/3 text-justify"
          >
            {title}
          </h3>
          <p
            data-aos="fade-up"  // Apply AOS to the description
            className="text-base font-thin leading-relaxed text-gray-600 pb-8 text-justify"
          >
            {description}
          </p>
        </div>
      </div>
    </div>

  );
};


export default WhyUsItems;