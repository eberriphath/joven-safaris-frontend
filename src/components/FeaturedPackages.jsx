import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";



function FeaturedPackages(){


    // Stores packages fetched from backend

    const [packages, setPackages] = useState([]);





    // Fetch safari packages from backend

    useEffect(()=>{


        api.get("/packages")

        .then((res)=>{


            setPackages(res.data);


        })

        .catch((err)=>{


            console.log(err);


        });


    },[]);






    return(


<section className="featured-packages">



{/* =========================
    SECTION HEADER
========================= */}


<div className="featured-header">


<span className="section-tag">

FEATURED SAFARIS

</span>



<h2>

Explore Our <em>Wild Journeys</em>

</h2>



<p>

Carefully crafted safari experiences designed
around unforgettable moments in Africa.

</p>


</div>







{/* =========================
    PACKAGE CARDS GRID
========================= */}



<div className="package-grid">



{

packages.map((pkg)=>(



<div

className="package-card"

key={pkg.id}

>





{/* =========================
    PACKAGE IMAGE
========================= */}



{

pkg.image_url ? (


<img

src={pkg.image_url}

alt={pkg.title}

loading="lazy"

/>


) : (


<div className="h-[250px] flex items-center justify-center bg-gray-200">

Safari Image

</div>


)

}







{/* =========================
    PACKAGE INFORMATION
========================= */}



<div className="package-content">



<span>

{pkg.destination}

</span>





<h3>

{pkg.title}

</h3>





<p>

{pkg.description}

</p>







{/* =========================
    PRICE + DETAILS BUTTON
========================= */}



<div className="package-footer">



<strong>

KSh {pkg.price.toLocaleString()}

</strong>





<Link

to={`/packages/${pkg.id}`}

className="
bg-[var(--gold)]
px-6
py-2
font-semibold
rounded
hover:opacity-80
transition
"

>

View →

</Link>





</div>





</div>





</div>



))


}



</div>





</section>


    )


}



export default FeaturedPackages;