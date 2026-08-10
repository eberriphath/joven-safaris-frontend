import { Link } from "react-router-dom";


function Hero(){

    return(

        <section className="hero">


            {/* BACKGROUND */}

            <div className="hero-background">

                <div className="hero-overlay"></div>

            </div>





            {/* CONTENT */}

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







                {/* CTA BUTTON */}

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






            {/* SCROLL INDICATOR */}

            <div className="scroll-indicator">

                SCROLL ↓

            </div>





        </section>

    );

}







function Stat({number,label}){


    return(

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