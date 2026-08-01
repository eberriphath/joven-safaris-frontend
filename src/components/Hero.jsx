import { Link } from "react-router-dom";


function Hero(){

    return(

        <section

        className="
        relative
        h-screen
        min-h-[700px]
        overflow-hidden
        flex
        items-center
        justify-center
        "

        >


            {/* BACKGROUND */}

            <div

            className="
            absolute
            inset-0
            bg-cover
            bg-center
            hero-zoom
            "

            style={{

                backgroundImage:

                `
                linear-gradient(
                rgba(26,18,8,.35),
                rgba(26,18,8,.85)
                ),
                url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5")
                `

            }}

            />







            {/* CONTENT */}

            <div

            className="
            relative
            z-10
            max-w-5xl
            px-6
            text-center
            text-white
            "

            >







                <div

                className="
                text-[#D4A940]
                uppercase
                tracking-[0.3em]
                text-xs
                font-semibold
                mb-5
                fade-up
                "

                >

                    KENYA · EAST AFRICA · DUBAI · SOUTH AFRICA

                </div>










                <h1

                className="
                fade-up
                text-5xl
                md:text-7xl
                font-serif
                leading-tight
                "

                >

                    Where The Wild Meets Purpose

                </h1>









                <p

                className="
                fade-up-delay
                mt-6
                max-w-2xl
                mx-auto
                text-white/80
                text-lg
                leading-relaxed
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
inline-flex
items-center
justify-center
bg-[#D4A940]
text-[#2C1810]
px-12
py-5
rounded-sm
uppercase
tracking-[0.22em]
text-sm
font-bold
shadow-[0_15px_35px_rgba(212,169,64,0.35)]
hover:bg-white
hover:-translate-y-1
hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)]
transition-all
duration-500
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








                    <Stat number="5" label="Years Experience"/>

                    <Stat number="100+" label="Safari Tours"/>

                    <Stat number="4" label="Destinations"/>

                    <Stat number="98%" label="Happy Guests"/>







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

<div className="text-center">


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