import { useState } from "react";


function PersonalDetails({
    formData,
    updateFormData,
    nextStep
}) {


    const [error,setError] = useState("");




    function handleSubmit(e){

        e.preventDefault();



        if(
            !formData.full_name ||
            !formData.email ||
            !formData.phone ||
            !formData.passport_number
        ){

            setError(
                "Please complete all required fields before continuing."
            );


            return;

        }



        setError("");

        nextStep();

    }






    return (

        <form
        onSubmit={handleSubmit}
        className="space-y-6"
        >





            <div>

                <h2 className="
                text-3xl
                font-serif
                text-[#2C1810]
                mb-2
                ">
                    Personal Details
                </h2>


                <p className="
                text-gray-500
                ">
                    Tell us about yourself so we can prepare your safari experience.
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





            <div>

                <label>
                    Full Name *
                </label>


                <input

                type="text"

                value={formData.full_name}

                onChange={(e)=>
                    updateFormData(
                        "full_name",
                        e.target.value
                    )
                }

                placeholder="Enter your full name"

                />

            </div>






            <div>

                <label>
                    Email Address *
                </label>


                <input

                type="email"

                value={formData.email}

                onChange={(e)=>
                    updateFormData(
                        "email",
                        e.target.value
                    )
                }

                placeholder="example@email.com"

                />

            </div>







            <div>

                <label>
                    Phone Number *
                </label>


                <input

                type="tel"

                value={formData.phone}

                onChange={(e)=>
                    updateFormData(
                        "phone",
                        e.target.value
                    )
                }

                placeholder="+254..."

                />

            </div>







            <div>

                <label>
                    Passport / ID Number *
                </label>


                <input

                type="text"

                value={formData.passport_number}

                onChange={(e)=>
                    updateFormData(
                        "passport_number",
                        e.target.value
                    )
                }

                placeholder="Passport or national ID number"

                />

            </div>









            <div className="
            grid
            md:grid-cols-2
            gap-6
            ">


                <div>

                    <label>
                        Date of Birth
                    </label>


                    <input

                    type="date"

                    value={formData.date_of_birth}

                    onChange={(e)=>
                        updateFormData(
                            "date_of_birth",
                            e.target.value
                        )
                    }

                    />

                </div>





                <div>

                    <label>
                        Country of Origin
                    </label>


                    <input

                    type="text"

                    value={formData.country_of_origin}

                    onChange={(e)=>
                        updateFormData(
                            "country_of_origin",
                            e.target.value
                        )
                    }

                    placeholder="Country"

                    />

                </div>



            </div>








            <div className="
            flex
            justify-end
            pt-6
            ">


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



export default PersonalDetails;