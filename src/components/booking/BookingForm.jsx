import { useEffect, useState } from "react";

import api from "../../api/axios";

import ProgressIndicator from "./ProgressIndicator";

import PersonalDetails from "./steps/PersonalDetails";
import TravelDetails from "./steps/TravelDetails";
import TravellerDetails from "./steps/TravellerDetails";
import EmergencyContact from "./steps/EmergencyContact";
import ReviewBooking from "./steps/ReviewBooking";

import BookingSuccess from "./BookingSuccess";
import "./BookingForm.css";




function BookingForm() {


    const [step, setStep] = useState(1);

    const [packages, setPackages] = useState([]);

    const [submitted, setSubmitted] = useState(false);


    const [formData, setFormData] = useState({

        full_name:"",
        email:"",
        phone:"",
        passport_number:"",
        date_of_birth:"",
        country_of_origin:"",

        destination:"",
        travel_date:"",
        expected_travel_time:"",
        number_of_nights:"",
        accommodation_preference:"",

        resident_adults:0,
        resident_children:0,

        non_resident_adults:0,
        non_resident_children:0,

        emergency_contact_name:"",
        emergency_contact_phone:"",
        emergency_contact_relationship:"",

        special_requests:""

    });



    useEffect(()=>{


        api.get("/packages")

        .then((res)=>{

            setPackages(res.data);

        })

        .catch((err)=>{

            console.log(err);

        });


    },[]);





    function updateFormData(field,value){


        setFormData(previous=>({

            ...previous,

            [field]:value

        }));

    }






    function nextStep(){

        setStep(previous=>previous+1);

    }






    function previousStep(){

        setStep(previous=>previous-1);

    }







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

        return <BookingSuccess/>

    }








    return(


        <section className="booking-form-card">



            <div className="booking-form-inner">


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



            </div>



        </section>


    );


}


export default BookingForm;