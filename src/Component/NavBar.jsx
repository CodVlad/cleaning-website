import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { 
  faXmark, 
  faChevronDown, 
  faHome, 
  faUser, 
  faBroom, 
  faTag, 
  faImages, 
  faEnvelope, 
  faQuestionCircle, 
  faStar, 
  faNewspaper 
} from "@fortawesome/free-solid-svg-icons";
import EasyCleanLogo from "./EasyCleanLogo";
import StaggeredMenu from "./StaggeredMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOtherOpen, setIsOtherOpen] = useState(false);
  const otherDropdownRef = useRef(null);

  // Detect scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (otherDropdownRef.current && !otherDropdownRef.current.contains(event.target)) {
        setIsOtherOpen(false);
      }
    };

    if (isOtherOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOtherOpen]);

  return (
    <div className="navbar">
      {/* NAVBAR DESKTOP */}
      <div className="navbar-start hidden lg:block">
        <Link to="/" className="logo-link">
          <div className="logo">
            <EasyCleanLogo />
          </div>
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <div className="nav-menu-blur">
          <ul className="menu menu-horizontal">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/servicii" className="nav-link">Service</Link></li>
            <li className="nav-dropdown" ref={otherDropdownRef}>
              <button 
                className="nav-link nav-link-dropdown"
                onClick={() => setIsOtherOpen(!isOtherOpen)}
                aria-expanded={isOtherOpen}
                aria-haspopup="true"
              >
                Other
                <FontAwesomeIcon icon={faChevronDown} className={`dropdown-arrow ${isOtherOpen ? 'dropdown-arrow-open' : ''}`} />
              </button>
              {isOtherOpen && (
                <div className={`nav-dropdown-card ${isOtherOpen ? 'nav-dropdown-card-open' : ''}`}>
                  <div className="nav-dropdown-grid">
                    <Link to="/" className="nav-dropdown-item-card" onClick={() => setIsOtherOpen(false)}>
                      <FontAwesomeIcon icon={faHome} className="nav-dropdown-icon" />
                      <span className="nav-dropdown-text">Home</span>
                    </Link>
                    <Link to="/about" className="nav-dropdown-item-card" onClick={() => setIsOtherOpen(false)}>
                      <FontAwesomeIcon icon={faUser} className="nav-dropdown-icon" />
                      <span className="nav-dropdown-text">About Us</span>
                    </Link>
                    <Link to="/servicii" className="nav-dropdown-item-card" onClick={() => setIsOtherOpen(false)}>
                      <FontAwesomeIcon icon={faBroom} className="nav-dropdown-icon" />
                      <span className="nav-dropdown-text">Services</span>
                    </Link>
                    <Link to="/pret" className="nav-dropdown-item-card" onClick={() => setIsOtherOpen(false)}>
                      <FontAwesomeIcon icon={faTag} className="nav-dropdown-icon" />
                      <span className="nav-dropdown-text">Prices</span>
                    </Link>
                    <Link to="/contacte" className="nav-dropdown-item-card" onClick={() => setIsOtherOpen(false)}>
                      <FontAwesomeIcon icon={faEnvelope} className="nav-dropdown-icon" />
                      <span className="nav-dropdown-text">Contact</span>
                    </Link>
                    <Link to="/newslist" className="nav-dropdown-item-card" onClick={() => setIsOtherOpen(false)}>
                      <FontAwesomeIcon icon={faNewspaper} className="nav-dropdown-icon" />
                      <span className="nav-dropdown-text">Blog</span>
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li><Link to="/contacte" className="nav-link nav-link-btn">Contact Us</Link></li>
        </ul>
        </div>
      </div>

      {/* Staggered Menu for Mobile */}
      <div className="lg:hidden">
        <StaggeredMenu />
      </div>
    </div>
  );
}
