import NavBar from "./NavBar";
import './HomePage.css';
import image from "../assets/image.png"; 
import imageAbout from "../assets/imageAbout.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight, faCheck, faUsers, faChartLine, faUserCheck, faStar, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import 'animate.css';
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Lenta from "./lenta";




export default function HomePage(){

  const elementRef1 = useRef(null);
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [statsAnimated, setStatsAnimated] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element1 = elementRef1.current;
    if (element1) observer.observe(element1);

    return () => {
        if (element1) observer.unobserve(element1);
    };
  }, []);

  // Counter animation for stats
  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          
          const animateCounter = (element, target, suffix = '') => {
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              element.textContent = Math.floor(current) + suffix;
            }, 16);
          };

          const statsNumbers = document.querySelectorAll('.stats-number');
          statsNumbers.forEach((stat) => {
            const target = parseInt(stat.getAttribute('data-target'));
            const suffix = stat.nextElementSibling?.classList.contains('stats-unit') ? '' : '';
            animateCounter(stat, target, suffix);
          });
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = statsRef.current;
    if (statsElement) {
      statsObserver.observe(statsElement);
    }

    return () => {
      if (statsElement) statsObserver.unobserve(statsElement);
    };
  }, [statsAnimated]);

    return (
        <>
            <div className="image-container">
                <NavBar />
                <img src={image} alt="Cleaning services" className="header-foto" />
                <div className="overlay">
                    <h1 className="text animate__animated animate__fadeInUp">Cleaning services for businesses and homes in Chisinau</h1>
                    <p className="text-p animate__animated animate__fadeInUp">Professional cleaning with perfect cleaning guarantee – trust EasyClean experts</p>
                    
                    <div className="hero-rating animate__animated animate__fadeInUp">
                        <div className="rating-stars">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <span className="rating-text">5.0</span>
                        <span className="rating-source">Google</span>
                    </div>

                    <div className="hero-buttons animate__animated animate__fadeInUp">
                        <Link to="/contacte" className="header-btn header-btn-primary">Request a Quote</Link>
                        <Link to="/servicii" className="header-btn header-btn-secondary">Our Services</Link>
                    </div>

                    <div className="hero-stats animate__animated animate__fadeInUp">
                        <div className="hero-stat-item">
                            <div className="hero-stat-number">500+</div>
                            <div className="hero-stat-label">Satisfied Clients</div>
                        </div>
                        <div className="hero-stat-item">
                            <div className="hero-stat-number">Trusted</div>
                            <div className="hero-stat-label">By Major Brands</div>
                        </div>
                        <div className="hero-stat-item">
                            <div className="hero-stat-number">8</div>
                            <div className="hero-stat-label">Years on Market</div>
                        </div>
                    </div>
                </div>
             </div>

             <div className="OurService">
                <h1>
                    <span className="services-title-first">Range Of Professional</span><br />
                    <span className="services-title-highlight">Cleaning Solutions</span>
                </h1>
                <Link to="/servicii" className="view-all-services-btn">View all Service</Link>
             </div>

             <div className="services-cards-albadoe">
                <div className="services-cards-container">
                    <Link to="/servicii" className="service-card-albadoe">
                        <div className="service-card-albadoe-image">
                            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop" alt="General cleaning" />
                        </div>
                        <div className="service-card-albadoe-category">General</div>
                        <h3 className="service-card-albadoe-title">General Cleaning</h3>
                        <p className="service-card-albadoe-description">Comprehensive cleaning services for all types of spaces and environments.</p>
                    </Link>

                    <Link to="/servicii" className="service-card-albadoe">
                        <div className="service-card-albadoe-image">
                            <img src="https://bluegroep.nl/wp-content/uploads/2017/01/blue-groep-glazenwassen-glas-en-gevelreiniging.jpg" alt="Window and facade cleaning" />
                        </div>
                        <div className="service-card-albadoe-category">Window</div>
                        <h3 className="service-card-albadoe-title">Window and Facade Cleaning</h3>
                        <p className="service-card-albadoe-description">Professional window and facade cleaning for crystal-clear views and pristine exteriors.</p>
                    </Link>

                    <Link to="/servicii" className="service-card-albadoe">
                        <div className="service-card-albadoe-image">
                            <img src="https://gwindor-ciscenje.com.hr/wp-content/uploads/2024/06/gwindor-ciscenje-namjestaja-2-hero-1024x683.jpg" alt="Chemical cleaning" />
                        </div>
                        <div className="service-card-albadoe-category">Chemical</div>
                        <h3 className="service-card-albadoe-title">Chemical Cleaning of Furniture and Carpets</h3>
                        <p className="service-card-albadoe-description">Deep chemical cleaning for furniture and carpets to restore their original beauty.</p>
                    </Link>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="why-choose-section">
                <div className="why-choose-container">
                    <h2 className="why-choose-title">Why Choose Us</h2>
                    <div className="why-choose-grid">
                        <div className="why-choose-item">
                            <div className="why-choose-icon">
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </div>
                            <h3>Professional Equipment and Certified Chemical Products</h3>
                        </div>
                        <div className="why-choose-item">
                            <div className="why-choose-icon">
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </div>
                            <h3>Quality Control at Every Stage</h3>
                        </div>
                        <div className="why-choose-item">
                            <div className="why-choose-icon">
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </div>
                            <h3>Transparent Prices, No Hidden Costs – Trust is Earned Through Transparency</h3>
                            <p className="why-choose-subtext">About us, cleaning methods and equipment used</p>
                        </div>
                        <div className="why-choose-item">
                            <div className="why-choose-icon">
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </div>
                            <h3>100% Cleaning Guarantee</h3>
                        </div>
                        <div className="why-choose-item">
                            <div className="why-choose-icon">
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </div>
                            <h3>Flexible Solutions for Businesses and Homes</h3>
                        </div>
                        <div className="why-choose-item">
                            <div className="why-choose-icon">
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </div>
                            <h3>Over 8 Years of Experience</h3>
                            <Link to="/about" className="why-choose-link">Learn More</Link>
                        </div>
                    </div>
                </div>
             </div>

            <Lenta/>

            {/* How We Work Section */}
            <div className="how-we-work-section">
                <div className="how-we-work-container">
                    <h2 className="how-we-work-title">How We Make Your<br /><span className="how-we-work-highlight">Space Ideal?</span></h2>
                    <div className="how-we-work-steps">
                        <div className="how-we-work-step">
                            <div className="step-number">01</div>
                            <div className="step-content">
                                <h3>Request a Quote</h3>
                                <p>Request or call. We come on-site or discuss the complexity of the work and price over the phone.</p>
                            </div>
                        </div>
                        <div className="how-we-work-step">
                            <div className="step-number">02</div>
                            <div className="step-content">
                                <h3>We Come and Clean at the Scheduled Time</h3>
                            </div>
                        </div>
                        <div className="how-we-work-step">
                            <div className="step-number">03</div>
                            <div className="step-content">
                                <h3>Quality Check and Payment</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="OurService">
                <h1>About Us</h1>
             </div>

           <div className="about-container">
            <div className="about">
                <div className="images">
                    <img ref={elementRef1} src={imageAbout} alt="Office cleaning" 
                    className={` ${
                        isVisible ? "animate__animated animate__backInLeft" : "opacity-0"
                      } transition-all duration-700`}/>
                </div>
                <div className="content">
                    <h2 ref={elementRef1} className={`${
                        isVisible ? `animate__animated animate__fadeInUp` : "opacity-0"
                        } transition-all duration-700`} >
                        Professional cleaning services you can rely on </h2>
                    <div className="services">
                        <div>
                            <h3 ref={elementRef1} className={`${
                                isVisible ? `animate__animated animate__fadeInUp` : "opacity-0"
                                } transition-all duration-700`} >Eco-Friendly Cleaning</h3>
                            <p ref={elementRef1} className={`${
                                isVisible ? `animate__animated animate__fadeInUp` : "opacity-0"
                                } transition-all duration-700`} >We offer eco-friendly cleaning services, using biodegradable products and sustainable methods for a healthier environment.</p>
                        </div>
                        <div>
                            <h3 ref={elementRef1} className={`${
                                isVisible ? `animate__animated animate__fadeInUp` : "opacity-0"
                                } transition-all duration-700`} >Emergency Cleaning </h3>
                            <p ref={elementRef1} className={`${
                                isVisible ? `animate__animated animate__fadeInUp` : "opacity-0"
                                } transition-all duration-700`} >Need fast and efficient cleaning? Our team is available for emergency interventions, ensuring a clean environment in the shortest time.</p>
                        </div>
                    </div>
                    <Link to="/about" ref={elementRef1} className={`about-btn ${
                                isVisible ? `animate__animated animate__fadeInUp` : "opacity-0"
                                } transition-all duration-700`} >About Us
                        <div className="arrow">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </Link>
                </div>
            </div>
            </div>

            <div className="stats-section" ref={statsRef}>
                <div className="stats-container">
                    <div className="stats-card stats-card-1">
                        <div className="stats-icon-wrapper">
                            <div className="stats-icon-bg"></div>
                            <FontAwesomeIcon icon={faUsers} className="stats-icon" />
                        </div>
                        <div className="stats-number" data-target="30">30</div>
                        <div className="stats-label">Experts Available</div>
                        <div className="stats-divider"></div>
                        <p className="stats-description">We have a team of 30 dedicated professionals, ready to provide high-quality cleaning services. Each expert is well-trained and detail-oriented, ensuring that every space is impeccable.</p>
                        <Link to="/servicii" className="stats-link">
                            Learn More <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    </div>

                    <div className="stats-card stats-card-2 stats-card-featured">
                        <div className="stats-badge">Best Choice</div>
                        <div className="stats-icon-wrapper">
                            <div className="stats-icon-bg"></div>
                            <FontAwesomeIcon icon={faChartLine} className="stats-icon" />
                        </div>
                        <div className="stats-number" data-target="99">99</div>
                        <div className="stats-unit">%</div>
                        <div className="stats-label">Satisfaction Rate</div>
                        <div className="stats-divider"></div>
                        <p className="stats-description">We pride ourselves on a 99% satisfaction rate, reflecting our commitment to quality and exceptional services. Every client is important to us.</p>
                        <Link to="/servicii" className="stats-link">
                            Learn More <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    </div>

                    <div className="stats-card stats-card-3">
                        <div className="stats-icon-wrapper">
                            <div className="stats-icon-bg"></div>
                            <FontAwesomeIcon icon={faUserCheck} className="stats-icon" />
                        </div>
                        <div className="stats-number" data-target="500">500</div>
                        <div className="stats-label">Satisfied Clients</div>
                        <div className="stats-divider"></div>
                        <p className="stats-description">We have earned the trust of over 400 satisfied clients, thanks to our high-quality services and attention to detail. Each client is a priority for us.</p>
                        <Link to="/servicii" className="stats-link">
                            Learn More <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                    </div>
                </div>
            </div>


            <div className="home-container">
            <div className="home">
                <div className="home-images">
                    <img  src="https://jangarcleaners.com.au/wp-content/uploads/2023/12/house_climg1.jpg" alt="Office cleaning" />
                </div>
                <div className="home-content">
                    <h2>We Make Your Home Shine</h2>
                    <p style={{color:"black", marginTop:"40px"}}>
                        At <b>EasyClean</b>, we are dedicated to transforming any home, 
                        office or commercial space into an impeccable and 
                        revitalizing environment. Our team of professionals takes care of every
                        detail, providing you with a deep 
                        and efficient cleaning that not only looks good, but also protects 
                        your health. Regardless of the type of space, we adapt to 
                        your needs with personalized solutions, guaranteeing a 
                        clean, fresh and energetic environment. Choose <b>EasyClean</b> for 
                        a space that radiates freshness and brings you peace and 
                        confidence day by day.</p>
                </div>
            </div>
            </div>


            <div className="home-container">
                <div className="home"> 
                    <div className="home-content">
                        <h2>WHAT WE DO</h2>
                        <h4><FontAwesomeIcon icon={faCheck} style={{color:"#FFD700"}}/> Experience an impeccable space with EasyClean professional services </h4>
                        <p style={{color:"black", marginTop:"20px"}}>
                        At <b>EasyClean</b>, we are dedicated to providing high-quality cleaning for 
                        any type of space. With attention to detail and efficient products, we transform 
                        homes and commercial spaces into a fresh and hygienic environment.</p>
                        <h4><FontAwesomeIcon icon={faCheck} style={{color:"#FFD700", marginRight:"5px"}} />Window Cleaning</h4>
                        <p>We restore the clarity and shine of windows, removing dirt and marks for an impeccable view.</p>
                        <h4><FontAwesomeIcon icon={faCheck} style={{color:"#FFD700", marginRight:"5px"}}/>Professional Living Room Cleaning</h4>
                        <p>We ensure a clean and comfortable living room, removing dust and dirt for a pleasant environment.</p>

                    </div>
                <div className="home-images">
                    <img  src="https://charmycleaning.com/wp-content/uploads/2025/04/01.jpg" alt="Office cleaning" />
                </div>
            </div>
            </div>


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
    );
}
