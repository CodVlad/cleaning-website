import axios from "axios";
import { useEffect, useState } from "react";
import "./NewsList.css";
import Navbar from "./NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationTriangle, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const API_URL = "http://localhost:1337/api/news?populate=*";

function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
      if (response.data && response.data.data) {
        setNews(response.data.data);
      } else {
          setError("Incorrect API data");
      }
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Unable to load news. Please try again later.");
      } finally {
      setLoading(false);
      }
    };

    fetchNews();
}, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="news-container">
          <div className="loading-container">
            <FontAwesomeIcon icon={faSpinner} spin size="3x" style={{ color: "#FFD700" }} />
            <p style={{ marginTop: "20px", fontSize: "18px", color: "#666" }}>Loading news...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="news-container">
          <div className="error-container">
            <FontAwesomeIcon icon={faExclamationTriangle} size="3x" style={{ color: "#ff4444" }} />
            <h2 style={{ marginTop: "20px", color: "#333" }}>Error</h2>
            <p style={{ marginTop: "10px", fontSize: "18px", color: "#666" }}>{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="retry-btn"
              style={{
                marginTop: "20px",
                padding: "12px 30px",
                backgroundColor: "#FFD700",
                color: "black",
                border: "none",
                borderRadius: "20px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="news-container">
        <div className="news-header">
          <FontAwesomeIcon icon={faNewspaper} size="2x" style={{ color: "#FFD700", marginRight: "15px" }} />
          <h1 className="news-title">Recent News</h1>
        </div>
        <div className="news-grid">
          {news.length > 0 ? (
            news.map((article) => {
              const imageUrl = article.Image && article.Image[0] 
                ? `http://localhost:1337${article.Image[0].url}` 
                : null;
              const content = article.Content?.[0]?.children?.[0]?.text || "No content available.";
              
              return (
            <div key={article.id} className="news-card">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={article.Title || "Article image"} 
                      className="news-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="news-image-placeholder">
                      <FontAwesomeIcon icon={faNewspaper} size="3x" style={{ color: "#ccc" }} />
                    </div>
                  )}
                  <h2 className="news-card-title">{article.Title || "No title"}</h2>
                  <p className="news-content">{content}</p>
                </div>
              );
            })
          ) : (
            <div className="no-news">
              <FontAwesomeIcon icon={faNewspaper} size="4x" style={{ color: "#ccc", marginBottom: "20px" }} />
              <p style={{ fontSize: "18px", color: "#666" }}>No news available to display.</p>
            </div>
        )}
        </div>
      </div>
    </>
  );
}

export default NewsList;