function Sustainability() {

  const cards = [
    {
      icon: "🌳",
      title: "Reforestation Partnership",
      description:
        "Every guest plants a tree through our partnership with Kenya Forestry Service, helping restore indigenous forests and wildlife habitats."
    },

    {
      icon: "♻️",
      title: "Low Impact Travel",
      description:
        "We promote responsible tourism through eco-friendly practices, local sourcing and reducing unnecessary environmental impact."
    },

    {
      icon: "🐘",
      title: "Wildlife Conservation",
      description:
        "Part of every booking supports conservation initiatives that protect Africa's wildlife and natural ecosystems."
    }
  ];


  return (

    <section 
      id="sustainability" 
      className="sustainability"
    >


      <div className="sustainability-bg">
        ECO
      </div>



      <div className="sustainability-container">


        <div className="sustainability-header">


          <div>

            <span className="section-tag">
              OUR COMMITMENT
            </span>


            <h2>
              Travel That <em>Gives Back</em>
            </h2>

          </div>



          <p>

            Sustainability isn't a checkbox for us —
            it is the foundation of everything we do.

            We believe the future of safari depends on
            wild landscapes, empowered communities and
            an educated next generation.

          </p>


        </div>





        <div className="sustainability-grid">


          {
            cards.map((card,index)=>(


              <div
                key={index}
                className="sustainability-card"
              >


                <div className="sustainability-icon">
                  {card.icon}
                </div>



                <h3>
                  {card.title}
                </h3>



                <p>
                  {card.description}
                </p>


              </div>


            ))
          }



        </div>


      </div>


    </section>

  );

}


export default Sustainability;