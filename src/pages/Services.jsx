import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Services.css";
import SEO from "../components/SEO";

function Services() {
  return (
    <main className="services-page">
      <SEO
        title="Services | Joven Safaris"
        description="Explore our premium travel services and enhance your African safari experience."
        canonical="/services"
      />

      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="services-hero">

        <div className="services-hero-overlay"></div>

        <div className="services-hero-content">

          <p className="services-eyebrow">
            BEYOND THE SAFARI
          </p>

          <h1>
            Premium Travel Services
          </h1>

          <p>
            From private flights and luxury vehicles to
            personalized travel support, Joven Safaris
            takes care of every part of your journey.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="services-intro">

        <p className="services-eyebrow">
          TRAVEL WITHOUT LIMITS
        </p>

        <h2>
          More Than a Safari
        </h2>

        <p>
          Your journey should be seamless from the moment
          you leave home until the moment you return.
          Beyond our safari experiences, we provide a
          collection of premium travel services designed
          around comfort, convenience and unforgettable
          experiences.
        </p>

      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="services-list">

        {/* AIR TRAVEL */}

        <div className="service-category">

          <div className="service-category-header">

            <span>
              01
            </span>

            <div>

              <p className="services-eyebrow">
                AIR TRAVEL
              </p>

              <h2>
                Travel Above It All
              </h2>

            </div>

          </div>


          <div className="service-grid">

            <article className="service-card">

              <div className="service-card-icon">
                ✈
              </div>

              <h3>
                Helicopter Charters
              </h3>

              <p>
                Experience Kenya from a completely different
                perspective with private helicopter flights
                over destinations such as the Maasai Mara,
                Mount Kenya and the Kenyan coast.
              </p>

              <Link to="/book-now">
                Enquire Now →
              </Link>

            </article>


            <article className="service-card">

              <div className="service-card-icon">
                ✈
              </div>

              <h3>
                Private Jet Hire
              </h3>

              <p>
                Enjoy private and direct travel between
                Nairobi, Mombasa, Zanzibar, the Serengeti
                and other destinations across East Africa.
              </p>

              <Link to="/book-now">
                Enquire Now →
              </Link>

            </article>

          </div>

        </div>


        {/* =================================================
            GROUND TRAVEL
        ================================================== */}

        <div className="service-category">

          <div className="service-category-header">

            <span>
              02
            </span>

            <div>

              <p className="services-eyebrow">
                GROUND TRAVEL
              </p>

              <h2>
                Your Journey, Your Way
              </h2>

            </div>

          </div>


          <div className="service-grid">

            <article className="service-card service-card-featured">

              <div className="service-card-icon">
                🚗
              </div>

              <h3>
                Car Hire Services
              </h3>

              <p>
                Choose from luxury SUVs, capable 4x4s and
                chauffeur-driven vehicles for airport
                transfers, lodge pickups, city travel and
                personalized itineraries.
              </p>

              <Link to="/car-rental">
                Explore Car Hire →
              </Link>

            </article>

          </div>

        </div>


        {/* =================================================
            TRAVEL SUPPORT
        ================================================== */}

        <div className="service-category">

          <div className="service-category-header">

            <span>
              03
            </span>

            <div>

              <p className="services-eyebrow">
                TRAVEL SUPPORT
              </p>

              <h2>
                We Handle the Details
              </h2>

            </div>

          </div>


          <div className="service-grid">

            <article className="service-card">

              <div className="service-card-icon">
                🛂
              </div>

              <h3>
                Dubai Visa Assistance
              </h3>

              <p>
                We assist travelers with the documentation
                and application process required for travel
                to the United Arab Emirates.
              </p>

              <Link to="/book-now">
                Get Assistance →
              </Link>

            </article>

          </div>

        </div>


        {/* =================================================
            EXCLUSIVE PACKAGES
        ================================================== */}

        <div className="service-category">

          <div className="service-category-header">

            <span>
              04
            </span>

            <div>

              <p className="services-eyebrow">
                EXCLUSIVE EXPERIENCES
              </p>

              <h2>
                Travel in Complete Comfort
              </h2>

            </div>

          </div>


          <div className="service-grid">

            <article className="service-card">

              <div className="service-card-icon">
                ✨
              </div>

              <h3>
                VIP Transfers
              </h3>

              <p>
                Arrive and depart in comfort with seamless
                airport transfers and private luxury
                transportation.
              </p>

              <Link to="/book-now">
                Arrange a Transfer →
              </Link>

            </article>


            <article className="service-card">

              <div className="service-card-icon">
                🌴
              </div>

              <h3>
                Tailored Luxury Experiences
              </h3>

              <p>
                Combine safari adventures with private
                flights, beach escapes, cultural experiences
                and other carefully selected destinations.
              </p>

              <Link to="/book-now">
                Design Your Journey →
              </Link>

            </article>


            <article className="service-card">

              <div className="service-card-icon">
                🏨
              </div>

              <h3>
                Hotel Bookings
              </h3>

              <p>
                Let us arrange accommodation that matches
                your itinerary, from luxury lodges and
                boutique properties to premium city hotels.
              </p>

              <Link to="/book-now">
                Find Accommodation →
              </Link>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="services-cta">

        <div>

          <p className="services-eyebrow">
            YOUR JOURNEY STARTS HERE
          </p>

          <h2>
            Tell Us Where You Want to Go.
          </h2>

          <p>
            Whether you're planning a safari, arranging
            private transportation or creating a completely
            personalized journey, our team can help bring
            it together.
          </p>

          <Link
            to="/book-now"
            className="services-cta-button"
          >
            Plan Your Journey
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Services;