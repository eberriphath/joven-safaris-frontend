import { Link } from "react-router-dom";


function Hero(){

    return(

        <section className="hero">


            {/* BACKGROUND */}

            <div className="hero-bg hero-zoom"></div>







            {/* CONTENT */}

            <div
            className="
            hero-content
            "
            >








                <div
                className="
                hero-badge
                fade-up
                mb-5
                "
                >

                    KENYA · EAST AFRICA · DUBAI · SOUTH AFRICA

                </div>









                <h1
                className="
                fade-up
                "
                >

                    Where The Wild Meets Purpose

                </h1>









                <p
                className="
                fade-up-delay
                "
                >

                    Extraordinary safari journeys rooted in sustainability,
                    community, and unforgettable experiences.

                </p>












                {/* BUTTON */}

                <div

                className="
                fade-up-delay2
                mt-8
                mb-14
                "

                >



                    <a

                    href="#destinations"

                    className="
                    primary-btn
                    inline-flex
                    items-center
                    justify-center
                    hover:-translate-y-1
                    hover:shadow-xl
                    transition-all
                    duration-300
                    "

                    >

                        Explore Destinations

                    </a>



                </div>













                {/* TRUST STATS */}

                <div

                className="
                fade-up-delay2
                grid
                grid-cols-2
                md:grid-cols-4
                gap-5
                md:gap-8
                max-w-4xl
                mx-auto
                border-t
                border-white/20
                pt-6
                "

                >








                    <Stat

                    number="5"

                    label="Years Experience"

                    />







                    <Stat

                    number="100+"

                    label="Safari Tours"

                    />








                    <Stat

                    number="4"

                    label="Destinations"

                    />








                    <Stat

                    number="98%"

                    label="Happy Guests"

                    />








                </div>









            </div>








        </section>


    )

}









function Stat({

    number,

    label

}){


    return(

        <div

        className="
        text-center
        "

        >




            <h3

            className="
            text-xl
            md:text-2xl
            font-serif
            text-[#D4A940]
            "

            >

                {number}

            </h3>







            <p

            className="
            text-white/70
            uppercase
            tracking-[0.15em]
            text-[9px]
            md:text-[10px]
            mt-1
            "

            >

                {label}

            </p>







        </div>

    )


}






export default Hero;