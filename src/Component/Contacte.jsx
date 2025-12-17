import Footer from "./Footer";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone, faUserClock, faUser, faPaperPlane, faCheckCircle, faStar, faShieldHalved, faClock, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Contacte.css';
import { useState } from 'react';

export default function Contacte(){
    const [showSuccess, setShowSuccess] = useState(false);
    const [successData, setSuccessData] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: formData.get('service')
        };
        
        // Show success message
        setSuccessData(data);
        setShowSuccess(true);
        e.target.reset();
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    };

    return <>
    <NavBar/>

        {/* Contact Title Section */}
        <div className="contact-title-section">
            <h1 className="contact-title">Contact <span className="contact-title-highlight">With Us</span></h1>
        </div>

        {/* Main Contact Section - Two Separate Cards */}
        <div className="contact-main-section">
            {/* Card 1 - Request a Quote */}
            <div className="contact-card-form">
                <div className="contact-card-header">
                    <div className="contact-card-icon">
                        <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                    <h2 className="contact-card-title">Request a Quote</h2>
                    <p className="contact-card-subtitle">Fill out the form and we&apos;ll get back to you soon</p>
             </div>

                <form className="contact-form" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <div className="input-wrapper">
                            <FontAwesomeIcon icon={faUser} className="input-icon" />
                            <input type="text" name="name" placeholder="Your Name" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <div className="input-wrapper">
                                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                                <input type="email" name="email" placeholder="Email Address" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-wrapper">
                                <FontAwesomeIcon icon={faPhone} className="input-icon" />
                                <input type="tel" name="phone" placeholder="Phone Number" required />
                            </div>
               </div>
               </div>

                    <div className="form-group">
                        <div className="select-wrapper">
                            <FontAwesomeIcon icon={faLocationDot} className="select-icon" />
                            <select name="service" required>
                                <option value="">Select Service</option>
                                <option value="Home Cleaning">Home Cleaning</option>
                                <option value="Office Cleaning">Office Cleaning</option>
                                <option value="Window Cleaning">Window Cleaning</option>
                                <option value="Chemical Cleaning">Chemical Cleaning</option>
               </select>
                        </div>
                    </div>

                    <button className="contact-submit-btn" type="submit">
                        <span>Send Message</span>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
             </form>
            </div>

            {/* Card 2 - Contact Information */}
            <div className="contact-card-info">
                <div className="contact-card-header">
                    <div className="contact-card-icon">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <h2 className="contact-card-title">Contact Information</h2>
                    <p className="contact-card-subtitle">Get in touch with us through any of these channels</p>
                </div>

                <div className="contact-info-list">
                    <div className="contact-info-item">
                        <div className="info-icon-wrapper">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <div className="info-content">
                            <span className="info-label">Address</span>
                            <span className="info-value">Chisinau. str. Independentei 40 of. 2/312</span>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <div className="info-icon-wrapper">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="info-content">
                            <span className="info-label">Phone</span>
                            <a href="tel:+37362033044" className="info-value">+373 6203 3044</a>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <div className="info-icon-wrapper">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="info-content">
                            <span className="info-label">Email</span>
                            <a href="mailto:ascleaningmoldova@gmail.com" className="info-value">
                                ascleaningmoldova@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="contact-info-item">
                        <div className="info-icon-wrapper">
                            <FontAwesomeIcon icon={faUserClock} />
                        </div>
                        <div className="info-content">
                            <span className="info-label">Working Hours</span>
                            <span className="info-value">Monday - Friday, 09:00 - 18:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Google Maps Section */}
        <div className="map-section">
            <div className="map-header">
                <div className="map-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <h2 className="map-title">Find Us</h2>
                <p className="map-subtitle">Visit our office at Chisinau, str. Independentei 40 of. 2/312</p>
            </div>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.5!2d28.8575!3d47.0104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAwJzM3LjQiTiAyOMKwNTEnMjcuMCJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '24px' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EasyClean Office Location"
                ></iframe>
      </div>
    </div>

        {/* Why Contact Us Section */}
        <div className="why-contact-section">
            <div className="why-contact-header">
                <h2 className="why-contact-title">Why Contact Us?</h2>
                <p className="why-contact-subtitle">Discover the benefits of choosing EasyClean for your cleaning needs</p>
            </div>

            <div className="why-contact-grid">
                <div className="why-contact-item">
                    <div className="why-contact-item-icon">
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <h3 className="why-contact-item-title">Professional Service</h3>
                    <p className="why-contact-item-text">Our experienced team ensures high-quality cleaning services tailored to your needs.</p>
                </div>

                <div className="why-contact-item">
                    <div className="why-contact-item-icon">
                        <FontAwesomeIcon icon={faShieldHalved} />
                    </div>
                    <h3 className="why-contact-item-title">Reliable & Trusted</h3>
                    <p className="why-contact-item-text">We are committed to delivering consistent, reliable cleaning services you can count on.</p>
                </div>

                <div className="why-contact-item">
                    <div className="why-contact-item-icon">
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <h3 className="why-contact-item-title">Flexible Scheduling</h3>
                    <p className="why-contact-item-text">We work around your schedule to provide cleaning services at your convenience.</p>
                </div>

                <div className="why-contact-item">
                    <div className="why-contact-item-icon">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h3 className="why-contact-item-title">Satisfaction Guaranteed</h3>
                    <p className="why-contact-item-text">Your satisfaction is our priority. We ensure every cleaning meets your expectations.</p>
                </div>
            </div>
        </div>

        {/* Success Message Card */}
        {showSuccess && successData && (
            <div className="success-message-card">
                <div className="success-message-content">
                    <div className="success-icon-wrapper">
                        <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
                    </div>
                    <div className="success-message-text">
                        <h3 className="success-title">Message Sent Successfully!</h3>
                        <p className="success-message">
                            Thank you, <strong>{successData.name}</strong>! We will contact you soon at <strong>{successData.email}</strong> or <strong>{successData.phone}</strong>.
                        </p>
                    </div>
                    <button 
                        className="success-close-btn" 
                        onClick={() => setShowSuccess(false)}
                        aria-label="Close success message"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            </div>
        )}

    <Footer/>
    </>
}