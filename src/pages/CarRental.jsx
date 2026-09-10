import CarRentalForm from "../components/car-rental/CarRentalForm";
import SEO from "../components/SEO";

function CarRental() {
  return (
    <main className="booking-page">
      <SEO
        title="Car Rental | Joven Safaris"
        description="Rent a car and explore Kenya at your own pace with Joven Safaris."
        canonical="/car-rental"
      />

      {/* =========================
          PAGE HEADER
      ========================== */}

      <section className="booking-page-header">

        <span className="booking-tag">
          CAR RENTAL
        </span>

        <h1>
          Explore Kenya Your Way
        </h1>

        <p>
          Enjoy the freedom to discover Kenya at your own pace.
          Request a vehicle that suits your journey and let the
          Joven Safaris team help you plan a smooth and comfortable
          experience.
        </p>

      </section>


      {/* =========================
          RENTAL FORM
      ========================== */}

      <section className="booking-form-card">

        <div className="booking-form-inner">

          <CarRentalForm />

        </div>

      </section>

    </main>
  );
}

export default CarRental;