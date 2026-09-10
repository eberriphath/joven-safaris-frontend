import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";

import Navbar from "../components/Navbar";
import "./PackageDetails.css";

import api from "../api/axios";


function PackageDetails() {


    const { id } = useParams();


    const [pkg, setPkg] = useState(null);




    // =========================
    // FETCH SINGLE PACKAGE
    // =========================

    useEffect(() => {


        api.get(`/packages/${id}`)

            .then((res) => {


                setPkg(res.data);


            })


            .catch((err) => {


                console.log(err);


            });


    }, [id]);









    // =========================
    // LOADING STATE
    // =========================

    if (!pkg) {


        return (

            <div className="package-loading">


                Loading safari experience...


            </div>

        )

    }









    return (
        <>
        <SEO
          title={`${pkg.title} | Joven Safaris`}
          description={pkg.description}
          canonical={`/packages/${id}`}
        />
        


        <section className="package-page">


            <Navbar />



            <div className="package-container">





                {/* =========================
                    HERO
                ========================= */}



                <div className="package-hero">



                    {


                    pkg.image_url ? (


                        <img


                        src={pkg.image_url}


                        alt={pkg.title}


                        className="package-hero-image"


                        />


                    )


                    :


                    (


                        <div className="package-image-placeholder">


                            Safari Image


                        </div>


                    )


                    }







                    <div className="package-overlay"></div>







                    <div className="package-hero-content">



                        <p className="package-destination">


                            {pkg.destination}


                        </p>







                        <h1 className="package-title">


                            {pkg.title}


                        </h1>







                        <div className="package-meta">


                            <span>


                                ⏱ {pkg.duration}


                            </span>





                            <span>


                                💰 KSh {pkg.price.toLocaleString()}


                            </span>



                        </div>






                    </div>






                </div>









                {/* =========================
                    DETAILS
                ========================= */}



                <div className="package-card">





                    <h2>


                        About This Journey


                    </h2>







                    <p>


                        {pkg.description}


                    </p>









                    <div className="package-price-section">





                        <div>



                            <p className="package-price-label">


                                Starting From


                            </p>







                            <h3 className="package-price">


                                KSh {pkg.price.toLocaleString()}


                            </h3>




                        </div>





                    </div>







                </div>









                {/* =========================
                    BOOK NOW CTA
                ========================= */}



                <div className="package-book-section">





                    <Link

                    to="/book-now"

                    className="package-book-button"

                    >


                        Book This Safari →


                    </Link>





                </div>







            </div>





        </section>

        </>


    )

}



export default PackageDetails;