import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import image from "../assets/image.png";
import imageAbout from "../assets/imageAbout.png";
import { PHOTO_HAPPY_SPACE_URLS } from "./photoHappySpaceData";
import "./PhotoHappySpaceSection.css";

export default function PhotoHappySpaceSection() {
  const photoFallbacks = PHOTO_HAPPY_SPACE_URLS.map(
    (_, i) => (i % 2 === 0 ? image : imageAbout)
  );
  const photoPositions = PHOTO_HAPPY_SPACE_URLS.map((_, index) => {
    const angle = (index / PHOTO_HAPPY_SPACE_URLS.length) * 2 * Math.PI;
    const radius = 550;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  });

  return (
    <div className="photo-animation-section">
      <div className="photo-grid-container">
        <div className="photo-scatter-container">
          {PHOTO_HAPPY_SPACE_URLS.map((src, index) => (
            <div
              key={`photo-${index}`}
              className="photo-scatter-item"
              style={{
                "--photo-x": `${photoPositions[index].x}px`,
                "--photo-y": `${photoPositions[index].y}px`,
              }}
            >
              <img
                src={src}
                alt={`Cleaning ${index + 1}`}
                onError={(e) => {
                  const el = e.currentTarget;
                  if (el.dataset.fallbackApplied) return;
                  el.dataset.fallbackApplied = "1";
                  el.src = photoFallbacks[index];
                }}
              />
            </div>
          ))}
          <div className="photo-center-text">
            <h1>
              Your Clean Happy{" "}
              <span className="text-highlight">Space Is Just</span> One Click Away
            </h1>
            <Link to="/contacte" className="photo-quote-btn">
              Get a Quote
              <FontAwesomeIcon icon={faArrowRight} className="photo-quote-btn-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
