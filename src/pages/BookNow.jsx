import Navbar from "../components/Navbar";
import BookingForm from "../components/booking/BookingForm";
import "./BookNow.css";
import SEO from "../components/SEO";

function BookNow() {

    return (
        


        
        <>

<SEO
  title="Book Your Safari | Joven Safaris"
  description="Start planning your next adventure with Joven Safaris. Request a personalized safari, tour or luxury travel experience across Africa and beyond."
  canonical="/book-now"
/>
            <Navbar />


<main className="booking-page">


    <div className="booking-page-header">

        <span className="booking-tag">
            Plan Your Adventure
        </span>


        <h1>
            Book Your Dream Safari
        </h1>


        <p>
            Whether you're dreaming of witnessing the Great Migration,
            exploring the Serengeti, trekking with gorillas,
            or enjoying a luxury beach escape,
            we'll create the perfect journey for you.
        </p>

    </div>



    <BookingForm destination="Custom Safari" />


</main>


        </>

    );

}


export default BookNow;