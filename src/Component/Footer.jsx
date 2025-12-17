import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import EasyCleanLogo from './EasyCleanLogo';

export default function Footer(){
    return<>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <EasyCleanLogo />
          </div>
          <p>Professional cleaning services for an impeccable environment.</p>
          <div className="footer-contact-info">
            <a href="tel:+37362033044" className="footer-contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>+373 6203 3044</span>
            </a>
            <a href="mailto:ascleaningmoldova@gmail.com" className="footer-contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>ascleaningmoldova@gmail.com</span>
            </a>
            <p className="footer-contact-item">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Chisinau, str. Independentei 40 of. 2/312</span>
            </p>
          </div>
        </div>

        <div className="footer-section footer-links">
          <h6>Quick Links</h6>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/servicii">Services</Link></li>
            <li><Link to="/pret">Prices</Link></li>
            <li><Link to="/newslist">News</Link></li>
            <li><Link to="/contacte">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-services">
          <h6>Our Services</h6>
          <ul>
            <li><Link to="/servicii">Window Cleaning</Link></li>
            <li><Link to="/servicii">Chemical Cleaning</Link></li>
            <li><Link to="/servicii">Office Cleaning</Link></li>
            <li><Link to="/servicii">Home Cleaning</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-social">
          <h6>Follow Us</h6>
          <p>Stay connected with us on social media</p>
        <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100075975437222&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
          </a>
            <a href="https://www.instagram.com/as.cleaningcompany/?igsh=YTBuODN6N3ljb2pw" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
            <a href="https://www.tiktok.com/@ascleaningmoldova?_t=8mEYYcjyTSQ&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <FontAwesomeIcon icon={faTiktok} />
          </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EasyClean. All rights reserved.</p>
        <p>Professional Cleaning Services</p>
      </div>
    </footer>
    </>
}