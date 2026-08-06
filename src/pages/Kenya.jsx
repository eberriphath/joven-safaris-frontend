import BookingCTA from "../components/BookingCTA";
import "./Kenya.css";


function Kenya(){


    const experiences = [

        {
            title:"Maasai Mara Migration",
            text:
            "Witness one of nature's greatest spectacles with endless savannahs, lions, elephants and the famous Great Migration.",
            image:
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80"
        },


        {
            title:"Amboseli Elephants",
            text:
            "Experience breathtaking views of Mount Kilimanjaro while encountering some of Africa's largest elephant herds.",
            image:
            "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=80"
        },


        {
            title:"Tsavo Wilderness",
            text:
            "Explore one of Kenya's largest wilderness areas, famous for dramatic landscapes and incredible wildlife.",
            image:
            "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80"
        }

    ];






    return(

        <>





        {/* HERO */}


        <section className="kenya-hero">


            <div className="kenya-hero-image"></div>


            <div className="kenya-overlay"></div>




            <div className="kenya-hero-content">


                <span>
                    Destination
                </span>



                <h1>
                    Kenya
                </h1>



                <p>
                    The birthplace of the safari.
                    Discover endless landscapes,
                    incredible wildlife and unforgettable
                    African adventures.
                </p>



            </div>


        </section>









        {/* INTRO */}


        <section className="kenya-intro">


            <div className="kenya-container">


                <h2>
                    Experience Kenya's Wild Heart
                </h2>



                <p>

                    From the legendary Maasai Mara
                    to the dramatic landscapes of Amboseli
                    and Tsavo, Kenya offers some of the
                    world's most iconic safari experiences.

                </p>


            </div>


        </section>









        {/* EXPERIENCES */}



        <section className="kenya-experiences">


            <div className="kenya-container">


                <h2>
                    Kenya Experiences
                </h2>




                <div className="kenya-grid">



                    {
                        experiences.map((experience)=>(


                            <div
                            key={experience.title}
                            className="kenya-card"
                            >



                                <div className="kenya-card-image">


                                    <img

                                    src={experience.image}

                                    alt={experience.title}

                                    />


                                </div>







                                <div className="kenya-card-content">


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



export default Kenya;