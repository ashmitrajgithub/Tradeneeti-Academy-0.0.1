import { GiCancel } from "react-icons/gi";
import { Link } from "react-scroll";

function Hamburger({ toggleMenu, setIsNavOpen }) {
    return (
        <nav className="hamburger md:hidden  absolute right-0 top-0 shadow-lg">
            <div className="m-5" onClick={toggleMenu}>
                <GiCancel size={28} />
            </div>

            <ul className="flex flex-col items-center c-white gap-4 py-5 font-semibold">
                <li>
                    <a
                        href="#"
                        className="hover:text-blue-800"
                        onClick={() => setIsNavOpen(false)}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <Link 
                        to="contact-us" 
                        smooth={true} 
                        duration={200} 
                        offset={-90} 
                        className="text-white hover:text-yellow-300 transition cursor-pointer"
                        onClick={() => setIsNavOpen(false)}
                    >
                        Apply Now
                    </Link>
                </li>
                <li>
                    <Link 
                        to="why-us" 
                        smooth={true} 
                        duration={200} 
                        offset={-90} 
                        className="text-white hover:text-yellow-300 transition cursor-pointer"
                        onClick={() => setIsNavOpen(false)}
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link 
                        to="courses" 
                        smooth={true}  
                        offset={-90} 
                        duration={200} 
                        className="text-white hover:text-yellow-300 transition cursor-pointer"
                        onClick={() => setIsNavOpen(false)}
                    >
                        Courses
                    </Link>
                </li>
                <li>
                    <a 
                        href="https://api.whatsapp.com/send?phone=+916206256034&text=Hello !" 
                        className="text-white hover:text-yellow-300 transition"
                        onClick={() => setIsNavOpen(false)}
                    >
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Hamburger;
