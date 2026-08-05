function ReviewBooking({
    formData,
    submitBooking,
    previousStep
}) {


    return (

        <div className="review-booking">



            {/* HEADER */}

            <div className="review-header">


                <h2>
                    Review Your Booking
                </h2>


                <p>
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









            {/* EMERGENCY CONTACT */}

            <ReviewSection title="Emergency Contact">


                <ReviewItem
                    label="Name"
                    value={formData.emergency_contact_name}
                />


                <ReviewItem
                    label="Phone"
                    value={formData.emergency_contact_phone}
                />


                <ReviewItem
                    label="Relationship"
                    value={formData.emergency_contact_relationship}
                />


            </ReviewSection>









            {/* SPECIAL REQUESTS */}

            <ReviewSection title="Special Requests">


                <p className="review-special">

                    {
                        formData.special_requests ||
                        "No special requests"
                    }

                </p>


            </ReviewSection>









            {/* ACTION BUTTONS */}

            <div className="booking-actions">


                <button

                onClick={previousStep}

                className="
                step-button
                step-button-secondary
                "

                >

                    ← Back

                </button>







                <button

                onClick={submitBooking}

                className="
                step-button
                step-button-primary
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

        <div className="review-section">


            <h3>
                {title}
            </h3>



            <div className="review-items">

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

        <div className="review-item">


            <span className="review-label">

                {label}

            </span>





            <span className="review-value">

                {value}

            </span>



        </div>

    )

}






export default ReviewBooking;