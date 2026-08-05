function MemoriesGallery() {

  const memories = [
    {
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
      alt: "African safari landscape",
    },

    {
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80",
      alt: "Safari wildlife",
    },

    {
      image:
        "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=900&q=80",
      alt: "Safari adventure",
    },

    {
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80",
      alt: "African wilderness",
    },

    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      alt: "Travel experience",
    },

    {
      image:
        "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=900&q=80",
      alt: "Safari journey",
    },
  ];


  return (

    <section
      id="memories"
      className="
        bg-[#FAF6EE]
        py-28
        px-6
        md:px-12
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
        "
      >


        {/* HEADER */}

        <div
          className="
            max-w-3xl
            mx-auto
            mb-16
            flex
            flex-col
            items-center
            text-center
          "
        >

          <span
            className="
              uppercase
              tracking-[0.3em]
              text-xs
              font-semibold
              text-[#C4873A]
            "
          >
            Memories
          </span>



          <h2
            className="
              font-serif
              text-5xl
              md:text-6xl
              leading-tight
              text-[#2C1810]
              mt-5
            "
          >

            Moments That Stay

            <br />

            <em
              className="
                text-[#4A7A2B]
                font-normal
              "
            >
              Forever
            </em>

          </h2>



          <p
            className="
              mt-6
              max-w-2xl
              text-[#6B5744]
              text-lg
              leading-8
            "
          >

            A collection of unforgettable moments,
            breathtaking landscapes and experiences
            shared with travellers across Africa.

          </p>


        </div>





        {/* GALLERY */}


        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            auto-rows-[300px]
          "
        >


          {
            memories.map((memory,index)=>(

              <div
                key={index}
                className={`
                  group
                  overflow-hidden
                  rounded-xl
                  shadow-xl
                  ${
                    index === 0 || index === 3
                    ? "lg:row-span-2"
                    : ""
                  }
                `}
              >


                <img

                  src={memory.image}

                  alt={memory.alt}

                  className="
                    w-full
                    h-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "

                />


              </div>


            ))
          }


        </div>


      </div>


    </section>

  );

}


export default MemoriesGallery;