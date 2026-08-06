import ExperienceHero from "../components/experiences/ExperienceHero";
import MemoriesGallery from "../components/experiences/MemoriesGallery";
import Story from "../components/experiences/Story";
import ExperienceCTA from "../components/experiences/ExperiencesCTA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Experiences() {
  return (
    <>
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