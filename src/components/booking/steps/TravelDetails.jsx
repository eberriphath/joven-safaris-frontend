import { useState } from "react";


function TravelDetails({
    formData,
    updateFormData,
    packages,
    nextStep,
    previousStep
}) {


    const [error,setError] = useState("");





    function handleSubmit(e){

        e.preventDefault();



        if(
            !formData.destination ||
            !formData.number_of_nights
        ){

            setError(
                "Please complete the required travel details before continuing."
            );


            return;

        }



        setError("");

        nextStep();

    }








    return (

        <form

        onSubmit={handleSubmit}

        className="booking-step-form"

        >





            <div>

                <h2 className="booking-step-title">

                    Travel Details

                </h2>



                <p className="booking-step-description">

                    Tell us about the safari experience you would like.

                </p>


            </div>








            {
                error && (

                    <div className="form-error">

                        <span>
                            ⚠
                        </span>

                        <p>
                            {error}
                        </p>

                    </div>

                )
            }









            {/* DESTINATION */}

            <div className="form-group">


                <label className="booking-label">

                    Safari Destination *

                </label>





                <input

                type="text"

                list="safari-destinations"

                value={formData.destination}

                onChange={(e)=>

                    updateFormData(
                        "destination",
                        e.target.value
                    )

                }

                placeholder="Select a package or enter your own destination"

                className="booking-input"

                />





                <datalist id="safari-destinations">


                    {
                        packages.map((pkg)=>(

                            <option

                            key={pkg.id}

                            value={pkg.destination}

                            />

                        ))
                    }



                   {/* <option value="Custom Safari"> */}


                </datalist>



            </div>









            {/* DATE + TIME */}

            <div className="booking-grid">





                <div className="form-group">


                    <label className="booking-label">

                        Travel Date

                    </label>




                    <input

                    type="date"

                    value={formData.travel_date}

                    onChange={(e)=>
                        updateFormData(
                            "travel_date",
                            e.target.value
                        )
                    }


                    className="booking-input"


                    />


                </div>








                <div className="form-group">


                    <label className="booking-label">

                        Expected Travel Time

                    </label>





                    <input

                    type="time"

                    value={formData.expected_travel_time}

                    onChange={(e)=>
                        updateFormData(
                            "expected_travel_time",
                            e.target.value
                        )
                    }


                    className="booking-input"


                    />



                </div>




            </div>









            {/* NIGHTS */}

            <div className="form-group">


                <label className="booking-label">

                    Number of Nights *

                </label>





                <input

                type="number"

                min="1"

                value={formData.number_of_nights}

                onChange={(e)=>
                    updateFormData(
                        "number_of_nights",
                        e.target.value
                    )
                }


                placeholder="Example: 5"


                className="booking-input"


                />


            </div>









            {/* ACCOMMODATION */}

            <div className="form-group">


                <label className="booking-label">

                    Accommodation Preference

                </label>






                <select

                value={formData.accommodation_preference}

                onChange={(e)=>
                    updateFormData(
                        "accommodation_preference",
                        e.target.value
                    )
                }


                className="booking-input"


                >





                    <option value="">

                        Select preference

                    </option>




                    <option>

                        Budget Lodge

                    </option>




                    <option>

                        Mid-range Lodge

                    </option>




                    <option>

                        Luxury Lodge

                    </option>




                    <option>

                        Luxury Camp

                    </option>




                    <option>

                        Not Sure Yet

                    </option>





                </select>


            </div>









            {/* BUTTONS */}

            <div className="booking-actions">





                <button

                type="button"

                onClick={previousStep}

                className="
                step-button
                step-button-secondary
                "

                >

                    ← Back

                </button>








                <button

                type="submit"

                className="
                step-button
                step-button-primary
                "

                >

                    Continue →

                </button>





            </div>





        </form>


    )

}



export default TravelDetails;