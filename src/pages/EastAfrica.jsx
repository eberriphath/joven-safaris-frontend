import BookingCTA from "../components/BookingCTA";
import "./EastAfrica.css";


function EastAfrica(){


    const experiences = [

        {
            title:"Kenya Safaris",
            text:
            "Experience the Maasai Mara, Amboseli landscapes and unforgettable wildlife encounters.",
            image:
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80"
        },


        {
            title:"Tanzania Adventures",
            text:
            "Discover Serengeti migrations, Ngorongoro Crater and some of Africa's greatest wilderness.",
            image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80"
        },


        {
            title:"Uganda & Rwanda",
            text:
            "Explore tropical forests, mountain landscapes and incredible primate experiences.",
            image:
            "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80"
        }


    ];






    return(

        <>


        {/* HERO */}


        <section className="east-hero">


            <div className="east-hero-image"></div>


            <div className="east-overlay"></div>



            <div className="east-hero-content">


                <span>
                    Destination
                </span>


                <h1>
                    East Africa
                </h1>



                <p>

                    A journey across borders,
                    cultures and landscapes where
                    Africa's wilderness comes alive.

                </p>


            </div>


        </section>









        {/* INTRO */}



        <section className="east-intro">


            <div className="east-container">


                <h2>
                    Beyond One Country
                </h2>



                <p>

                    Explore the incredible diversity of East Africa
                    through multi-country adventures.

                    From Kenya's endless savannahs to Tanzania's
                    legendary plains, Uganda's forests and Rwanda's
                    mountains, experience a region filled with wildlife,
                    culture and natural beauty.

                </p>



            </div>


        </section>









        {/* EXPERIENCES */}



        <section className="east-experiences">


            <div className="east-container">


                <h2>
                    East Africa Experiences
                </h2>




                <div className="east-grid">



                {
                    experiences.map((item)=>(


                        <div
                        className="east-card"
                        key={item.title}
                        >



                            <img

                            src={item.image}

                            alt={item.title}

                            />



                            <div className="east-card-overlay"></div>





                            <div className="east-card-content">


                                <h3>
                                    {item.title}
                                </h3>


                                <p>
                                    {item.text}
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



export default EastAfrica;