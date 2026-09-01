import { Link } from "react-router-dom";


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
                            <Link to="/destinations/Kenya">
                                Kenya
                            </Link>
                        </li>


                        <li>
                            <Link to="/destinations/east-africa">
                                East Africa
                            </Link>
                        </li>


                        <li>
                            <Link to="/destinations/dubai">
                                Dubai
                            </Link>
                        </li>


                        <li>
                            <Link to="/destinations/south-africa">
                                South Africa
                            </Link>
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



                    <Link
                        to="/book-now"
                        className="footer-button"
                    >
                        Plan Your Safari →
                    </Link>


                </div>




            </div>







            {/* COPYRIGHT */}

            <div className="footer-bottom">


                <div>

                    <p>
                        © {new Date().getFullYear()} Joven Safaris.
                        All rights reserved.
                    </p>


                    <p>
                        Responsible travel. Meaningful experiences.
                    </p>

                </div>


                {/* LEGAL */}

                <div className="footer-legal">

                    <Link to="/terms-and-conditions">
                        Terms & Conditions
                    </Link>

                    <Link to="/privacy-policy">
                        Privacy Policy
                    </Link>

                </div>


            </div>



        </footer>

    )

}


export default Footer;

