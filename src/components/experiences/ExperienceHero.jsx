import { useEffect, useState } from "react";
import "./ExperienceHero.css";

// ==========================================
// CLOUDINARY VIDEO PLACEHOLDERS
// ==========================================

const experienceVideos = [

"CLOUDINARY_VIDEO_URL_1",

"CLOUDINARY_VIDEO_URL_2",

"CLOUDINARY_VIDEO_URL_3",

"CLOUDINARY_VIDEO_URL_4",

"CLOUDINARY_VIDEO_URL_5"

];

function ExperienceHero() {

const [currentVideo, setCurrentVideo] = useState(0);


// ==========================================
// CHANGE VIDEO
// ==========================================

useEffect(() => {

    const interval = setInterval(() => {

        setCurrentVideo((current) =>

            (current + 1) % experienceVideos.length

        );

    }, 8000);


    return () => {

        clearInterval(interval);

    };

}, []);


return (

    <section className="experience-hero">


        {/* =========================================
            HERO VIDEOS
        ========================================== */}

        {experienceVideos.map((video, index) => (

            <video

                key={index}

                className={`
                    experience-hero-video
                    ${
                        index === currentVideo
                            ? "active"
                            : ""
                    }
                `}

                autoPlay
                muted
                loop
                playsInline

            >

                <source
                    src={video}
                    type="video/mp4"
                />

            </video>

        ))}


        {/* =========================================
            HERO OVERLAY
        ========================================== */}

        <div className="experience-hero-overlay"></div>


        {/* =========================================
            HERO CONTENT
        ========================================== */}

        <div className="experience-hero-content">


            <span className="experience-tag">

                Experiences

            </span>


            <h1>

                Every Journey

                <br />

                Tells A Story

            </h1>


            <p>

                Not just safaris.

                <br />

                Moments that stay with you forever.

            </p>


            <a
                href="#story"
                className="experience-scroll"
            >

                <span>

                    Discover the stories

                </span>


                <strong>

                    ↓

                </strong>

            </a>


        </div>


    </section>

);

}

export default ExperienceHero;
