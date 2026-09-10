import BookingCTA from "../components/BookingCTA";
import "./SouthAfrica.css";
import SEO from "../components/SEO";


function SouthAfrica(){


    const experiences = [


        {
            title:"Kruger Safari",
            text:
            "Discover one of Africa's most famous wildlife destinations and encounter the Big Five in their natural habitat.",
            image:
            "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=900&q=80"
        },



        {
            title:"Cape Town Adventures",
            text:
            "Experience dramatic mountains, coastal beauty, world-class scenery and unforgettable city experiences.",
            image:
            "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?auto=format&fit=crop&w=900&q=80"
        },



        {
            title:"Luxury Wilderness",
            text:
            "Combine comfort and nature through carefully selected lodges, private reserves and premium safari experiences.",
            image:
            "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80"
        }


    ];







    return(

        <>

<SEO
  title="South Africa Tours & Safaris | Joven Safaris"
  description="Explore unforgettable South Africa tours and safari experiences with Joven Safaris, from wildlife adventures and scenic destinations to luxury travel experiences."
  canonical="/destinations/south-africa"
/>



        {/* HERO */}


        <section className="south-hero">


            <div className="south-hero-image"></div>


            <div className="south-overlay"></div>



            <div className="south-hero-content">


                <span>
                    Destination
                </span>


                <h1>
                    South Africa
                </h1>


                <p>
                    A destination where wild landscapes,
                    incredible wildlife and unforgettable
                    adventures come together.
                </p>



            </div>



        </section>









        {/* INTRO */}



        <section className="south-intro">


            <div className="south-container">


                <h2>
                    Where Wildlife Meets Wonder
                </h2>



                <p>

                    Explore South Africa's diverse landscapes,
                    from legendary national parks to breathtaking
                    coastlines and vibrant cities.

                    Experience unforgettable wildlife encounters
                    and journeys designed around discovery.

                </p>


            </div>


        </section>









        {/* EXPERIENCES */}



        <section className="south-experiences">


            <div className="south-container">


                <h2>
                    South Africa Experiences
                </h2>




                <div className="south-grid">



                    {
                        experiences.map((experience)=>(


                            <div
                            key={experience.title}
                            className="south-card"
                            >


                                <div className="south-card-image">


                                    <img

                                    src={experience.image}

                                    alt={experience.title}

                                    />


                                </div>





                                <div className="south-card-content">


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









        {/* CTA */}


        <BookingCTA />





        </>

    )

}



export default SouthAfrica;