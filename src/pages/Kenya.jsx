import BookingCTA from "../components/BookingCTA";


function Kenya(){

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
                "url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80')"
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
                        Kenya
                    </h1>


                    <p
                    className="
                    mt-6
                    max-w-2xl
                    text-white/80
                    text-lg
                    mx-auto
                    "
                    >
                        The birthplace of the safari.
                        Discover endless landscapes,
                        incredible wildlife and unforgettable
                        African adventures.
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
                    Experience Kenya's Wild Heart
                </h2>


                <p
                className="
                mt-8
                text-[#6B5744]
                text-lg
                leading-relaxed
                "
                >

                From the legendary Maasai Mara
                to the dramatic landscapes of Amboseli
                and Tsavo, Kenya offers some of the
                world's most iconic safari experiences.

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
                font-serif
                text-4xl
                text-[#2C1810]
                mb-12
                text-center
                "
                >
                    Kenya Experiences
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
                        "Maasai Mara Migration",
                        "Amboseli Elephants",
                        "Tsavo Wilderness"

                    ].map((item)=>(
                        
                        <div
                        key={item}
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
                                {item}
                            </h3>


                            <p
                            className="
                            mt-4
                            text-[#6B5744]
                            "
                            >
                                Explore one of Kenya's most
                                unforgettable safari experiences.
                            </p>


                        </div>


                    ))

                    }


                </div>


            </div>


        </section>



        <BookingCTA />


        </>

    )

}


export default Kenya;