function Story() {
  return (
    <section
      id="story"
      className="
        bg-[#FAF6EE]
        py-24
        px-6
        md:px-12
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >

        {/* IMAGE */}

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
            alt="Safari experience"
            className="
              w-full
              h-[600px]
              object-cover
              rounded-xl
              shadow-2xl
            "
          />


          <div
            className="
              absolute
              bottom-8
              right-8
              bg-[#2D5016]
              text-white
              px-8
              py-6
              rounded-lg
              shadow-xl
            "
          >

            <h3
              className="
                font-serif
                text-5xl
                text-[#D4A940]
              "
            >
              100+
            </h3>


            <p
              className="
                uppercase
                tracking-[0.2em]
                text-xs
                mt-2
              "
            >
              Journeys Created
            </p>


          </div>

        </div>



        {/* TEXT */}

        <div>


          <span
            className="
              uppercase
              tracking-[0.3em]
              text-sm
              font-semibold
              text-[#C4873A]
            "
          >
            Our Experiences
          </span>



          <h2
            className="
              font-serif
              text-5xl
              text-[#2C1810]
              mt-5
              leading-tight
            "
          >
            More Than A Safari,
            <br />

            <em
              className="
                text-[#4A7A2B]
              "
            >
              A Lifetime Memory
            </em>

          </h2>



          <p
            className="
              mt-8
              text-[#6B5744]
              text-lg
              leading-8
            "
          >
            Every journey with Joven Safaris is designed to be more
            than a visit. It is an opportunity to connect with Africa's
            landscapes, wildlife and communities in a meaningful way.
          </p>



          <p
            className="
              mt-6
              text-[#6B5744]
              text-lg
              leading-8
            "
          >
            From unforgettable wildlife encounters to cultural
            experiences with local communities, we create journeys
            that become stories our guests carry with them forever.
          </p>



          <div
            className="
              grid
              md:grid-cols-2
              gap-8
              mt-12
            "
          >

            <div>

              <h3
                className="
                  font-serif
                  text-3xl
                  text-[#D4A940]
                "
              >
                4
              </h3>

              <p
                className="
                  uppercase
                  tracking-[0.15em]
                  text-xs
                  text-[#6B5744]
                  mt-2
                "
              >
                Destinations
              </p>

            </div>



            <div>

              <h3
                className="
                  font-serif
                  text-3xl
                  text-[#D4A940]
                "
              >
                98%
              </h3>

              <p
                className="
                  uppercase
                  tracking-[0.15em]
                  text-xs
                  text-[#6B5744]
                  mt-2
                "
              >
                Happy Guests
              </p>

            </div>


          </div>


        </div>


      </div>


    </section>
  );
}

export default Story;