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

    <section className="sustainability">

      <div className="sustainability-header">

        <span className="section-tag">
          OUR COMMITMENT
        </span>

        <h2>
          Travel That <em>Gives Back</em>
        </h2>

        <p>

          Sustainability isn't an add-on.

          It's the foundation of every safari we create.

        </p>

      </div>


      <div className="sustainability-grid">

        {

          cards.map((card, index) => (

            <div
              key={index}
              className="sustainability-card"
            >

              <div className="icon">
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

    </section>

  );

}

export default Sustainability;