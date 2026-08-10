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
"Thank you for choosing us, your review is well received. We look forward to hosting you again!"
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

We hope you had a memorable experience with us! 
 We'd love to hear your thoughts - kindly rate your safari and share a short review, 
Your feedback helps us improve and also guide future travellers.


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

placeholder="Country of Origin"

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

placeholder="Review"

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