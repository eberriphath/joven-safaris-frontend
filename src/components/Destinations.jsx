import { Link } from "react-router-dom";


function Destinations(){

const destinations = [

{
region:"East Africa",
name:"Kenya",
path:"/destinations/kenya",
description:
"Witness the Great Migration, explore the Maasai Mara, and experience the Big Five.",
image:
"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e"
},


{
region:"Middle East",
name:"Dubai",
path:"/destinations/dubai",
description:
"Experience golden dunes, desert adventures and Arabian culture.",
image:
"https://images.unsplash.com/photo-1509316785289-025f5b846b35"
},


{
region:"Southern Africa",
name:"South Africa",
path:"/destinations/south-africa",
description:
"Discover Kruger National Park and unforgettable wildlife encounters.",
image:
"https://images.unsplash.com/photo-1512100356356-de1b84283e18"
},


{
region:"East Africa",
name:"East Africa",
path:"/destinations/east-africa",
description:
"Explore Tanzania, Uganda and Rwanda's untouched wilderness.",
image:
"https://images.unsplash.com/photo-1535941339077-2dd1c7963098"
}

];


return(

<section 
id="destinations" 
className="destinations scroll-mt-28"
>

<div className="destination-header">


<span className="section-tag">
WHERE WE GO
</span>


<h2>
Four <em>Worlds</em>, One Journey
</h2>


<p>
From Kenya's savannahs to Dubai's deserts and beyond,
we create unforgettable adventures.
</p>


</div>



<div className="destination-grid">


{
destinations.map((destination,index)=>(


<div 
className="destination-card"
key={index}
>


<img
src={destination.image}
alt={destination.name}
/>



<div className="destination-overlay">


<span className="destination-region">
{destination.region}
</span>



<h3 className="destination-name">
{destination.name}
</h3>



<p className="destination-description">
{destination.description}
</p>



<Link

to={destination.path}

className="destination-button"

>

Explore

</Link>



</div>


</div>


))
}


</div>


</section>

)

}


export default Destinations;