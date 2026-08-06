
function Footer() {

    return (

        <footer id="footer" className="footer">


            {/* Decorative top line */}
            <div className="footer-line"></div>



            <div className="footer-container">



                {/* BRAND */}

                <div className="footer-brand">


                    <h2>
                        Joven Safaris
                    </h2>


                    <p>
                        Creating meaningful safari journeys across Africa
                        and beyond — rooted in adventure, sustainability,
                        and unforgettable experiences.
                    </p>



                    <div className="footer-socials">

                        <a href="#">
                            Instagram
                        </a>

                        <a href="#">
                            Facebook
                        </a>

                        <a href="#">
                            LinkedIn
                        </a>


                    </div>


                </div>







                {/* DESTINATIONS */}

                <div className="footer-links">


                    <h3>
                        Destinations
                    </h3>


                    <ul>

                        <li>
                            Kenya
                        </li>


                        <li>
                            East Africa
                        </li>


                        <li>
                            Dubai
                        </li>


                        <li>
                            South Africa
                        </li>


                    </ul>


                </div>








                {/* CONTACT */}

                <div className="footer-contact">


                    <h3>
                        Contact
                    </h3>


                    <p>
                        info@jovensafaris.com
                    </p>


                    <p>
                        +254 700 000 000
                    </p>


                    <p>
                        Kenya · East Africa
                    </p>



                    <a
                        href="/book-now"
                        className="footer-button"
                    >
                        Plan Your Safari →
                    </a>


                </div>




            </div>







            {/* COPYRIGHT */}

            <div className="footer-bottom">


                <p>
                    © {new Date().getFullYear()} Joven Safaris.
                    All rights reserved.
                </p>



                <p>
                    Responsible travel. Meaningful experiences.
                </p>


            </div>



        </footer>

    )

}


export default Footer;