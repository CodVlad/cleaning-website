import Footer from "./Footer";
import NavBar from "./NavBar";
import imageASwindow from "../assets/imageASwindow.png";
import imageASchimic from "../assets/imageASchimic.png";
import image4 from "../assets/image4.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWindowMinimize, 
  faVirusSlash, 
  faCity, 
  faCheck, 
  faSprayCanSparkles, 
  faTag, 
  faArrowRight, 
  faPhone,
  faStar,
  faShieldHalved,
  faClock,
  faCheckCircle,
  faUsers,
  faAward,
  faListCheck,
  faArrowDown,
  faQuestionCircle,
  faImages,
  faBroom
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useState } from 'react';
import './Servicii.css';

export default function Servicii(){
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Photo images around text
    const photoImages = [
        "https://cascadecleaninguk.com/wp-content/uploads/elementor/thumbs/2150454561-qwwih6im24bwg6318ttqs8vx8hiwmyqpl9pqsqad0w.jpg",
        "https://www.pristinehome.com.au/wp-content/uploads/2018/11/Benefits-of-Having-Your-Home-Cleaned-by-a-Professional-Cleaner.jpg",
        "https://maidthis.com/wp-content/uploads/sites/15/2020/07/Where-can-I-book-the-finest-Airbnb-cleaning-1.jpg",
        "https://i0.wp.com/cluttertrucker.com/wp-content/uploads/2023/12/residential-deep-cleaning.png?resize=800%2C600&ssl=1",
        "https://aksharhousekeeping.co.in/wp-content/uploads/2023/12/professional-cleaning-service-people-working-together-office-1-2.jpg",
        "https://techsquadteam.com/assets/profile/blogimages/39318fb1795c4074d77aa776cabe3154.png",
        "https://www.henryford.com/-/media/project/hfhs/henryford/henry-ford-blog/images/mobile-interior-banner-images/2019/02/bucket-of-cleaning-products.jpg",
        "https://static.wixstatic.com/media/11062b_cbd10367d7414862bb3b683f3556a41b~mv2.jpeg/v1/fill/w_640,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_cbd10367d7414862bb3b683f3556a41b~mv2.jpeg"
    ];

    // Generate circular positions around center
    const photoPositions = photoImages.map((_, index) => {
        const angle = (index / photoImages.length) * 2 * Math.PI;
        const radius = 550; // Distance from center
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius
        };
    });

    const faqData = [
        {
            question: "How often should I schedule cleaning services?",
            answer: "The frequency depends on your needs. We offer one-time, weekly, bi-weekly, and monthly cleaning services. For offices, we recommend weekly or bi-weekly cleanings, while homes can benefit from monthly deep cleanings."
        },
        {
            question: "Do you bring your own cleaning supplies?",
            answer: "Yes, we bring all professional-grade cleaning supplies and equipment. However, if you prefer to use specific products, we can accommodate your preferences."
        },
        {
            question: "Are your cleaning products safe for pets and children?",
            answer: "Absolutely! We use eco-friendly and safe cleaning products that are non-toxic and safe for pets and children. All our products are tested and certified."
        },
        {
            question: "What is included in a standard cleaning service?",
            answer: "Our standard cleaning includes dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning, trash removal, and general tidying. Additional services can be added based on your needs."
        },
        {
            question: "Do you offer emergency cleaning services?",
            answer: "Yes, we offer emergency cleaning services for urgent situations. Contact us and we&apos;ll do our best to accommodate your needs as quickly as possible."
        },
        {
            question: "How do I get a quote for cleaning services?",
            answer: "You can request a quote through our contact form, call us directly, or visit our prices page. We&apos;ll provide a detailed estimate based on your specific requirements."
        }
    ];

    return<>
    <NavBar/>
    
    {/* Services Title Section */}
    <div className="services-title-section">
        <h1 className="services-title-text">
            Our Company Provide The<br />
            <span className="services-title-highlight">Best Cleaning Service</span>
        </h1>
    </div>

    {/* Services Cards Section - Albadoe Style */}
    <div className="services-cards-albadoe">
        <div className="services-cards-container">
            <div className="service-card-albadoe">
                <div className="service-card-albadoe-image">
                    <img src="https://cascadecleaninguk.com/wp-content/uploads/elementor/thumbs/2150454561-qwwih6im24bwg6318ttqs8vx8hiwmyqpl9pqsqad0w.jpg" alt="General cleaning" />
                </div>
                <div className="service-card-albadoe-category">General</div>
                <h3 className="service-card-albadoe-title">General Cleaning</h3>
                <p className="service-card-albadoe-description">Comprehensive cleaning services for all types of spaces and environments.</p>
            </div>

            <div className="service-card-albadoe">
                <div className="service-card-albadoe-image">
                    <img src="https://www.pristinehome.com.au/wp-content/uploads/2018/11/Benefits-of-Having-Your-Home-Cleaned-by-a-Professional-Cleaner.jpg" alt="Maintenance cleaning" />
                </div>
                <div className="service-card-albadoe-category">Maintenance</div>
                <h3 className="service-card-albadoe-title">Maintenance Cleaning</h3>
                <p className="service-card-albadoe-description">Regular maintenance cleaning to keep your space consistently clean and fresh.</p>
            </div>

            <div className="service-card-albadoe">
                <div className="service-card-albadoe-image">
                    <img src="https://maidthis.com/wp-content/uploads/sites/15/2020/07/Where-can-I-book-the-finest-Airbnb-cleaning-1.jpg" alt="Post-renovation cleaning" />
                </div>
                <div className="service-card-albadoe-category">Renovation</div>
                <h3 className="service-card-albadoe-title">Post-Renovation Cleaning</h3>
                <p className="service-card-albadoe-description">Thorough cleaning after renovation to remove dust, debris, and construction residues.</p>
            </div>

            <div className="service-card-albadoe">
                <div className="service-card-albadoe-image">
                    <img src="https://i0.wp.com/cluttertrucker.com/wp-content/uploads/2023/12/residential-deep-cleaning.png?resize=800%2C600&ssl=1" alt="Window and facade cleaning" />
                </div>
                <div className="service-card-albadoe-category">Window</div>
                <h3 className="service-card-albadoe-title">Window and Facade Cleaning</h3>
                <p className="service-card-albadoe-description">Professional window and facade cleaning for crystal-clear views and pristine exteriors.</p>
            </div>

            <div className="service-card-albadoe">
                <div className="service-card-albadoe-image">
                    <img src="https://aksharhousekeeping.co.in/wp-content/uploads/2023/12/professional-cleaning-service-people-working-together-office-1-2.jpg" alt="Chemical cleaning" />
                </div>
                <div className="service-card-albadoe-category">Chemical</div>
                <h3 className="service-card-albadoe-title">Chemical Cleaning of Furniture and Carpets</h3>
                <p className="service-card-albadoe-description">Deep chemical cleaning for furniture and carpets to restore their original beauty.</p>
            </div>

            <div className="service-card-albadoe">
                <div className="service-card-albadoe-image">
                    <img src="https://techsquadteam.com/assets/profile/blogimages/39318fb1795c4074d77aa776cabe3154.png" alt="Exchangeable anti-dirt carpets" />
                </div>
                <div className="service-card-albadoe-category">Carpet</div>
                <h3 className="service-card-albadoe-title">Exchangeable Anti-Dirt Carpets</h3>
                <p className="service-card-albadoe-description">Professional carpet services with exchangeable anti-dirt solutions for high-traffic areas.</p>
            </div>

            <div className="service-card-albadoe">
                <div className="service-card-albadoe-image">
                    <img src="https://www.henryford.com/-/media/project/hfhs/henryford/henry-ford-blog/images/mobile-interior-banner-images/2019/02/bucket-of-cleaning-products.jpg" alt="Ozonization" />
                </div>
                <div className="service-card-albadoe-category">Sanitization</div>
                <h3 className="service-card-albadoe-title">Ozonization</h3>
                <p className="service-card-albadoe-description">Advanced ozonization services for complete disinfection and odor elimination.</p>
            </div>

            <div className="service-card-albadoe">
                <div className="service-card-albadoe-image">
                    <img src="https://static.wixstatic.com/media/11062b_cbd10367d7414862bb3b683f3556a41b~mv2.jpeg/v1/fill/w_640,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_cbd10367d7414862bb3b683f3556a41b~mv2.jpeg" alt="Floor and carpet cleaning" />
                </div>
                <div className="service-card-albadoe-category">Floor</div>
                <h3 className="service-card-albadoe-title">Floor and Carpet Cleaning</h3>
                <p className="service-card-albadoe-description">Completely safe for people, animals and interior objects. Professional floor and carpet cleaning services.</p>
            </div>
        </div>
    </div>

    {/* Beneficiile Companiei Section */}
    <div className="benefits-section">
        <div className="benefits-container">
            <div className="benefits-header">
                <h2 className="benefits-title">Why Choose <span className="benefits-title-highlight">EasyClean</span>?</h2>
                <p className="benefits-subtitle">Discover the benefits that make us the preferred choice for professional cleaning services</p>
            </div>
            <div className="benefits-grid">
                <div className="benefit-item">
                    <div className="benefit-icon-wrapper">
                        <FontAwesomeIcon icon={faAward} />
                    </div>
                    <h3 className="benefit-title">Award-Winning Service</h3>
                    <p className="benefit-text">Recognized for excellence in professional cleaning services with years of industry experience.</p>
                </div>
                <div className="benefit-item">
                    <div className="benefit-icon-wrapper">
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <h3 className="benefit-title">Expert Team</h3>
                    <p className="benefit-text">Our trained professionals bring expertise and attention to detail to every cleaning project.</p>
                </div>
                <div className="benefit-item">
                    <div className="benefit-icon-wrapper">
                        <FontAwesomeIcon icon={faShieldHalved} />
                    </div>
                    <h3 className="benefit-title">Fully Insured</h3>
                    <p className="benefit-text">We&apos;re fully licensed and insured, giving you peace of mind with every service.</p>
                </div>
                <div className="benefit-item">
                    <div className="benefit-icon-wrapper">
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <h3 className="benefit-title">Flexible Scheduling</h3>
                    <p className="benefit-text">We work around your schedule to provide cleaning services at your convenience.</p>
                </div>
                <div className="benefit-item">
                    <div className="benefit-icon-wrapper">
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <h3 className="benefit-title">Satisfaction Guaranteed</h3>
                    <p className="benefit-text">Your satisfaction is our priority. We ensure every cleaning meets your expectations.</p>
                </div>
                <div className="benefit-item">
                    <div className="benefit-icon-wrapper">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <h3 className="benefit-title">Premium Quality</h3>
                    <p className="benefit-text">We use only the best professional-grade equipment and eco-friendly cleaning products.</p>
                </div>
            </div>
        </div>
    </div>

    {/* Procesul de Lucru Section */}
    <div className="process-section">
        <div className="process-container">
            <div className="section-header">
                <h2 className="section-title">Our <span className="section-title-highlight">Working Process</span></h2>
                <p className="section-subtitle">Simple steps to get your space perfectly cleaned</p>
            </div>
            <div className="process-steps">
                <div className="process-step">
                    <div className="process-step-number">1</div>
                    <div className="process-step-icon">
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <h3 className="process-step-title">Contact Us</h3>
                    <p className="process-step-text">Reach out via phone, email, or our contact form to discuss your cleaning needs.</p>
                </div>
                <div className="process-step">
                    <div className="process-step-number">2</div>
                    <div className="process-step-icon">
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <h3 className="process-step-title">Get a Quote</h3>
                    <p className="process-step-text">We&apos;ll provide a detailed quote based on your specific requirements and space size.</p>
                </div>
                <div className="process-step">
                    <div className="process-step-number">3</div>
                    <div className="process-step-icon">
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <h3 className="process-step-title">Schedule Service</h3>
                    <p className="process-step-text">Choose a convenient date and time that works best for your schedule.</p>
                </div>
                <div className="process-step">
                    <div className="process-step-number">4</div>
                    <div className="process-step-icon">
                        <FontAwesomeIcon icon={faSprayCanSparkles} />
                    </div>
                    <h3 className="process-step-title">Enjoy Clean Space</h3>
                    <p className="process-step-text">Our team arrives on time and delivers exceptional cleaning results.</p>
                </div>
            </div>
        </div>
    </div>

    {/* Întrebări Frecvente (FAQ) Section */}
    <div className="faq-section">
        <div className="faq-container">
            <div className="section-header">
                <h2 className="section-title">Frequently Asked <span className="section-title-highlight">Questions</span></h2>
                <p className="section-subtitle">Find answers to common questions about our services</p>
            </div>
            <div className="faq-list">
                {faqData.map((faq, index) => (
                    <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                        <div className="faq-question" onClick={() => toggleFaq(index)}>
                            <span className="faq-question-text">{faq.question}</span>
                            <FontAwesomeIcon 
                                icon={faArrowDown} 
                                className={`faq-arrow ${openFaq === index ? 'rotated' : ''}`} 
                            />
                        </div>
                        <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

    {/* Photo Animation Section - Same as HomePage */}
    <div className="photo-animation-section">
        <div className="photo-grid-container">
            <div className="photo-scatter-container">
                {photoImages.map((img, index) => (
                    <div 
                        key={`photo-${index}`} 
                        className="photo-scatter-item"
                        style={{
                            '--photo-x': photoPositions[index].x + 'px',
                            '--photo-y': photoPositions[index].y + 'px'
                        }}
                    >
                        <img src={img} alt={`Photo ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="photo-center-text">
                <h1>Your Clean Happy <span className="text-highlight">Space Is Just</span> One Click Away</h1>
                <Link to="/contacte" className="photo-quote-btn">
                    Get a Quote
                    <FontAwesomeIcon icon={faArrowRight} className="photo-quote-btn-icon" />
                </Link>
            </div>
        </div>
    </div>

    <Footer/>
    </>
}