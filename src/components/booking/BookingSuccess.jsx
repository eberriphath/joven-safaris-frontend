import "./BookingSuccess.css";

function BookingSuccess(){


    return (

        <section className="
        min-h-[500px]
        flex
        items-center
        justify-center
        bg-[#FAF6EE]
        rounded-2xl
        p-8
        ">


            <div className="
            max-w-xl
            text-center
            ">



                {/* ICON */}

                <div className="
                w-20
                h-20
                mx-auto
                rounded-full
                bg-[#C4873A]
                flex
                items-center
                justify-center
                text-white
                text-4xl
                mb-8
                ">

                    ✓

                </div>








                <h1 className="
                text-4xl
                md:text-5xl
                font-serif
                text-[#2C1810]
                mb-5
                ">

                    Thank You For Choosing
                    Joven Safaris

                </h1>








                <p className="
                text-gray-600
                text-lg
                leading-8
                mb-6
                ">

                    Your safari request has been received
                    successfully.

                    Our travel team will review your
                    details and contact you shortly to
                    finalize your safari experience.

                </p>








                <div className="
                bg-white
                rounded-xl
                shadow
                p-6
                text-left
                ">



                    <h3 className="
                    text-xl
                    font-semibold
                    text-[#2C1810]
                    mb-3
                    ">

                        What Happens Next?

                    </h3>





                    <ul className="
                    space-y-3
                    text-gray-600
                    ">


                        <li>
                            ✓ Our team reviews your safari request
                        </li>


                        <li>
                            ✓ We confirm availability and arrangements
                        </li>


                        <li>
                            ✓ We contact you to finalize your journey
                        </li>


                    </ul>


                </div>








                <p className="
                mt-8
                text-[#8B4513]
                font-serif
                italic
                ">

                    We look forward to welcoming you
                    on an unforgettable adventure.

                </p>






            </div>


        </section>

    )


}


export default BookingSuccess;