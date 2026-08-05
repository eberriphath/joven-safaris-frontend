import BookingCTA from "../components/BookingCTA";


function SouthAfrica(){

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
                "url('https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1800&q=80')"
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
                        South Africa
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
                        A destination where wild landscapes,
                        incredible wildlife and unforgettable
                        adventures come together.
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
                    Where Wildlife Meets Wonder
                </h2>



                <p
                className="
                mt-8
                text-[#6B5744]
                text-lg
                leading-relaxed
                "
                >

                    Explore South Africa's diverse landscapes,
                    from legendary national parks to breathtaking
                    coastlines and vibrant cities.

                    Experience unforgettable wildlife encounters
                    and journeys designed around discovery.

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
                    South Africa Experiences
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
                    title:"Kruger Safari",
                    text:"Discover one of Africa's most famous wildlife destinations and encounter the Big Five."
                    },


                    {
                    title:"Cape Town",
                    text:"Experience dramatic mountains, coastal beauty and unforgettable city adventures."
                    },


                    {
                    title:"Luxury Wilderness",
                    text:"Combine comfort and nature through carefully selected safari experiences."
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


export default SouthAfrica;