import "./MemoriesGallery.css";


function MemoriesGallery() {


    const memories = [

        {
            image:
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
            alt:"African safari landscape",
        },


        {
            image:
            "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80",
            alt:"Safari wildlife",
        },


        {
            image:
            "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=900&q=80",
            alt:"Safari adventure",
        },


        {
            image:
            "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80",
            alt:"African wilderness",
        },


        {
            image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
            alt:"Travel experience",
        },


        {
            image:
            "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=900&q=80",
            alt:"Safari journey",
        },

    ];





    return (

        <section
        id="memories"
        className="memories-section"
        >



            <div className="memories-container">





                <div className="memories-header">


                    <span className="memories-tag">

                        Memories

                    </span>





                    <h2>

                        Moments That Stay

                        <span>

                            Forever

                        </span>

                    </h2>





                    <p>

                        A collection of unforgettable moments,
                        breathtaking landscapes and experiences
                        shared with travellers across Africa.

                    </p>



                </div>








                <div className="memories-grid">


                    {
                    memories.map((memory,index)=>(


                        <div

                        key={index}

                        className={`
                        memory-card
                        ${
                            index === 0 || index === 3
                            ?
                            "memory-tall"
                            :
                            ""
                        }
                        `}

                        >


                            <img

                            src={memory.image}

                            alt={memory.alt}

                            />


                            <div className="memory-overlay"></div>


                        </div>


                    ))

                    }


                </div>





            </div>




        </section>


    )


}


export default MemoriesGallery;