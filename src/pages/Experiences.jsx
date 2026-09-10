import ExperienceHero from "../components/experiences/ExperienceHero";
import MemoriesGallery from "../components/experiences/MemoriesGallery";
import Story from "../components/experiences/Story";
import ExperienceCTA from "../components/experiences/ExperiencesCTA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";

function Experiences() {
  return (
    <>
      <SEO
        title="Experiences | Joven Safaris"
        description="Explore unique experiences and adventures with Joven Safaris."
        canonical="/experiences"
      />
      <Navbar />
      <ExperienceHero />
      <Story />
      <MemoriesGallery />
      <ExperienceCTA />
      <Footer />

    </>
  );
}

export default Experiences;