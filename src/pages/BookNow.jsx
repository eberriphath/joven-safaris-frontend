import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";

function BookNow() {

    return (

        <>

            {/* =========================
                NAVBAR
            ========================= */}

            <Navbar />



            {/* =========================
                HERO
            ========================= */}

            <section
                className="
                bg-[#FAF6EE]
                min-h-screen
                py-20
                px-6
                "
            >

                <div
                    className="
                    max-w-5xl
                    mx-auto
                    text-center
                    mb-16
                    "
                >

                    <p
                        className="
                        uppercase
                        tracking-[0.3em]
                        text-sm
                        text-[#C4873A]
                        font-semibold
                        "
                    >
                        Plan Your Adventure
                    </p>

                    <h1
                        className="
                        text-5xl
                        md:text-6xl
                        font-serif
                        text-[#2C1810]
                        mt-5
                        "
                    >
                        Book Your Dream Safari
                    </h1>

                    <p
                        className="
                        max-w-3xl
                        mx-auto
                        text-gray-600
                        mt-6
                        leading-8
                        text-lg
                        "
                    >
                        Whether you're dreaming of witnessing the Great Migration,
                        exploring the Serengeti, trekking with gorillas, or enjoying
                        a luxury beach escape after your safari, our team will craft
                        the perfect African adventure tailored just for you.
                    </p>

                </div>



                {/* =========================
                    BOOKING FORM
                ========================= */}

                <div
                    className="
                    max-w-5xl
                    mx-auto
                    "
                >

                    <BookingForm destination="Custom Safari" />

                </div>

            </section>

        </>

    );

}

export default BookNow;