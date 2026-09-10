import "./MemoriesGallery.css";

function MemoriesGallery() {

const memories = [

    // ==========================================
    // IMAGE 1
    // ==========================================

    {
        type: "image",

        image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",

        alt:"African safari landscape",
    },


    // ==========================================
    // IMAGE 2
    // ==========================================

    {
        type: "image",

        image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80",

        alt:"Safari wildlife",
    },


    // ==========================================
    // IMAGE 3
    // ==========================================

    {
        type: "image",

        image:
        "https://res.cloudinary.com/qnyhrcim/image/upload/v1786318098/348285a6-3ae8-45d8-8af5-5b7c42f7f4f8_8BA12169-89C5-4D69-AA16-95A70C27836B_zff57n.jpg",

        alt:"Safari adventure",
    },


    // ==========================================
    // IMAGE 4
    // ==========================================

    {
        type: "image",

        image:
        "https://res.cloudinary.com/qnyhrcim/image/upload/v1786318123/6109e446-7077-4d60-975d-7b83caa83541_E3A37C46-EA83-4211-AAA3-3D3A06232112_o2fpuq.jpg",

        alt:"African wilderness",
    },


    // ==========================================
    // VIDEO 1
    // ==========================================

    {
        type: "video",

        video:
        "https://res.cloudinary.com/qnyhrcim/video/upload/v1789003604/WhatsApp_Video_2026-09-10_at_4.19.10_AM_2_ly9vr7.mp4",

        alt:"Safari experience video",
    },


    // ==========================================
    // IMAGE 5
    // ==========================================

    {
        type: "image",

        image:
        "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=900&q=80",

        alt:"Safari journey",
    },


    // ==========================================
    // VIDEO 2
    // ==========================================

    {
        type: "video",

        video:
        "https://res.cloudinary.com/qnyhrcim/video/upload/v1789003589/WhatsApp_Video_2026-09-10_at_4.19.10_AM_1_joze08.mp4",

        alt:"African travel experience",
    },


    // ==========================================
    // VIDEO 3
    // ==========================================

    {
        type: "video",

        video:
        "https://res.cloudinary.com/qnyhrcim/video/upload/v1789003556/WhatsApp_Video_2026-09-10_at_4.19.10_AM_ljhkin.mp4",

        alt:"Safari adventure",
    },


    // ==========================================
    // IMAGE 6
    // ==========================================

    {
        type: "image",

        image:
        "https://res.cloudinary.com/qnyhrcim/image/upload/v1786318056/0b794d1d-8b6e-456e-8838-494a042ec8a7_98427851-B9C5-405D-BD87-30013FEF1112_rac5th.jpg",

        alt:"Safari journey",
    },

];





return (

    <section
    id="memories"
    className="memories-section"
    >


        <div className="memories-container">


            {/* ======================================
                HEADER
            ======================================= */}

            <div className="memories-header">


                <span className="memories-tag">

                    Memories

                </span>


                <h2>

                    Moments That Stay

                    <span>

                        Forever

                    </span>

                </h2>


                <p>

                    A collection of unforgettable moments,
                    breathtaking landscapes and experiences
                    shared with travellers across Africa.

                </p>


            </div>





            {/* ======================================
                GALLERY
            ======================================= */}

            <div className="memories-grid">


                {memories.map((memory,index) => (


                    <div

                    key={index}

                    className={`
                        memory-card
                        ${
                            index === 0 || index === 3
                            ?
                            "memory-tall"
                            :
                            ""
                        }
                    `}

                    >


                        {/* IMAGE */}

                        {memory.type === "image" && (

                            <img

                            src={memory.image}

                            alt={memory.alt}

                            loading="lazy"

                            />

                        )}



                        {/* VIDEO */}

                        {memory.type === "video" && (

                            <video

                            src={memory.video}

                            autoPlay

                            muted

                            loop

                            playsInline

                            preload="metadata"

                            aria-label={memory.alt}

                            />

                        )}



                        <div className="memory-overlay"></div>


                    </div>


                ))}


            </div>


        </div>


    </section>

);


}

export default MemoriesGallery;
