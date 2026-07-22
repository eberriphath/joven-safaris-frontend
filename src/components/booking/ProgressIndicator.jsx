function ProgressIndicator({ step }) {


    const steps = [
        "Personal",
        "Travel",
        "Travellers",
        "Emergency",
        "Review"
    ];



    return (

        <div className="
        mb-10
        ">

            <div className="
            flex
            justify-between
            items-center
            ">


                {
                    steps.map((item,index)=>{


                        const stepNumber = index + 1;

                        const active = stepNumber <= step;


                        return (

                            <div
                            key={item}
                            className="
                            flex
                            flex-col
                            items-center
                            relative
                            flex-1
                            "
                            >


                                {/* CIRCLE */}

                                <div
                                className={`
                                w-10
                                h-10
                                rounded-full
                                flex
                                items-center
                                justify-center
                                font-semibold
                                transition

                                ${
                                    active
                                    ?
                                    "bg-[#C4873A] text-white"
                                    :
                                    "bg-gray-200 text-gray-500"
                                }

                                `}
                                >

                                    {stepNumber}

                                </div>





                                {/* LABEL */}

                                <span
                                className={`
                                text-xs
                                mt-3
                                font-medium

                                ${
                                    active
                                    ?
                                    "text-[#2C1810]"
                                    :
                                    "text-gray-400"
                                }

                                `}
                                >

                                    {item}

                                </span>






                                {/* LINE */}

                                {
                                    stepNumber !== steps.length && (

                                        <div
                                        className={`
                                        absolute
                                        top-5
                                        left-1/2
                                        w-full
                                        h-[2px]
                                        -z-10

                                        ${
                                            stepNumber < step
                                            ?
                                            "bg-[#C4873A]"
                                            :
                                            "bg-gray-200"
                                        }

                                        `}
                                        >

                                        </div>

                                    )
                                }



                            </div>

                        )


                    })
                }


            </div>


        </div>

    )


}


export default ProgressIndicator;