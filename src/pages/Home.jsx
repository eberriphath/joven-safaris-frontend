import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Destinations from "../components/Destinations";
import Sustainability from "../components/Sustainability";
import FeaturedPackages from "../components/FeaturedPackages";
import PackageDetails from "../pages/PackageDetails";
import Reviews from "../components/Reviews"
import ReviewForm from "../components/ReviewForm";


function Home(){

return(

<div>

<Navbar/>

<Hero/>

<About/>

<Destinations/>

<FeaturedPackages/>

<Sustainability/>

<Reviews/>

<ReviewForm/>

</div>

)

}

export default Home;