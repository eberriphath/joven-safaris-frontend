import { Link } from "react-router-dom";


function BookingCTA(){

    return (

        <section
            id="book"
            className="
            w-full
            bg-[#FAF6EE]
            py-32
            "
        >

            <div
                className="
                w-full
                max-w-8xl
                mx-auto
                flex
                flex-col
                items-center
                text-center
                gap-8
                px-6
                md:px-8
                lg:px-0
                "
            >


                {/* TAG */}
                <div
                    className="
                    text-[#C4873A]
                    uppercase
                    tracking-[0.35em]
                    text-lg
                    font-semibold
                    "
                >
                    Start Your Journey
                </div>



                {/* TITLE */}
                <h2
                    className="
                    w-full
                    max-w-4xl
                    text-4xl
                    md:text-5xl
                    lg:text-6xl
                    font-serif
                    font-extrabold
                    text-[#111111]
                    leading-tight
                    text-center
                    "
                >
                    Ready to{" "}
                    
                    <em
                        className="
                        text-[#2F7D32]
                        italic
                        font-medium
                        "
                    >
                        Explore
                    </em>

                    ?
                </h2>





                {/* DESCRIPTION */}
                <p
                    className="
                    max-w-2xl
                    text-[#6B5744]
                    text-base
                    md:text-lg
                    leading-relaxed
                    text-center
                    "
                >
                    Tell us your dream destination and we'll craft
                    your perfect safari — wild, purposeful and
                    unforgettable.
                </p>





                {/* BUTTON */}
                <div
                    className="
                    flex
                    justify-center
                    "
                >

                    <Link
                        to="/book-now"

                        className="
                        flex
                        items-center
                        justify-center
                        w-[560px]
                        h-16
                        bg-[#C4873A]
                        text-white
                        uppercase
                        tracking-[0.25em]
                        text-lg
                        font-bold
                        shadow-lg
                        hover:bg-[#2C1810]
                        hover:-translate-y-1
                        transition-all
                        duration-300
                        "
                    >
                        Plan My Safari →
                    </Link>

                </div>





                {/* FOOTNOTE */}
                <p
                    className="
                    max-w-2xl
                    text-lg
                    text-[#6B5744]
                    leading-relaxed
                    "
                >
                    Every booking includes your personal tree-planting
                    experience with Kenya Forestry Service.
                </p>



            </div>

        </section>

    )

}


export default BookingCTA;