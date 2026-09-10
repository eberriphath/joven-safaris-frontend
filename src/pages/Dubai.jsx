import BookingCTA from "../components/BookingCTA";
import "./Dubai.css";
import SEO from "../components/SEO";


function Dubai(){


    const highlights = [

        {
            title:"Luxury Desert Safaris",
            text:
            "Experience golden dunes, sunset drives, traditional Arabian camps and unforgettable desert adventures."
        },


        {
            title:"Modern Arabian Culture",
            text:
            "Discover Dubai's heritage, architecture, cuisine and the traditions that shaped this global destination."
        },


        {
            title:"Premium Experiences",
            text:
            "From luxury stays to exclusive adventures, Dubai offers comfort, excitement and unforgettable memories."
        }

    ];







    const experiences = [

        {
            title:"Desert Safari Adventure",

            image:
            "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80",

            text:
            "Ride across golden dunes, enjoy breathtaking sunsets and experience authentic Arabian hospitality."
        },



        {
            title:"Dubai City Luxury",

            image:
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80",

            text:
            "Explore Dubai's iconic skyline, luxury shopping and world-class attractions."
        },



        {
            title:"Cultural Discovery",

            image:
            "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=900&q=80",

            text:
            "Discover traditional markets, heritage sites and the history behind modern Dubai."
        }

    ];







    return(

        <>


<SEO
  title="Dubai Travel & Tours | Joven Safaris"
  description="Discover luxury Dubai travel and tours with Joven Safaris, from unforgettable city experiences to personalized trips and premium travel services."
  canonical="/destinations/dubai"
/>


        {/* =========================
            HERO
        ========================= */}


        <section className="dubai-hero">


            <div className="dubai-hero-image"></div>


            <div className="dubai-overlay"></div>




            <div className="dubai-hero-content">


                <span>
                    Destination
                </span>



                <h1>
                    Dubai
                </h1>




                <p>

                    Experience the perfect blend of Arabian heritage,
                    luxury and adventure in one of the world's most
                    iconic destinations.

                </p>



            </div>


        </section>









        {/* =========================
            INTRODUCTION
        ========================= */}


        <section className="dubai-intro">


            <div className="dubai-container">


                <h2>
                    Arabian Luxury Meets Adventure
                </h2>



                <p>

                    Dubai is more than towering skyscrapers and
                    modern luxury. Discover breathtaking desert
                    landscapes, rich cultural experiences and
                    unforgettable adventures designed around your
                    comfort.

                </p>



            </div>


        </section>









        {/* =========================
            HIGHLIGHTS
        ========================= */}



        <section className="dubai-highlights">


            <div className="dubai-container">


                <h2>
                    Why Visit Dubai?
                </h2>





                <div className="dubai-highlight-grid">


                    {

                    highlights.map((item)=>(


                        <div

                        key={item.title}

                        className="dubai-card"

                        >



                            <h3>

                                {item.title}

                            </h3>




                            <p>

                                {item.text}

                            </p>



                        </div>


                    ))

                    }



                </div>



            </div>


        </section>









        {/* =========================
            EXPERIENCES
        ========================= */}



        <section className="dubai-experiences">


            <div className="dubai-container">



                <h2>

                    Dubai Experiences

                </h2>





                <div className="experience-grid">


                    {

                    experiences.map((experience)=>(


                        <div

                        key={experience.title}

                        className="experience-card"

                        >



                            <div className="experience-image">


                                <img

                                src={experience.image}

                                alt={experience.title}

                                />



                            </div>







                            <div className="experience-content">



                                <h3>

                                    {experience.title}

                                </h3>




                                <p>

                                    {experience.text}

                                </p>



                            </div>




                        </div>



                    ))

                    }



                </div>




            </div>



        </section>









        {/* =========================
            BEST TIME TO VISIT
        ========================= */}



        <section className="dubai-season">


            <div className="dubai-container">



                <div className="season-card">


                    <h2>

                        Best Time To Visit Dubai

                    </h2>




                    <p>

                        The best time to experience Dubai is between
                        October and April when temperatures are pleasant
                        for desert adventures, sightseeing and outdoor
                        activities.

                    </p>





                    <div className="season-grid">



                        <div>


                            <h3>
                                October - April
                            </h3>


                            <span>
                                Ideal weather for outdoor adventures
                            </span>


                        </div>







                        <div>


                            <h3>
                                May - September
                            </h3>


                            <span>
                                Hot season with luxury indoor experiences
                            </span>


                        </div>



                    </div>




                </div>



            </div>


        </section>









        {/* =========================
            CTA
        ========================= */}


        <BookingCTA />







        </>

    )

}



export default Dubai;