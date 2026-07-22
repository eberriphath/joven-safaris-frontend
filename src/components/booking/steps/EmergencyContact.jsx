function EmergencyContact({
    formData,
    updateFormData,
    nextStep,
    previousStep
}) {



    function handleSubmit(e){

        e.preventDefault();



        if(
            !formData.emergency_contact_name ||
            !formData.emergency_contact_phone ||
            !formData.emergency_contact_relationship
        ){

            alert(
                "Please complete emergency contact details."
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
                    Emergency Contact
                </h2>


                <p className="
                text-gray-500
                ">
                    Provide someone we can reach if needed during your safari.
                </p>


            </div>









            {/* NAME */}

            <div>


                <label className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
                ">

                    Contact Name *

                </label>



                <input

                type="text"

                value={formData.emergency_contact_name}

                onChange={(e)=>

                    updateFormData(
                        "emergency_contact_name",
                        e.target.value
                    )

                }

                placeholder="Emergency contact full name"

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

                    Contact Phone *

                </label>




                <input

                type="tel"

                value={formData.emergency_contact_phone}

                onChange={(e)=>

                    updateFormData(
                        "emergency_contact_phone",
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









            {/* RELATIONSHIP */}

            <div>


                <label className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
                ">

                    Relationship *

                </label>





                <select

                value={
                    formData.emergency_contact_relationship
                }

                onChange={(e)=>

                    updateFormData(
                        "emergency_contact_relationship",
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
                        Select relationship
                    </option>


                    <option value="Spouse">
                        Spouse
                    </option>


                    <option value="Parent">
                        Parent
                    </option>


                    <option value="Sibling">
                        Sibling
                    </option>


                    <option value="Child">
                        Child
                    </option>


                    <option value="Friend">
                        Friend
                    </option>


                    <option value="Relative">
                        Relative
                    </option>


                    <option value="Guardian">
                        Guardian
                    </option>


                    <option value="Other">
                        Other
                    </option>


                </select>


            </div>









            {/* BUTTONS */}

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



export default EmergencyContact;