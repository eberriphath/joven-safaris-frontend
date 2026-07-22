function TravellerDetails({
    formData,
    updateFormData,
    nextStep,
    previousStep
}) {



    function increase(field){

        updateFormData(
            field,
            Number(formData[field]) + 1
        );

    }





    function decrease(field){

        if(formData[field] > 0){

            updateFormData(
                field,
                Number(formData[field]) - 1
            );

        }

    }







    function handleSubmit(e){

        e.preventDefault();

        nextStep();

    }








    return (

        <form

        onSubmit={handleSubmit}

        className="
        space-y-8
        "

        >





            <div>

                <h2 className="
                text-3xl
                font-serif
                text-[#2C1810]
                mb-2
                ">
                    Traveller Information
                </h2>


                <p className="
                text-gray-500
                ">
                    Tell us who will be joining this safari.
                </p>


            </div>









            {/* RESIDENTS */}

            <div className="
            bg-[#FAF6EE]
            rounded-xl
            p-6
            ">


                <h3 className="
                text-xl
                font-semibold
                text-[#2C1810]
                mb-5
                ">
                    Residents
                </h3>





                <Counter

                label="Adults"

                value={formData.resident_adults}

                increase={() =>
                    increase("resident_adults")
                }

                decrease={() =>
                    decrease("resident_adults")
                }

                />





                <Counter

                label="Children"

                value={formData.resident_children}

                increase={() =>
                    increase("resident_children")
                }

                decrease={() =>
                    decrease("resident_children")
                }

                />


            </div>









            {/* NON RESIDENTS */}

            <div className="
            bg-[#FAF6EE]
            rounded-xl
            p-6
            ">


                <h3 className="
                text-xl
                font-semibold
                text-[#2C1810]
                mb-5
                ">
                    Non-Residents
                </h3>





                <Counter

                label="Adults"

                value={formData.non_resident_adults}

                increase={() =>
                    increase("non_resident_adults")
                }

                decrease={() =>
                    decrease("non_resident_adults")
                }

                />





                <Counter

                label="Children"

                value={formData.non_resident_children}

                increase={() =>
                    increase("non_resident_children")
                }

                decrease={() =>
                    decrease("non_resident_children")
                }

                />


            </div>









            {/* BUTTONS */}

            <div className="
            flex
            justify-between
            pt-4
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








function Counter({
    label,
    value,
    increase,
    decrease
}){


    return (

        <div className="
        flex
        justify-between
        items-center
        bg-white
        rounded-lg
        p-4
        mb-4
        ">


            <span className="
            font-medium
            text-gray-700
            ">
                {label}
            </span>




            <div className="
            flex
            items-center
            gap-4
            ">


                <button

                type="button"

                onClick={decrease}

                className="
                w-8
                h-8
                rounded-full
                bg-gray-200
                "
                >

                    -

                </button>





                <span className="
                font-bold
                w-5
                text-center
                ">
                    {value}
                </span>





                <button

                type="button"

                onClick={increase}

                className="
                w-8
                h-8
                rounded-full
                bg-[#C4873A]
                text-white
                "
                >

                    +

                </button>


            </div>



        </div>


    )


}







export default TravellerDetails;