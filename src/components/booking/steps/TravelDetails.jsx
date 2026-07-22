function TravelDetails({
    formData,
    updateFormData,
    packages,
    nextStep,
    previousStep
}) {



    function handleSubmit(e){

        e.preventDefault();



        if(
            !formData.destination ||
            !formData.number_of_nights
        ){

            alert(
                "Please complete the required travel details."
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
                    Travel Details
                </h2>


                <p className="
                text-gray-500
                ">
                    Tell us about the safari experience you would like.
                </p>

            </div>







            {/* DESTINATION */}

            <div>


                <label className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
                ">
                    Safari Destination *
                </label>



                <select

                value={formData.destination}

                onChange={(e)=>
                    updateFormData(
                        "destination",
                        e.target.value
                    )
                }

                className="
                w-full
                border
                rounded-lg
                p-3
                "

                >


                    <option value="">
                        Select destination
                    </option>



                    {
                        packages.map((pkg)=>(

                            <option

                            key={pkg.id}

                            value={pkg.destination}

                            >

                                {pkg.destination}

                            </option>

                        ))
                    }



                    <option value="Custom Safari">

                        Custom Safari

                    </option>


                </select>


            </div>









            <div className="
            grid
            md:grid-cols-2
            gap-6
            ">





                {/* TRAVEL DATE */}

                <div>


                    <label className="
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                    mb-2
                    ">
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

                    className="
                    w-full
                    border
                    rounded-lg
                    p-3
                    "

                    />


                </div>









                {/* EXPECTED TIME */}

                <div>


                    <label className="
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                    mb-2
                    ">
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

                    className="
                    w-full
                    border
                    rounded-lg
                    p-3
                    "

                    />


                </div>



            </div>









            {/* NIGHTS */}

            <div>


                <label className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
                ">
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

                className="
                w-full
                border
                rounded-lg
                p-3
                "

                />


            </div>









            {/* ACCOMMODATION */}

            <div>


                <label className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
                ">
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

                className="
                w-full
                border
                rounded-lg
                p-3
                "

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









            {/* NAVIGATION BUTTONS */}

            <div className="
            flex
            justify-between
            pt-6
            ">


                <button

                type="button"

                onClick={previousStep}

                className="
                border
                border-[#2C1810]
                text-[#2C1810]
                px-8
                py-3
                rounded-lg
                font-semibold
                "

                >

                    ← Back

                </button>





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



export default TravelDetails;