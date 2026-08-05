import "./ProgressIndicator.css";


function ProgressIndicator({ step }) {


    const steps = [
        "Personal",
        "Travel",
        "Travellers",
        "Emergency",
        "Review"
    ];



    return (

        <div className="progress-wrapper">


            <div className="progress-container">


                {
                    steps.map((item, index) => {


                        const stepNumber = index + 1;

                        const active = stepNumber <= step;



                        return (

                            <div
                            key={item}
                            className="progress-step"
                            >



                                {/* STEP CIRCLE */}

                                <div
                                className={`
                                progress-circle
                                ${active ? "active" : "inactive"}
                                `}
                                >

                                    {stepNumber}

                                </div>







                                {/* STEP LABEL */}

                                <span
                                className={`
                                progress-label
                                ${active ? "active" : "inactive"}
                                `}
                                >

                                    {item}

                                </span>







                                {/* CONNECTING LINE */}

                                {
                                    stepNumber !== steps.length && (

                                        <div
                                        className={`
                                        progress-line
                                        ${
                                            stepNumber < step
                                            ?
                                            "completed"
                                            :
                                            "pending"
                                        }
                                        `}
                                        >

                                        </div>

                                    )
                                }




                            </div>

                        );


                    })
                }



            </div>


        </div>

    );


}


export default ProgressIndicator;