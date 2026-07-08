function Destinations(){

const destinations = [

{
region:"East Africa",
name:"Kenya",
description:
"Witness the Great Migration, explore the Maasai Mara, and experience the Big Five.",
image:
"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e"
},


{
region:"Middle East",
name:"Dubai",
description:
"Experience golden dunes, desert adventures and Arabian culture.",
image:
"https://images.unsplash.com/photo-1509316785289-025f5b846b35"
},


{
region:"Southern Africa",
name:"South Africa",
description:
"Discover Kruger National Park and unforgettable wildlife encounters.",
image:
"https://images.unsplash.com/photo-1512100356356-de1b84283e18"
},


{
region:"East Africa",
name:"East Africa",
description:
"Explore Tanzania, Uganda and Rwanda's untouched wilderness.",
image:
"https://images.unsplash.com/photo-1535941339077-2dd1c7963098"
}

];


return(

<section className="destinations">


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


<span>
{destination.region}
</span>


<h3>
{destination.name}
</h3>


<p>
{destination.description}
</p>


<button>
Explore
</button>


</div>


</div>


))
}


</div>


</section>

)

}


export default Destinations;