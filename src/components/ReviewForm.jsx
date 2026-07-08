import { useState } from "react";
import api from "../api/axios";


function ReviewForm(){


const [formData,setFormData] = useState({

name:"",
location:"",
rating:5,
message:""

});


const [status,setStatus] = useState("");





function handleChange(e){


setFormData({

...formData,

[e.target.name]:e.target.value

});


}






function submitReview(e){

e.preventDefault();


api.post("/reviews",formData)

.then(()=>{


setStatus(
"Thank you! Your review has been submitted and is awaiting approval."
);


setFormData({

name:"",
location:"",
rating:5,
message:""

});


})


.catch((err)=>{


console.log(err);


setStatus(
"Something went wrong. Please try again."
);


});


}





return(


<section className="review-form-section">


<div className="review-form-container">


<div className="review-form-header">


<span className="section-tag">

SHARE YOUR EXPERIENCE

</span>


<h2>

Tell Us About Your <em>Journey</em>

</h2>


<p>

Your story helps other travellers discover Africa.

</p>


</div>





<form
onSubmit={submitReview}
className="review-form"
>



<input

type="text"

name="name"

placeholder="Your name"

value={formData.name}

onChange={handleChange}

required

/>





<input

type="text"

name="location"

placeholder="Location"

value={formData.location}

onChange={handleChange}

/>





<select

name="rating"

value={formData.rating}

onChange={handleChange}

>


<option value="5">
⭐⭐⭐⭐⭐
</option>


<option value="4">
⭐⭐⭐⭐
</option>


<option value="3">
⭐⭐⭐
</option>


<option value="2">
⭐⭐
</option>


<option value="1">
⭐
</option>


</select>






<textarea

name="message"

placeholder="Write your safari experience..."

value={formData.message}

onChange={handleChange}

required

/>






<button>

Submit Review

</button>



</form>





{

status && (

<p className="review-status">

{status}

</p>

)

}



</div>


</section>


)


}


export default ReviewForm;