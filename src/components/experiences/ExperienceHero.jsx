import { useEffect, useState } from "react";
import "./ExperienceHero.css";

// ==========================================
// CLOUDINARY VIDEO PLACEHOLDERS
// ==========================================

const experienceVideos = [

"https://res.cloudinary.com/qnyhrcim/video/upload/v1789003556/WhatsApp_Video_2026-09-10_at_4.19.10_AM_ljhkin.mp4",

"https://res.cloudinary.com/qnyhrcim/video/upload/v1789003589/WhatsApp_Video_2026-09-10_at_4.19.10_AM_1_joze08.mp4",

"https://res.cloudinary.com/qnyhrcim/video/upload/v1789003604/WhatsApp_Video_2026-09-10_at_4.19.10_AM_2_ly9vr7.mp4",

"",

""

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
