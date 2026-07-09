import { useState } from "react";
import api from "../api/axios";


function BookingForm({ destination = "" }) {


const [formData, setFormData] = useState({

    full_name: "",

    email: "",

    phone: "",

    destination: destination || "",

    travel_date: "",

    number_of_people: "",

    number_of_nights: "",

    special_requests: ""

});



  const [message, setMessage] = useState("");



  function handleChange(e){

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  }




 async function handleSubmit(e){

    e.preventDefault();

    console.log("BOOKING DATA:", formData);

    try{


      const response = await api.post(
        "/book",
        formData
      );



      setMessage(
        "Booking submitted successfully. We will contact you soon."
      );



      setFormData({

        full_name: "",

        email: "",

        phone: "",

        destination: "",

        travel_date: "",

        number_of_people: "",

        number_of_nights: "",

        special_requests: ""

      });


    }catch(error){


      console.log(
        error.response?.data || error.message
      );


      setMessage(
        "Something went wrong. Please try again."
      );


    }

}


return(

<section className="
bg-white
rounded-2xl
shadow-lg
p-8
mt-10
">


<h2 className="
text-3xl
font-serif
text-[#2C1810]
mb-6
">

Book This Safari

</h2>



{message && (

<div className="
bg-[#FAF6EE]
text-[#2C1810]
p-4
rounded
mb-5
">

{message}

</div>

)}





<form

onSubmit={handleSubmit}

className="
space-y-5
"



>



<input

type="text"

name="full_name"

placeholder="Full Name"

value={formData.full_name}

onChange={handleChange}

className="
w-full
border
p-3
rounded
"

/>




<input

type="email"

name="email"

placeholder="Email Address"

value={formData.email}

onChange={handleChange}

className="
w-full
border
p-3
rounded
"

/>





<input

type="text"

name="phone"

placeholder="Phone Number"

value={formData.phone}

onChange={handleChange}

className="
w-full
border
p-3
rounded
"

/>






<input

type="date"

name="travel_date"

value={formData.travel_date}

onChange={handleChange}

className="
w-full
border
p-3
rounded
"

/>





<div className="
grid
md:grid-cols-2
gap-5
">



<input

type="number"

name="number_of_people"

placeholder="Number of People"

value={formData.number_of_people}

onChange={handleChange}

className="
border
p-3
rounded
"

/>





<input

type="number"

name="number_of_nights"

placeholder="Number of Nights"

value={formData.number_of_nights}

onChange={handleChange}

className="
border
p-3
rounded
"

/>



</div>







<textarea

name="special_requests"

placeholder="Special Requests"

value={formData.special_requests}

onChange={handleChange}

rows="4"

className="
w-full
border
p-3
rounded
"

/>







<button

type="submit"

className="
bg-[#2C1810]
text-white
px-8
py-3
rounded
font-semibold
hover:bg-[#C4873A]
transition
"

>

Submit Booking

</button>



</form>



</section>

)


}


export default BookingForm;