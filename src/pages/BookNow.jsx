import Navbar from "../components/Navbar";
import BookingForm from "../components/booking/BookingForm";
import "./BookNow.css";

function BookNow() {

    return (

        <>

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