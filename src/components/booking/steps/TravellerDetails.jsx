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

        className="booking-step"

        >





            <div className="step-header">

                <h2>
                    Traveller Information
                </h2>


                <p>
                    Tell us who will be joining this safari.
                </p>


            </div>









            {/* RESIDENTS */}

            <div className="traveller-card">


                <h3>
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

            <div className="traveller-card">


                <h3>
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

            <div className="step-actions">



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








function Counter({
    label,
    value,
    increase,
    decrease
}){


    return (

        <div className="counter-row">


            <span>
                {label}
            </span>




            <div className="counter-controls">


                <button

                type="button"

                onClick={decrease}

                className="counter-minus"

                >

                    −

                </button>





                <span className="counter-number">

                    {value}

                </span>





                <button

                type="button"

                onClick={increase}

                className="counter-plus"

                >

                    +

                </button>


            </div>



        </div>


    )


}







export default TravellerDetails;