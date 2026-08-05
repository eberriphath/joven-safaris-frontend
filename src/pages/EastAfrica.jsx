import BookingCTA from "../components/BookingCTA";


function EastAfrica(){

    return(

        <>

        {/* HERO */}

        <section
        className="
        relative
        h-screen
        overflow-hidden
        "
        >

            <div
            className="
            absolute
            inset-0
            bg-cover
            bg-center
            "
            style={{
                backgroundImage:
                "url('https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1800&q=80')"
            }}
            />



            <div
            className="
            absolute
            inset-0
            bg-black/50
            "
            />



            <div
            className="
            relative
            z-10
            h-full
            flex
            items-center
            justify-center
            text-center
            px-6
            "
            >

                <div>


                    <span
                    className="
                    uppercase
                    tracking-[0.35em]
                    text-[#D4A940]
                    font-semibold
                    "
                    >
                        Destination
                    </span>




                    <h1
                    className="
                    mt-6
                    text-white
                    font-serif
                    text-5xl
                    md:text-7xl
                    "
                    >
                        East Africa
                    </h1>




                    <p
                    className="
                    mt-6
                    max-w-2xl
                    mx-auto
                    text-lg
                    text-white/85
                    leading-relaxed
                    "
                    >
                        A journey across borders,
                        cultures and landscapes where
                        Africa's wilderness comes alive.
                    </p>


                </div>


            </div>


        </section>





        {/* INTRO */}

        <section
        className="
        bg-[#FAF6EE]
        py-24
        px-6
        "
        >

            <div
            className="
            max-w-5xl
            mx-auto
            text-center
            "
            >

                <h2
                className="
                font-serif
                text-4xl
                md:text-5xl
                text-[#2C1810]
                "
                >
                    Beyond One Country
                </h2>



                <p
                className="
                mt-8
                text-[#6B5744]
                text-lg
                leading-relaxed
                "
                >

                    Explore the incredible diversity of East Africa
                    through multi-country adventures.

                    From Kenya's savannahs to Tanzania's plains,
                    Uganda's forests and Rwanda's mountains,
                    experience a region filled with wildlife,
                    culture and natural beauty.

                </p>


            </div>


        </section>





        {/* EXPERIENCES */}

        <section
        className="
        py-24
        px-6
        bg-white
        "
        >

            <div
            className="
            max-w-6xl
            mx-auto
            "
            >


                <h2
                className="
                text-center
                font-serif
                text-4xl
                text-[#2C1810]
                mb-12
                "
                >
                    East Africa Experiences
                </h2>




                <div
                className="
                grid
                md:grid-cols-3
                gap-8
                "
                >


                    {
                    [

                    {
                    title:"Tanzania Safaris",
                    text:"Discover Serengeti landscapes, Ngorongoro Crater and unforgettable wildlife encounters."
                    },


                    {
                    title:"Uganda Adventures",
                    text:"Experience lush forests, mountain landscapes and incredible primate encounters."
                    },


                    {
                    title:"Rwanda Exploration",
                    text:"Explore Rwanda's natural beauty, culture and iconic mountain gorilla experiences."
                    }


                    ].map((experience)=>(


                        <div
                        key={experience.title}
                        className="
                        bg-[#FAF6EE]
                        p-8
                        rounded-xl
                        shadow-md
                        "
                        >

                            <h3
                            className="
                            font-serif
                            text-2xl
                            text-[#2C1810]
                            "
                            >
                                {experience.title}
                            </h3>


                            <p
                            className="
                            mt-4
                            text-[#6B5744]
                            leading-relaxed
                            "
                            >
                                {experience.text}
                            </p>


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