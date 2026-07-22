function ReviewBooking({
    formData,
    submitBooking,
    previousStep
}) {


    return (

        <div className="
        space-y-8
        ">



            <div>

                <h2 className="
                text-3xl
                font-serif
                text-[#2C1810]
                mb-2
                ">
                    Review Your Booking
                </h2>


                <p className="
                text-gray-500
                ">
                    Please confirm your details before submitting your safari request.
                </p>

            </div>








            {/* PERSONAL DETAILS */}

            <ReviewSection title="Personal Details">


                <ReviewItem
                    label="Full Name"
                    value={formData.full_name}
                />


                <ReviewItem
                    label="Email"
                    value={formData.email}
                />


                <ReviewItem
                    label="Phone"
                    value={formData.phone}
                />


                <ReviewItem
                    label="Passport / ID"
                    value={formData.passport_number}
                />


                <ReviewItem
                    label="Date of Birth"
                    value={
                        formData.date_of_birth || "Not provided"
                    }
                />


                <ReviewItem
                    label="Country"
                    value={
                        formData.country_of_origin || "Not provided"
                    }
                />


            </ReviewSection>









            {/* TRAVEL DETAILS */}

            <ReviewSection title="Travel Details">


                <ReviewItem
                    label="Destination"
                    value={formData.destination}
                />


                <ReviewItem
                    label="Travel Date"
                    value={
                        formData.travel_date || "Not selected"
                    }
                />


                <ReviewItem
                    label="Expected Travel Time"
                    value={
                        formData.expected_travel_time || "Not selected"
                    }
                />


                <ReviewItem
                    label="Number of Nights"
                    value={formData.number_of_nights}
                />


                <ReviewItem
                    label="Accommodation"
                    value={
                        formData.accommodation_preference || "Not selected"
                    }
                />


            </ReviewSection>









            {/* TRAVELLERS */}

            <ReviewSection title="Travellers">


                <ReviewItem

                    label="Resident Adults"

                    value={formData.resident_adults}

                />


                <ReviewItem

                    label="Resident Children"

                    value={formData.resident_children}

                />


                <ReviewItem

                    label="Non-Resident Adults"

                    value={formData.non_resident_adults}

                />


                <ReviewItem

                    label="Non-Resident Children"

                    value={formData.non_resident_children}

                />


            </ReviewSection>









            {/* EMERGENCY */}

            <ReviewSection title="Emergency Contact">


                <ReviewItem

                    label="Name"

                    value={
                        formData.emergency_contact_name
                    }

                />


                <ReviewItem

                    label="Phone"

                    value={
                        formData.emergency_contact_phone
                    }

                />


                <ReviewItem

                    label="Relationship"

                    value={
                        formData.emergency_contact_relationship
                    }

                />


            </ReviewSection>









            {/* SPECIAL REQUEST */}

            <ReviewSection title="Special Requests">


                <p className="
                text-gray-700
                ">

                    {
                        formData.special_requests ||
                        "No special requests"
                    }

                </p>


            </ReviewSection>









            {/* BUTTONS */}

            <div className="
            flex
            justify-between
            pt-6
            ">


                <button

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

                onClick={submitBooking}

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

                    Submit Booking

                </button>



            </div>





        </div>

    )

}








function ReviewSection({
    title,
    children
}){


    return (

        <div className="
        bg-[#FAF6EE]
        rounded-xl
        p-6
        ">


            <h3 className="
            text-xl
            font-semibold
            text-[#2C1810]
            mb-4
            ">

                {title}

            </h3>


            <div className="
            space-y-3
            ">

                {children}

            </div>


        </div>

    )

}








function ReviewItem({
    label,
    value
}){


    return (

        <div className="
        flex
        justify-between
        gap-5
        border-b
        pb-2
        ">


            <span className="
            text-gray-500
            ">

                {label}

            </span>




            <span className="
            font-medium
            text-right
            text-[#2C1810]
            ">

                {value}

            </span>



        </div>

    )

}





export default ReviewBooking;