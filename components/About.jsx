function About(){

const values = [
    {
        icon:"🌱",
        title:"Every visitor plants a tree",
        text:"Every guest contributes to our tree planting programme, helping restore Africa's natural landscapes."
    },

    {
        icon:"📚",
        title:"Education for communities",
        text:"A portion of every booking supports education initiatives for children in underserved communities."
    },

    {
        icon:"🤝",
        title:"Community-first tourism",
        text:"We work with local guides, businesses and communities to ensure tourism creates lasting impact."
    }
];


return(

<section className="about">


<div className="about-container">


<div className="about-image">

<img 
src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa"
alt="Safari landscape"
/>


<div className="about-badge">

<h3>
10+
</h3>

<p>
Years of Responsible Safari Excellence
</p>

</div>


</div>




<div className="about-content">


<span className="section-tag">
WHO WE ARE
</span>


<h2>
Safari With A <em>Soul</em>
</h2>


<p className="about-description">

Joven Safaris was created from a deep love for Africa's wild places and the communities that protect them.

We craft immersive safari experiences built around adventure, sustainability and meaningful impact.

</p>



<div className="values">


{
values.map((value,index)=>(

<div 
className="value"
key={index}
>


<div className="value-icon">
{value.icon}
</div>


<div>

<h4>
{value.title}
</h4>

<p>
{value.text}
</p>

</div>


</div>

))
}



</div>


</div>


</div>


</section>

)

}


export default About;