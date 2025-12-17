import NavBar from "./NavBar";
import Footer from "./Footer";
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAward,
    faShieldHalved,
    faCheckCircle,
    faMapMarkerAlt,
    faPhone,
    faEnvelope,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function About(){
    const statsRef = useRef(null);
    const [statsAnimated, setStatsAnimated] = useState(false);

    // Photo images around text - Same as HomePage
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
                            element.textContent = Math.floor(current).toLocaleString() + suffix;
                        }, 16);
                    };

                    const statsNumbers = document.querySelectorAll('.about-stat-number');
                    statsNumbers.forEach((stat) => {
                        const target = parseInt(stat.getAttribute('data-target'));
                        const suffix = stat.getAttribute('data-suffix') || '';
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

    // Set image height to match cards height
    useEffect(() => {
        const updateImageHeight = () => {
            const card1 = document.getElementById('about-belief-card-1');
            const card2 = document.getElementById('about-belief-card-2');
            const image = document.getElementById('about-belief-image');
            
            if (card1 && card2 && image) {
                const card1Height = card1.offsetHeight;
                const card2Height = card2.offsetHeight;
                const gap = 30; // gap between cards
                const totalHeight = card1Height + card2Height + gap;
                image.style.height = `${totalHeight}px`;
            }
        };

        updateImageHeight();
        window.addEventListener('resize', updateImageHeight);
        
        return () => {
            window.removeEventListener('resize', updateImageHeight);
        };
    }, []);

    return <>
    <NavBar/>
    
    {/* Hero Section */}
    <div className="about-hero-section">
        <div className="about-hero-container">
            <h1 className="about-hero-title">Your Reliable Partner For<br /><span className="about-hero-highlight">Home Care Solutions</span></h1>
            <div className="about-hero-images">
                <div className="about-hero-image about-hero-image-large">
                    <img src="https://sunshinepestcontrol.sa/wp-content/uploads/2025/10/house-cleaning-services-riyadh.webp" alt="About" />
                </div>
                <div className="about-hero-images-small">
                    <div className="about-hero-image about-hero-image-small">
                        <img src="https://libragroupuae.com/wp-content/uploads/2025/06/affordable-house-cleaning-in-UAE-1024x683.jpg" alt="About" />
                    </div>
                    <div className="about-hero-image about-hero-image-small">
                        <img src="https://utc.com.au/wp-content/uploads/2025/03/commercial-cleaning-banner.jpg" alt="About" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Stats Section */}
    <div className="about-stats-section" ref={statsRef}>
        <div className="about-stats-container">
            <div className="about-stats-content">
                <h2 className="about-stats-title">Creating a Cleaner Future Through Our Reliable Services</h2>
            </div>
            <div className="about-stats-grid">
                <div className="about-stat-card">
                    <div className="about-stat-number" data-target="8" data-suffix="+">0</div>
                    <div className="about-stat-label">Years of trusted service</div>
                </div>
                <div className="about-stat-card">
                    <div className="about-stat-number" data-target="500" data-suffix="+">0</div>
                    <div className="about-stat-label">Satisfied clients</div>
                </div>
                <div className="about-stat-card">
                    <div className="about-stat-number" data-target="99" data-suffix="%">0</div>
                    <div className="about-stat-label">Satisfaction Rate</div>
                </div>
                <div className="about-stat-card">
                    <div className="about-stat-number" data-target="30" data-suffix="+">0</div>
                    <div className="about-stat-label">Highly trained cleaning specialists</div>
                </div>
            </div>
        </div>
    </div>

    {/* Mission & Vision Section */}
    <div className="about-beliefs-section">
        <div className="about-beliefs-container">
            <h2 className="about-beliefs-title">What We Believe In And<br /><span className="about-beliefs-highlight">Always Deliver</span></h2>
            <div className="about-beliefs-layout">
                <div className="about-beliefs-cards" id="about-beliefs-cards">
                    <div className="about-belief-card" id="about-belief-card-1">
                        <h3>Our <span className="about-belief-highlight">Mission</span></h3>
                        <p>We're more than just cleaners — we're here to simplify your life by delivering reliable, high-quality cleaning with genuine care and purpose. Our mission is to create spaces that feel not just clean, but refreshed, calm, and truly enjoyable to live or work in. From top to bottom, every detail is handled with precision, so you can breathe easy and focus on what matters most.</p>
                        </div>
                    <div className="about-belief-card" id="about-belief-card-2">
                        <h3>Our <span className="about-belief-highlight">Vision</span></h3>
                        <p>We envision a future where every home and workplace enjoys the comfort of consistent cleanliness without stress. By combining innovation, eco-friendly practices, and trusted professionals, our goal is to redefine cleaning as more than a chore — it becomes an effortless experience. We aim to set the standard for reliable, caring, and sustainable cleaning services that uplift everyday living.</p>
                    </div>
                </div>
                <div className="about-belief-image">
                    <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&h=800&fit=crop" alt="About" id="about-belief-image" />
                </div>
            </div>
        </div>
    </div>

    {/* What We Do Section */}
    <div className="about-what-we-do-section">
        <div className="about-what-we-do-container">
            <h2 className="about-what-we-do-title">What can we actually do for you?</h2>
            <p className="about-what-we-do-subtitle">Choosing EasyClean means placing your loved ones in the hands of a deeply dedicated, compassionate, and experienced team—committed to providing exceptional care</p>
            <div className="about-what-we-do-grid">
                <div className="about-what-we-do-card">
                    <div className="about-what-we-do-icon">
                        <FontAwesomeIcon icon={faAward} />
                    </div>
                    <h3>Experience and Expertise</h3>
                    <p>Our skilled team brings years of experience, ensuring top-quality cleaning with attention to detail, reliability, and a professional touch every time.</p>
                </div>
                <div className="about-what-we-do-card">
                    <div className="about-what-we-do-icon">
                        <FontAwesomeIcon icon={faShieldHalved} />
                    </div>
                    <h3>Comprehensive Care Approach</h3>
                    <p>We go beyond surface cleaning, combining deep sanitization, eco-friendly products, and consistent maintenance for a healthier, safer living environment.</p>
                </div>
                <div className="about-what-we-do-card">
                    <div className="about-what-we-do-icon">
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </div>
                    <h3>Commitment to Quality and Safety</h3>
                    <p>From safe products to trained staff, we prioritize hygiene and protection—delivering a spotless, refreshing space you can trust daily.</p>
                </div>
            </div>
            <Link to="/contacte" className="about-what-we-do-btn">
                Contact Us
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            </div>
        </div>

    {/* Timeline Section */}
    <div className="about-timeline-section">
        <div className="about-timeline-container">
            <div className="about-timeline-item">
                <div className="about-timeline-year">2024</div>
                <h3>IPO in NYSE</h3>
                <p>EasyClean reached IPO on NYSE, earning global recognition and expanding reliable cleaning services.</p>
            </div>
            <div className="about-timeline-item">
                <div className="about-timeline-year">2023</div>
                <h3>Series A raised</h3>
                <p>We secured Series A funding, boosting our mission to deliver trusted and eco-friendly cleaning work.</p>
            </div>
            <div className="about-timeline-item">
                <div className="about-timeline-year">2022</div>
                <h3>First hire</h3>
                <p>Our first employee joined, laying the foundation for a skilled, reliable, and trusted cleaning team.</p>
            </div>
            <div className="about-timeline-item">
                <div className="about-timeline-year">2020</div>
                <h3>Safety</h3>
                <p>EasyClean was founded with a clear vision to provide safe, reliable, eco-friendly cleaning services.</p>
            </div>
        </div>
    </div>

    {/* Offices Section */}
    <div className="about-offices-section">
        <div className="about-offices-container">
            <h2 className="about-offices-title">Visit Our Offices<br /><span className="about-offices-highlight">Around The Worldwide</span></h2>
            <div className="about-offices-layout">
                <div className="about-office-image">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" alt="Office location" />
                </div>
                <div className="about-office-card">
                    <div className="about-office-header">
                        <h3>Chisinau, Moldova</h3>
                        <p>You're always welcome to visit us at the EasyClean office, conveniently located in the heart of Chisinau.</p>
                    </div>
                    <div className="about-office-info">
                        <div className="about-office-info-item">
                            <div className="about-office-info-icon">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className="about-office-info-content">
                                <span className="about-office-info-label">Address</span>
                                <span className="about-office-info-value">Str. Stefan cel Mare 123, Chisinau, MD 2001</span>
                            </div>
                        </div>
                        <div className="about-office-info-item">
                            <div className="about-office-info-icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="about-office-info-content">
                                <span className="about-office-info-label">Phone</span>
                                <span className="about-office-info-value">+373 123 456 789</span>
                            </div>
                        </div>
                        <div className="about-office-info-item">
                            <div className="about-office-info-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="about-office-info-content">
                                <span className="about-office-info-label">Email</span>
                                <span className="about-office-info-value">chisinau@ascleaning.com</span>
                            </div>
                        </div>
                    </div>
                </div>
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
