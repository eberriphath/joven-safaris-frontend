import "./Story.css";


function Story() {

  return (

    <section
      id="story"
      className="story-section"
    >

      <div className="story-container">


        {/* IMAGE */}

        <div className="story-image-wrapper">


          <img

            src="https://res.cloudinary.com/qnyhrcim/image/upload/v1786318079/65af095d-185b-4eee-af8d-8d9c5f1a30e8_FE7ECF6A-0F6C-4725-8FC6-2ABE38546B37_sxbmmg.jpg"

            alt="Safari experience"

            className="story-image"

          />



          <div className="story-image-overlay"></div>





          <div className="story-stat-card">


            <h3>
              100+
            </h3>


            <p>
              Journeys Created
            </p>


          </div>


        </div>









        {/* TEXT */}


        <div className="story-content">


          <span className="story-tag">

            Our Experiences

          </span>





          <h2>

            More Than A Safari,

            <br />

            <em>
              A Lifetime Memory
            </em>


          </h2>







          <p>

            Every journey with Joven Safaris is designed to be
            more than a visit. It is an opportunity to connect
            with Africa's landscapes, wildlife and communities
            in a meaningful way.

          </p>






          <p>

            From unforgettable wildlife encounters to cultural
            experiences with local communities, we create journeys
            that become stories our guests carry with them forever.

          </p>







          <div className="story-stats">


            <div>

              <h3>
                4
              </h3>

              <span>
                Destinations
              </span>


            </div>





            <div>

              <h3>
                98%
              </h3>

              <span>
                Happy Guests
              </span>


            </div>



          </div>




        </div>



      </div>


    </section>

  );


}


export default Story;