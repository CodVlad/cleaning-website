import Footer from "./Footer";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Pret.css';
import PhotoHappySpaceSection from "./PhotoHappySpaceSection";

export default function Pret(){

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

    return (
        <>
            <NavBar />

            <div className="pricing-hero-section">
                <div className="pricing-hero-content">
                    <h1 className="pricing-hero-title">
                        Affordable, Customisable
                        <br />
                        <span className="pricing-hero-highlight">Pricing Designed</span>
                    </h1>
                </div>
            </div>

            <div className="pricing-cards-section">
                <div className="pricing-cards-container">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="pricing-plan-card">
                            <h3 className="pricing-plan-title">{plan.name}</h3>
                            <p className="pricing-plan-description">{plan.description}</p>
                            <div className="pricing-plan-price">
                                <span className="pricing-plan-currency">$</span>
                                <span className="pricing-plan-amount">{plan.pricePerSqm}</span>
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

            <PhotoHappySpaceSection />

            <Footer />
        </>
    );
}
