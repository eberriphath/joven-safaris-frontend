import { Link } from "react-router-dom";
import "./ExperiencesCTA.css";


function ExperiencesCTA(){

    return (

        <section
            id="experiences-cta"
            className="experiences-cta"
        >



            <div className="experiences-divider"></div>





            <div className="experiences-container">





                <div className="experiences-tag">

                    Create Your Memory

                </div>








                <h2 className="experiences-title">

                    Your Next Adventure

                    <span>

                        Awaits

                    </span>

                </h2>









                <p className="experiences-description">

                    From unforgettable wildlife encounters
                    to meaningful journeys across Africa,
                    we create safari experiences designed
                    around your dreams.

                </p>









                <Link

                to="/book-now"

                className="experiences-button"

                >

                    Plan My Safari →

                </Link>









                <p className="experiences-footnote">

                    Every journey supports responsible tourism,
                    local communities and conservation efforts.

                </p>





            </div>





        </section>

    )

}


export default ExperiencesCTA;