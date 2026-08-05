import { Link } from "react-router-dom";

function BookingCTA() {
  return (
    <section id="book" className="booking-cta">

      <div className="booking-overlay"></div>

      <div className="booking-content">

        <span className="section-tag">
          START YOUR JOURNEY
        </span>

        <h2>
          Ready to <em>Explore?</em>
        </h2>

        <p className="booking-description">
          Whether it's witnessing the Great Migration, exploring the vast
          plains of the Maasai Mara, discovering Dubai's golden deserts or
          experiencing Southern Africa's breathtaking wilderness, we'll create
          a safari designed entirely around you.
        </p>

        <Link
          to="/book-now"
          className="booking-button"
        >
          Plan My Safari
        </Link>

        <p className="booking-note">
          Every journey supports responsible tourism by empowering local
          communities and protecting Africa's extraordinary natural heritage.
        </p>

      </div>

    </section>
  );
}

export default BookingCTA;