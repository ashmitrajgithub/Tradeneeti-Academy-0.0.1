import useScrollAnimation from "../../UseScrollAnimation";
import { Link } from "react-scroll";

const CoursesItems = ({ image, name, detail }) => {
  useScrollAnimation();

    return (
      <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transform hover:-translate-y-5 transition-transform duration-500 shadow-custom fade-in scroll-animate slide-left">
        <div className="w-full h-52 p-2 box-border ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
        <div className="flex flex-col justify-between gap-4 p-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-base leading-6 text-gray-600 text-justify">{detail}</p>
          </div>
          <div className="flex justify-start gap-6">
            <button className="px-4 py-2 rounded bg-[#ba95d8] shadow-lg shadow-[#ba95d8]/50  text-white font-bold text-sm transition-colors duration-300 hover:text-[#35293f] hover:bg-[
#d9c4e9]">
              <Link to="contact-us" smooth={true} duration={200} offset={-90} className="text-white hover:text-purple-900 transition cursor-pointer">
                                        Apply Now
                                    </Link>
            </button>
            {/* <button className="px-4" py-2 rounded bg-sky-500 text-white font-bold text-sm transition-colors duration-300 hover:bg-sky-600">
              code
            </button> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default CoursesItems;
  