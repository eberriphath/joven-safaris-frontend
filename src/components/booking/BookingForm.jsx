import { useEffect, useState } from "react";

import api from "../../api/axios";

import ProgressIndicator from "./ProgressIndicator";

import PersonalDetails from "./steps/PersonalDetails";
import TravelDetails from "./steps/TravelDetails";
import TravellerDetails from "./steps/TravellerDetails";
import EmergencyContact from "./steps/EmergencyContact";
import ReviewBooking from "./steps/ReviewBooking";

import BookingSuccess from "./BookingSuccess";



function BookingForm() {


    const [step, setStep] = useState(1);


    const [packages, setPackages] = useState([]);


    const [submitted, setSubmitted] = useState(false);



    const [formData, setFormData] = useState({

        // PERSONAL DETAILS

        full_name: "",
        email: "",
        phone: "",
        passport_number: "",
        date_of_birth: "",
        country_of_origin: "",


        // TRAVEL DETAILS

        destination: "",
        travel_date: "",
        expected_travel_time: "",
        number_of_nights: "",
        accommodation_preference: "",


        // TRAVELLERS

        resident_adults: 0,
        resident_children: 0,

        non_resident_adults: 0,
        non_resident_children: 0,


        // EMERGENCY CONTACT

        emergency_contact_name: "",
        emergency_contact_phone: "",
        emergency_contact_relationship: "",


        // EXTRA

        special_requests:""

    });






    // ==========================
    // FETCH SAFARI PACKAGES
    // ==========================

    useEffect(()=>{


        api.get("/packages")

        .then((res)=>{

            setPackages(res.data);

        })

        .catch((err)=>{

            console.log(err);

        });


    },[]);







    // ==========================
    // UPDATE FORM DATA
    // ==========================

    function updateFormData(field,value){


        setFormData((previous)=>({

            ...previous,

            [field]: value

        }));

    }







    // ==========================
    // NEXT STEP
    // ==========================

    function nextStep(){


        setStep((previous)=>previous + 1);


    }







    // ==========================
    // PREVIOUS STEP
    // ==========================

    function previousStep(){


        setStep((previous)=>previous - 1);


    }







    // ==========================
    // SUBMIT BOOKING
    // ==========================

    async function submitBooking(){


        try{


            await api.post(
                "/book",
                formData
            );



            setSubmitted(true);



        }catch(error){


            console.log(
                error.response?.data || error.message
            );


        }


    }








    if(submitted){


        return(

            <BookingSuccess/>

        )

    }









    return(


        <section className="
        bg-white
        rounded-2xl
        shadow-xl
        p-8
        md:p-12
        max-w-4xl
        mx-auto
        ">



            <ProgressIndicator
                step={step}
            />






            {
                step === 1 && (

                    <PersonalDetails

                    formData={formData}

                    updateFormData={updateFormData}

                    nextStep={nextStep}

                    />

                )
            }





            {
                step === 2 && (

                    <TravelDetails

                    formData={formData}

                    updateFormData={updateFormData}

                    packages={packages}

                    nextStep={nextStep}

                    previousStep={previousStep}

                    />

                )
            }





            {
                step === 3 && (

                    <TravellerDetails

                    formData={formData}

                    updateFormData={updateFormData}

                    nextStep={nextStep}

                    previousStep={previousStep}

                    />

                )
            }





            {
                step === 4 && (

                    <EmergencyContact

                    formData={formData}

                    updateFormData={updateFormData}

                    nextStep={nextStep}

                    previousStep={previousStep}

                    />

                )
            }





            {
                step === 5 && (

                    <ReviewBooking

                    formData={formData}

                    submitBooking={submitBooking}

                    previousStep={previousStep}

                    />

                )
            }





        </section>


    )


}


export default BookingForm;