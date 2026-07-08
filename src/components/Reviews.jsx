import { useEffect, useState } from "react";
import api from "../api/axios";


function Reviews(){


const [reviews,setReviews] = useState([]);




// Fetch approved customer reviews

useEffect(()=>{


api.get("/reviews")

.then((res)=>{

setReviews(res.data);

})

.catch((err)=>{

console.log(err);

});


},[]);





return(


<section className="
reviews
">


<div className="
review-header
">


<span className="
section-tag
">

TRAVEL STORIES

</span>





<h2>

Loved By <em>Adventurers</em>

</h2>





<p>

Real experiences from travelers who explored Africa with us.

</p>


</div>







<div className="
review-grid
">



{

reviews.map((review)=>(



<div

key={review.id}

className="
review-card
"

>



<div className="
stars
">

{"⭐".repeat(review.rating)}

</div>





<p className="
review-message
">

"{review.message}"

</p>






<div className="
review-author
">


<h4>

{review.name}

</h4>



<span>

{review.location}

</span>


</div>





</div>



))


}





</div>




</section>



)


}


export default Reviews;