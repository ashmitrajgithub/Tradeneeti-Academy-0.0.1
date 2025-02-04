import { FaInstagramSquare, FaFacebook, FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-scroll";

function Footer() {
    return (
        <>
            <footer className="relative overflow-hidden z-10 bg-[rgb(93,68,112)] shadow-2xl footer footer-main">
                <div className="flex flex-wrap justify-between items-center mb-5 gap-4 p-5 ">
                    <img src="./assets/BrandLogo.png" alt="logo" className="w-32 mb-2" />
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/company/tradeneeti-academy" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-blue-400">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/tradeneetiacademy" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-blue-500">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/tradeneeti" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-pink-500">
                            <FaInstagramSquare />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=+916206256034&text=Hello !" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-green-200">
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                </div>

                <div className="container mx-auto pl-4 pr-4 pb-4">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="w-5/12 xl:w-2/12">
                            <h5 className="text-lg font-bold text-yellow-200 mb-2">About Us</h5>
                            <ul className="list-none space-y-1">
                            <li>
                                    <Link to="home" smooth={true} duration={200} offset={-150} className="text-white hover:text-yellow-300 transition cursor-pointer">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="why-us" smooth={true} duration={200} offset={-90} className="text-white hover:text-yellow-300 transition cursor-pointer">
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="w-5/12 xl:w-3/12">
                            <h5 className="text-lg font-bold text-yellow-200 mb-2">Resources</h5>
                            <ul className="list-none space-y-1">
                            <li>
                                    <Link to="faculty" smooth={true} duration={200} offset={-90} className="text-white hover:text-yellow-300 transition cursor-pointer">
                                        Faculty
                                    </Link>
                                </li>
                                <li>
                                    <Link to="courses" smooth={true}  offset={-90} duration={200} className="text-white hover:text-yellow-300 transition cursor-pointer">
                                        Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link to="contact-us" smooth={true} duration={200} offset={-90} className="text-white hover:text-yellow-300 transition cursor-pointer">
                                        Apply Now
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="w-5/12 xl:w-2/12">
                            <h5 className="text-lg font-bold text-yellow-200 mb-2">Help and Support</h5>
                            <ul className="list-none space-y-1">
                            <li>
                                    <Link to="knowledge-center" smooth={true} offset={-90} duration={200} className="text-white hover:text-yellow-300 transition cursor-pointer">
                                        Knowledge Center
                                    </Link>
                                </li>
                                <li><a href="https://api.whatsapp.com/send?phone=+916206256034&text=Hello !" className="text-white hover:text-yellow-300 transition">Contact Us</a></li>
                                <li><a href="tel:+916206256034" className="text-white hover:text-yellow-300 transition">Premium Support</a></li>
                            </ul>
                        </div>

                        <div className="w-5/12 xl:w-4/12">
                            <h5 className="text-lg font-bold text-yellow-200 mb-2">Our Location</h5>
                            <div className="w-86 h-40 xl:h-48 overflow-hidden rounded-lg shadow-lg">
                            <iframe 
            title="Google Map"
            className="w-full h-full lg:w-[600px] lg:h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d998.7716569839544!2d85.12343695146656!3d25.62291729491723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59e0692cf2ff%3A0xdd17a34272129ed0!2sTRADENEETI%20ACADEMY!5e0!3m2!1sen!2sin!4v1738596085164!5m2!1sen!2sin"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-300" />
                    <div className="text-center text-sm text-white">
                        Copyright © 2025 <a href="/" className="text-yellow-300">TreadNeeti. All Rights Reserved.</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
