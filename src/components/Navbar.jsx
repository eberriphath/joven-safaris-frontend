import { Link } from "react-router-dom";

function Navbar(){

return(

<nav className="navbar">

<a className="logo">
Joven <span>Safaris</span>
</a>


<ul>

<li>Destinations</li>
<li>Sustainability</li>
<li>Experiences</li>
<li>Impact</li>

<li>
<button>
<Link to="/book-now">

    Book Now

</Link>
</button>
</li>

</ul>


</nav>

)

}


export default Navbar;