import "./BookingSuccess.css";


function BookingSuccess(){


    return (

        <section className="booking-success-page">


            <div className="booking-success-card">





                {/* SUCCESS ICON */}

                <div className="booking-success-icon">

                    ✓

                </div>








                {/* TITLE */}

                <h1>

                    Your Journey
                    <br />

                    <em>
                        Begins Here
                    </em>

                </h1>








                {/* MESSAGE */}

                <p className="success-message">

                    Thank you for choosing
                    <strong> Joven Safaris.</strong>

                    <br />

                    Your safari request has been received
                    successfully.

                    Our travel specialists will review your
                    details and contact you shortly to design
                    your perfect experience.

                </p>









                {/* NEXT STEPS */}

                <div className="success-next">


                    <h3>

                        What Happens Next?

                    </h3>




                    <div className="success-step">


                        <span>
                            01
                        </span>


                        <p>

                            Our safari team reviews your
                            travel preferences.

                        </p>


                    </div>






                    <div className="success-step">


                        <span>
                            02
                        </span>


                        <p>

                            We confirm availability and
                            prepare your itinerary.

                        </p>


                    </div>






                    <div className="success-step">


                        <span>
                            03
                        </span>


                        <p>

                            We contact you to finalize
                            your unforgettable journey.

                        </p>


                    </div>



                </div>









                <p className="success-footer">

                    Africa awaits. We cannot wait to welcome you.

                </p>





            </div>



        </section>

    )


}


export default BookingSuccess;