import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import "./NewsList.css";
import Navbar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faExclamationTriangle,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const RAW_STRAPI_URL = (import.meta.env.VITE_STRAPI_URL || "").replace(/\/$/, "");
const TOKEN = import.meta.env.VITE_STRAPI_TOKEN;

/** In dev, requests to localhost:1337 are proxied via Vite (see vite.config.js) to avoid CORS. */
const USE_STRAPI_PROXY =
  import.meta.env.DEV &&
  (RAW_STRAPI_URL === "" ||
    /localhost:1337|127\.0\.0\.1:1337/.test(RAW_STRAPI_URL));

const STRAPI_BASE = USE_STRAPI_PROXY ? "" : RAW_STRAPI_URL;

// Media field key from Strapi News schema (attribute with type: "media"). Change if your schema uses another key.
const REAL_MEDIA_KEY = "Image";

function resolveStrapiMediaUrl(url) {
  if (!url) return null;
  if (url.startsWith("http")) {
    if (USE_STRAPI_PROXY) {
      try {
        const u = new URL(url);
        return `${u.pathname}${u.search}`;
      } catch {
        return url;
      }
    }
    return url;
  }
  return `${STRAPI_BASE}${url}`;
}

function NewsList() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = useCallback(async () => {
    if (!RAW_STRAPI_URL || !TOKEN) {
      setError("Missing VITE_STRAPI_URL or VITE_STRAPI_TOKEN in environment.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const API_URL = `${STRAPI_BASE}/api/news?populate=${REAL_MEDIA_KEY}`;
      const response = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });

      const data = response?.data?.data;
      if (Array.isArray(data)) {
        setNews(data);
      } else {
        setError("Incorrect API data format.");
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      const isNetwork =
        err?.code === "ERR_NETWORK" || err?.message === "Network Error";
      const message =
        err?.response?.status === 401
          ? "Invalid API token."
          : isNetwork
            ? "Cannot reach Strapi. Start the Strapi server (e.g. port 1337) or check your connection."
            : err?.response?.data?.error?.message ||
              "Unable to load news. Please try again later.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleRetry = () => {
    setError(null);
    fetchNews();
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="news-page">
          <div className="news-loading">
            <FontAwesomeIcon icon={faSpinner} spin className="news-loading-icon" />
            <p className="news-loading-text">Loading news...</p>
          </div>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <main className="news-page">
          <div className="news-error">
            <FontAwesomeIcon icon={faExclamationTriangle} className="news-error-icon" />
            <h2 className="news-error-title">Something went wrong</h2>
            <p className="news-error-message">{error}</p>
            <button type="button" onClick={handleRetry} className="news-retry-btn">
              Try again
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="news-page">
        <div className="news-title-section">
          <h1 className="news-title-text">
            Our <span className="news-title-highlight">Blog</span> &amp; Recent News
          </h1>
        </div>

        <section className="news-cards-section" aria-label="News articles">
          <div className="news-cards-container">
            {news.length > 0 ? (
              <div className="news-grid">
                {news.map((article) => {
                  const title = article.Title ?? "No title";
                  const content = article.Content?.[0]?.children?.[0]?.text || "";
                  const displayContent = content.trim() || "No content available.";

                  const imgField = article[REAL_MEDIA_KEY];
                  const media = Array.isArray(imgField?.data) ? imgField.data[0] : imgField?.data;
                  const imageUrl = resolveStrapiMediaUrl(media?.attributes?.url);

                  return (
                    <article key={article?.id} className="news-card-albadoe">
                      <div className="news-card-albadoe-image">
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt=""
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="news-card-albadoe-placeholder">
                            <FontAwesomeIcon icon={faNewspaper} />
                          </div>
                        )}
                      </div>
                      <div className="news-card-albadoe-category">Article</div>
                      <h2 className="news-card-albadoe-title">{title}</h2>
                      <p className="news-card-albadoe-description">{displayContent}</p>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="news-empty">
                <FontAwesomeIcon icon={faNewspaper} className="news-empty-icon" />
                <h2 className="news-empty-title">No articles yet</h2>
                <p className="news-empty-text">No news available to display. Check back later.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default NewsList;
