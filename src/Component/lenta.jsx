import Marquee from "react-fast-marquee";
import "./Project.css";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";
import Logo5 from "../assets/logo5.png";
import Logo6 from "../assets/logo6.png";
import Logo7 from "../assets/logo7.png";
import Logo8 from "../assets/logo8.png";
import Logo9 from "../assets/logo9.png";
import Logo10 from "../assets/logo10.png";
import Logo11 from "../assets/logo11.png";
import Logo12 from "../assets/logo12.png";
import Logo13 from "../assets/logo13.png";
import Logo14 from "../assets/logo14.png";
import Logo15 from "../assets/logo15.png";

const partners = [
  { id: 1, img: Logo1, alt: "Partner 1" },
  { id: 2, img: Logo2, alt: "Partner 2" },
  { id: 3, img: Logo3, alt: "Partner 3" },
  { id: 4, img: Logo4, alt: "Partner 4" },
  { id: 5, img: Logo5, alt: "Partner 5" },
  { id: 6, img: Logo6, alt: "Partner 6" },
  { id: 7, img: Logo7, alt: "Partner 7" },
  { id: 8, img: Logo8, alt: "Partner 8" },
  { id: 9, img: Logo9, alt: "Partner 9" },
  { id: 10, img: Logo10, alt: "Partner 10" },
  { id: 11, img: Logo11, alt: "Partner 11" },
  { id: 12, img: Logo12, alt: "Partner 12" },
  { id: 13, img: Logo13, alt: "Partner 13" },
  { id: 14, img: Logo14, alt: "Partner 14" },
  { id: 15, img: Logo15, alt: "Partner 15" }
];

const PartnerMarquee = () => {
  return (
    <div className="partners-section-about">
      
      <div className="partners-container-about">
        <Marquee 
          speed={35} 
          pauseOnHover={true} 
          autoFill={true}
          gradient={true}
          gradientColor="248, 249, 250"
          gradientWidth={120}
        >
      {partners.map((partner) => (
            <div key={partner.id} className="partner-logo-wrapper-about">
        <img
          src={partner.img}
          alt={partner.alt}
                className="partner-logo-about"
        />
            </div>
      ))}
    </Marquee>
      </div>
    </div>
  );
};

export default PartnerMarquee;

