import React, { useState } from "react";

const QuestionsItems = ({ quest, ans }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col  w-3/3 md:w-3/4 mb-6 ">
      <div
        className="flex items-center justify-between text-lg font-medium cursor-pointer p-3 border-2 border-gray-300 rounded-t-lg"
        onClick={toggleAnswer}
      >
        <div className="flex-1 text-black text-xs md:text-lg lg:text-xl xl:text-xl text-justify">{quest}</div>
        <div className="w-8 h-5 flex items-center justify-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-black transform transition-transform w-4 duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className={`overflow-hidden  transition-all duration-300 ${
          isOpen ? "max-h-screen p-4 border-t-0 border-2 border-gray-300 rounded-b-lg" : "max-h-0"
        }`}
      >
        <div className="text-base text-black leading-relaxed text-justify">{ans}</div>
      </div>
    </div>
  );
};

export default QuestionsItems;
