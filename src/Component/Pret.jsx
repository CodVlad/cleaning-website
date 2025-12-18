import Footer from "./Footer";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Pret.css';

export default function Pret(){

    // Photo images around text (same as HomePage)
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
        const radius = 550;
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius
        };
    });

    // Pricing data - Real services with price per square meter
    const pricingPlans = [
        {
            name: "General Cleaning",
            pricePerSqm: 15,
            description: "Comprehensive cleaning services for all types of spaces",
            features: [
                "Dusting and vacuuming",
                "Bathroom cleaning",
                "Kitchen cleaning",
                "Trash removal"
            ]
        },
        {
            name: "Window and Facade Cleaning",
            pricePerSqm: 25,
            description: "Professional window and facade cleaning",
            features: [
                "Interior window cleaning",
                "Exterior window cleaning",
                "Facade cleaning",
                "Frame cleaning"
            ]
        },
        {
            name: "Chemical Cleaning",
            pricePerSqm: 35,
            description: "Deep chemical cleaning for furniture and carpets",
            features: [
                "Furniture cleaning",
                "Carpet deep cleaning",
                "Stain removal",
                "Odor elimination"
            ]
        },
        {
            name: "Post-Renovation Cleaning",
            pricePerSqm: 30,
            description: "Thorough cleaning after renovation",
            features: [
                "Dust removal",
                "Debris cleanup",
                "Construction residue removal",
                "Final polish"
            ]
        },
        {
            name: "Floor and Carpet Cleaning",
            pricePerSqm: 20,
            description: "Professional floor and carpet cleaning",
            features: [
                "Hard floor cleaning",
                "Carpet deep cleaning",
                "Safe for pets and children",
                "Eco-friendly products"
            ]
        },
        {
            name: "Ozonization",
            pricePerSqm: 40,
            description: "Advanced ozonization for disinfection",
            features: [
                "Complete disinfection",
                "Odor elimination",
                "Air purification",
                "Safe sanitization"
            ]
        }
    ];

    const faqData = [
        {
            question: "What types of services do you offer?",
            answer: "We provide a wide range of cleaning solutions, including restroom sanitization, appliance cleaning, floor cleaning, eco-friendly cleaning, window cleaning, and commercial cleaning — ensuring your home or business stays spotless and hygienic."
        },
        {
            question: "How much does a cleaning service cost per hour?",
            answer: "Our pricing depends on the size of your space and the type of service you need. We offer transparent, affordable hourly rates with no hidden charges. You can also request a free quote to find the best package for your budget."
        },
        {
            question: "Do I need to be home during the cleaning?",
            answer: "No, you don't need to be home while we clean. Our team is fully trained, trustworthy, and insured. You can confidently leave us to handle everything and return to a fresh, clean environment."
        },
        {
            question: "Are your cleaning products safe and eco-friendly?",
            answer: "Yes, absolutely! We use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment — ensuring a clean home without harmful chemicals."
        },
        {
            question: "How can I book a cleaning service?",
            answer: "Booking is simple! You can schedule your cleaning online, call us directly, or send an email. Choose a date and time that works best for you, and we'll handle the rest."
        }
    ];

    return<>
    <NavBar/>
    
    {/* Hero Section */}
    <div className="pricing-hero-section">
        <div className="pricing-hero-content">
            <h1 className="pricing-hero-title">Affordable, Customisable<br /><span className="pricing-hero-highlight">Pricing Designed</span></h1>
        </div>
    </div>

    {/* Pricing Cards Section */}
    <div className="pricing-cards-section">
        <div className="pricing-cards-container">
            {pricingPlans.map((plan, index) => (
                <div key={index} className="pricing-plan-card">
                    <h3 className="pricing-plan-title">{plan.name}</h3>
                    <p className="pricing-plan-description">{plan.description}</p>
                    <div className="pricing-plan-price">
                        <span className="pricing-plan-currency">$</span>
                        <span className="pricing-plan-amount">
                            {plan.pricePerSqm}
                        </span>
                        <span className="pricing-plan-period">/m²</span>
                    </div>
                    <Link to="/contacte" className="pricing-plan-btn">
                        Try for free
                    </Link>
                    <div className="pricing-plan-features">
                        <div className="pricing-plan-features-title">Core Feature</div>
                        {plan.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="pricing-plan-feature-item">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                <span>{feature}</span>
                </div>
                        ))}
            </div>
                </div>
            ))}
                </div>
            </div>

    {/* FAQ Section */}
    <div className="pricing-faq-section">
        <div className="pricing-faq-container">
            <h2 className="pricing-faq-title">FAQ Everything You Need to Know</h2>
            <div className="pricing-faq-list">
                {faqData.map((faq, index) => (
                    <div key={index} className="pricing-faq-item">
                        <h3 className="pricing-faq-question">{faq.question}</h3>
                        <p className="pricing-faq-answer">{faq.answer}</p>
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
