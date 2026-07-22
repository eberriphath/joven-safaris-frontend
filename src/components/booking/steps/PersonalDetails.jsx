function PersonalDetails({
    formData,
    updateFormData,
    nextStep
}) {



    function handleSubmit(e){

        e.preventDefault();



        if(
            !formData.full_name ||
            !formData.email ||
            !formData.phone ||
            !formData.passport_number
        ){

            alert(
                "Please complete all required fields."
            );

            return;

        }



        nextStep();

    }






    return (

        <form
        onSubmit={handleSubmit}
        className="
        space-y-6
        "
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






            {/* FULL NAME */}

            <div>

                <label className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
                ">
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

                className="
                w-full
                border
                rounded-lg
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-[#C4873A]
                "

                />

            </div>








            {/* EMAIL */}

            <div>

                <label className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
                ">
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

                className="
                w-full
                border
                rounded-lg
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-[#C4873A]
                "

                />

            </div>








            {/* PHONE */}

            <div>

                <label className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
                ">
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

                className="
                w-full
                border
                rounded-lg
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-[#C4873A]
                "

                />

            </div>








            {/* PASSPORT */}

            <div>

                <label className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
                ">
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

                className="
                w-full
                border
                rounded-lg
                p-3
                focus:outline-none
                focus:ring-2
                focus:ring-[#C4873A]
                "

                />

            </div>








            <div className="
            grid
            md:grid-cols-2
            gap-6
            ">


                {/* DATE OF BIRTH */}

                <div>

                    <label className="
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                    mb-2
                    ">
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

                    className="
                    w-full
                    border
                    rounded-lg
                    p-3
                    "

                    />

                </div>






                {/* COUNTRY */}

                <div>

                    <label className="
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                    mb-2
                    ">
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

                    className="
                    w-full
                    border
                    rounded-lg
                    p-3
                    "

                    />

                </div>


            </div>








            {/* BUTTON */}

            <div className="
            flex
            justify-end
            pt-6
            ">


                <button

                type="submit"

                className="
                bg-[#2C1810]
                text-white
                px-8
                py-3
                rounded-lg
                font-semibold
                hover:bg-[#C4873A]
                transition
                "

                >

                    Continue →

                </button>


            </div>






        </form>

    )

}



export default PersonalDetails;