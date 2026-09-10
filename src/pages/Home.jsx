import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Destinations from "../components/Destinations";
import Sustainability from "../components/Sustainability";
import FeaturedPackages from "../components/FeaturedPackages";
import Reviews from "../components/Reviews";
import ReviewForm from "../components/ReviewForm";
import BookingCTA from "../components/BookingCTA";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Joven Safaris | Luxury African Safaris & Tours"
        description="Discover unforgettable safari journeys across Kenya, East Africa, South Africa and beyond with Joven Safaris."
        canonical="/"
      />

      <div>
        <Navbar />

        <Hero />

        <About />

        <Destinations />

        <FeaturedPackages />

        <Sustainability />

        <Reviews />

        <ReviewForm />

        <BookingCTA />

        <Footer />
      </div>
    </>
  );
}

export default Home;