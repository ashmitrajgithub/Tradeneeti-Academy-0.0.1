import { Link } from "react-scroll"
import {
  FaHome,
  FaPaperPlane,
  FaGraduationCap,
  FaEnvelope,
  FaChevronRight,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa"

function Hamburger({ toggleMenu, activeSection }) {
  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home", offset: -150 },
    { id: "apply-now", icon: <FaPaperPlane />, label: "Apply Now", offset: -90 },
    { id: "courses", icon: <FaGraduationCap />, label: "Courses", offset: -90 },
    { id: "contact-us", icon: <FaEnvelope />, label: "Contact Us", offset: -90 },
  ]

  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu-content">
        {/* Navigation Links */}
        <div className="mobile-nav-links">
          {navItems.map((item, index) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={600}
              offset={item.offset}
              onClick={toggleMenu}
              className={`mobile-nav-item ${activeSection === item.id ? "active" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mobile-nav-icon">{item.icon}</div>
              <span className="mobile-nav-text">{item.label}</span>
              <FaChevronRight className="mobile-nav-arrow" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mobile-cta">
          <Link
            to="apply-now"
            smooth={true}
            duration={600}
            offset={-90}
            onClick={toggleMenu}
            className="mobile-cta-button"
          >
            Get Started Now
          </Link>
        </div>

        {/* Social Links */}
        <div className="mobile-social-links">
          <a href="#" className="mobile-social-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="mobile-social-icon" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" className="mobile-social-icon" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" className="mobile-social-icon" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hamburger

