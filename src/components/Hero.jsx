import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const heroMedia = [
  {
    type: "video",
    src: "YOUR_CLOUDINARY_VIDEO_URL_1",
  },
  {
    type: "video",
    src: "YOUR_CLOUDINARY_VIDEO_URL_2",
  },
  {
    type: "image",
    src: "YOUR_CLOUDINARY_IMAGE_URL_1",
  },
  {
    type: "video",
    src: "YOUR_CLOUDINARY_VIDEO_URL_3",
  },
  {
    type: "image",
    src: "YOUR_CLOUDINARY_IMAGE_URL_2",
  },
];

function Hero() {
  const [currentMedia, setCurrentMedia] = useState(0);

  const media = heroMedia[currentMedia];

  useEffect(() => {
    if (media.type === "image") {
      const timer = setTimeout(() => {
        setCurrentMedia(
          (prev) => (prev + 1) % heroMedia.length
        );
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentMedia, media.type]);

  const handleVideoEnded = () => {
    setCurrentMedia(
      (prev) => (prev + 1) % heroMedia.length
    );
  };

  return (
    <section className="hero">

      {/* =========================
          BACKGROUND MEDIA
      ========================= */}

      <div className="hero-background">

        {media.type === "video" ? (

          <video
            key={media.src}
            className="hero-media"
            src={media.src}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
          />

        ) : (

          <img
            key={media.src}
            className="hero-media"
            src={media.src}
            alt=""
          />

        )}

        <div className="hero-overlay"></div>

      </div>


      {/* =========================
          CONTENT
      ========================= */}

      <div className="hero-content">

        <span className="hero-location">
          KENYA · EAST AFRICA · DUBAI · SOUTH AFRICA
        </span>


        <h1>
          Where The Wild Meets <em>Purpose</em>
        </h1>


        <p>
          Extraordinary safari journeys rooted in
          sustainability, community, and unforgettable
          African experiences.
        </p>


        {/* CTA */}

        <Link
          to="/#destinations"
          className="hero-button"
        >
          Explore Destinations

          <span className="button-arrow">
            →
          </span>
        </Link>


        {/* TRUST STATS */}

        <div className="hero-stats">

          <Stat
            number="4"
            label="Years Experience"
          />

          <Stat
            number="100+"
            label="Safari Tours"
          />

          <Stat
            number="30+"
            label="Destinations"
          />

          <Stat
            number="98%"
            label="Happy Guests"
          />

        </div>

      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================= */}

      <div className="scroll-indicator">
        SCROLL ↓
      </div>

    </section>
  );
}


function Stat({ number, label }) {
  return (
    <div className="hero-stat">

      <h3>
        {number}
      </h3>

      <span>
        {label}
      </span>

    </div>
  );
}


export default Hero;