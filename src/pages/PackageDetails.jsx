import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../api/axios";



function PackageDetails(){


  const { id } = useParams();


  const [pkg, setPkg] = useState(null);





  // =========================
  // FETCH SINGLE PACKAGE
  // =========================

  useEffect(()=>{


    api.get(`/packages/${id}`)

    .then((res)=>{


      setPkg(res.data);


    })

    .catch((err)=>{


      console.log(err);


    });


  },[id]);







  // =========================
  // LOADING STATE
  // =========================

  if(!pkg){


    return(

      <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#FAF6EE]
      text-[#2C1810]
      text-xl
      font-serif
      ">

        Loading safari experience...

      </div>

    )

  }








  return(


<section className="
bg-[#FAF6EE]
min-h-screen
py-20
px-6
">





<div className="
max-w-6xl
mx-auto
">






{/* =========================
    SAFARI IMAGE CARD
========================= */}



<div className="
relative
h-[420px]
md:h-[520px]
rounded-2xl
overflow-hidden
shadow-xl
group
">





{/* IMAGE */}


{

pkg.image_url ? (


<img

src={pkg.image_url}

alt={pkg.title}

className="
absolute
inset-0
w-full
h-full
object-cover
transition
duration-700
group-hover:scale-105
"

/>


)

:

(


<div className="
absolute
inset-0
bg-gray-300
flex
items-center
justify-center
text-gray-500
">

Safari Image

</div>


)

}







{/* OVERLAY */}


<div className="
absolute
inset-0
bg-gradient-to-t
from-black/90
via-black/40
to-transparent
"/>







{/* HERO CONTENT */}


<div className="
absolute
bottom-0
left-0
right-0
p-8
md:p-12
text-white
">





<p className="
uppercase
tracking-[0.35em]
text-xs
text-[#D4A940]
font-semibold
mb-4
">

{pkg.destination}

</p>






<h1 className="
text-4xl
md:text-6xl
font-serif
leading-tight
max-w-3xl
">

{pkg.title}

</h1>







<div className="
flex
flex-wrap
gap-6
mt-6
text-gray-200
text-sm
md:text-base
">


<span>

⏱ {pkg.duration}

</span>




<span>

💰 KSh {pkg.price.toLocaleString()}

</span>


</div>






</div>




</div>









{/* =========================
    PACKAGE DETAILS
========================= */}



<div className="
bg-white
rounded-2xl
shadow-lg
mt-10
p-8
md:p-12
">







<h2 className="
text-3xl
md:text-4xl
font-serif
text-[#2C1810]
mb-6
">

About This Journey

</h2>







<p className="
text-gray-600
leading-8
max-w-4xl
">

{pkg.description}

</p>









{/* PRICE + CTA */}


<div className="
mt-10
pt-8
border-t
flex
flex-col
md:flex-row
justify-between
items-start
md:items-center
gap-6
">







<div>


<p className="
text-xs
uppercase
tracking-[0.2em]
text-gray-500
">

Starting From

</p>



<h3 className="
text-3xl
font-bold
text-[#8B4513]
mt-2
">

KSh {pkg.price.toLocaleString()}

</h3>


</div>









<button

className="
bg-[#2C1810]
text-white
px-10
py-4
rounded
font-semibold
transition
duration-300
hover:bg-[#C4873A]
"

>

Book This Safari

</button>






</div>







</div>






</div>



</section>


  )


}



export default PackageDetails;