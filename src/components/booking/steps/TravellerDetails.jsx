function TravellerDetails({
    formData,
    updateFormData,
    nextStep,
    previousStep
}) {

    function updateTravellerCount(field, value, ageField) {

        let count = Number(value);

        if (isNaN(count) || count < 0) {
            count = 0;
        }

        count = Math.floor(count);

        updateFormData(field, count);

        if (ageField) {

            const currentAges = [
                ...(formData[ageField] || [])
            ];

            if (count > currentAges.length) {

                const additionalAges =
                    Array(count - currentAges.length).fill("");

                updateFormData(
                    ageField,
                    [
                        ...currentAges,
                        ...additionalAges
                    ]
                );

            } else {

                updateFormData(
                    ageField,
                    currentAges.slice(0, count)
                );

            }

        }

    }


    function increase(field, ageField) {

        const currentValue =
            Number(formData[field]) || 0;

        updateTravellerCount(
            field,
            currentValue + 1,
            ageField
        );

    }


    function decrease(field, ageField) {

        const currentValue =
            Number(formData[field]) || 0;

        if (currentValue <= 0) {
            return;
        }

        updateTravellerCount(
            field,
            currentValue - 1,
            ageField
        );

    }


    function updateChildAge(
        ageField,
        index,
        value
    ) {

        const updatedAges = [
            ...(formData[ageField] || [])
        ];

        updatedAges[index] = value;

        updateFormData(
            ageField,
            updatedAges
        );

    }


    function handleSubmit(e) {

        e.preventDefault();

        nextStep();

    }


    return (

        <form
            onSubmit={handleSubmit}
            className="booking-step"
        >

            {/* =========================
                HEADER
            ========================= */}

            <div className="step-header">

                <h2>
                    Traveller Information
                </h2>

                <p>
                    Tell us who will be joining this safari.
                </p>

            </div>


            {/* =========================
                RESIDENTS
            ========================= */}

            <div className="traveller-card">

                <div className="traveller-card-header">

                    <div>

                        <h3>
                            Residents
                        </h3>

                        <p>
                            Kenyan residents travelling on this safari.
                        </p>

                    </div>

                </div>


                <TravellerCounter
                    label="Adults"
                    value={formData.resident_adults}
                    onIncrease={() =>
                        increase("resident_adults")
                    }
                    onDecrease={() =>
                        decrease("resident_adults")
                    }
                    onChange={(value) =>
                        updateTravellerCount(
                            "resident_adults",
                            value
                        )
                    }
                />


                <TravellerCounter
                    label="Children"
                    value={formData.resident_children}
                    onIncrease={() =>
                        increase(
                            "resident_children",
                            "resident_children_ages"
                        )
                    }
                    onDecrease={() =>
                        decrease(
                            "resident_children",
                            "resident_children_ages"
                        )
                    }
                    onChange={(value) =>
                        updateTravellerCount(
                            "resident_children",
                            value,
                            "resident_children_ages"
                        )
                    }
                />


                {/* RESIDENT CHILDREN */}

                {formData.resident_children > 0 && (

                    <ChildrenAges
                        title="Resident children"
                        ages={
                            formData.resident_children_ages || []
                        }
                        ageField="resident_children_ages"
                        updateChildAge={updateChildAge}
                    />

                )}

            </div>


            {/* =========================
                NON-RESIDENTS
            ========================= */}

            <div className="traveller-card">

                <div className="traveller-card-header">

                    <div>

                        <h3>
                            Non-Residents
                        </h3>

                        <p>
                            International or non-resident travellers.
                        </p>

                    </div>

                </div>


                <TravellerCounter
                    label="Adults"
                    value={formData.non_resident_adults}
                    onIncrease={() =>
                        increase("non_resident_adults")
                    }
                    onDecrease={() =>
                        decrease("non_resident_adults")
                    }
                    onChange={(value) =>
                        updateTravellerCount(
                            "non_resident_adults",
                            value
                        )
                    }
                />


                <TravellerCounter
                    label="Children"
                    value={formData.non_resident_children}
                    onIncrease={() =>
                        increase(
                            "non_resident_children",
                            "non_resident_children_ages"
                        )
                    }
                    onDecrease={() =>
                        decrease(
                            "non_resident_children",
                            "non_resident_children_ages"
                        )
                    }
                    onChange={(value) =>
                        updateTravellerCount(
                            "non_resident_children",
                            value,
                            "non_resident_children_ages"
                        )
                    }
                />


                {/* NON-RESIDENT CHILDREN */}

                {formData.non_resident_children > 0 && (

                    <ChildrenAges
                        title="Non-resident children"
                        ages={
                            formData.non_resident_children_ages || []
                        }
                        ageField="non_resident_children_ages"
                        updateChildAge={updateChildAge}
                    />

                )}

            </div>


            {/* =========================
                AGE INFORMATION
            ========================= */}

            <div className="traveller-age-note">

                <span className="traveller-age-note-icon">
                    i
                </span>

                <div>

                    <strong>
                        Children’s ages
                    </strong>

                    <p>
                        Please enter the actual age of every child
                        travelling. Children are grouped into
                        0–4, 5–12 and 13–18 years.
                    </p>

                </div>

            </div>


            {/* =========================
                BUTTONS
            ========================= */}

            <div className="step-actions">

                <button
                    type="button"
                    onClick={previousStep}
                    className="
                    step-button
                    step-button-secondary
                    "
                >
                    ← Back
                </button>


                <button
                    type="submit"
                    className="
                    step-button
                    step-button-primary
                    "
                >
                    Continue →
                </button>

            </div>

        </form>

    );

}


/* =====================================================
   TRAVELLER COUNTER
===================================================== */

function TravellerCounter({
    label,
    value,
    onIncrease,
    onDecrease,
    onChange
}) {

    return (

        <div className="traveller-counter-row">

            <div className="traveller-counter-label">

                <span>
                    {label}
                </span>

            </div>


            <div className="traveller-counter-controls">

                <button
                    type="button"
                    onClick={onDecrease}
                    className="traveller-counter-button"
                    aria-label={`Decrease ${label}`}
                >
                    −
                </button>


                <input
                    type="number"
                    min="0"
                    value={value}
                    onFocus={(e) => {
                        if (Number(value) === 0) {
                            e.target.select();
                        }
                    }}
                    onChange={(e) => onChange(e.target.value)}
                    className="traveller-counter-input"
                    aria-label={`${label} number`}
                />


                <button
                    type="button"
                    onClick={onIncrease}
                    className="traveller-counter-button"
                    aria-label={`Increase ${label}`}
                >
                    +
                </button>

            </div>

        </div>

    );

}


/* =====================================================
   CHILDREN AGES
===================================================== */

function ChildrenAges({
    title,
    ages,
    ageField,
    updateChildAge
}) {

    return (

        <div className="children-ages-section">

            <div className="children-ages-header">

                <div>

                    <h4>
                        {title} — ages
                    </h4>

                    <p>
                        Enter the age of each child.
                    </p>

                </div>

                <span className="children-count-badge">
                    {ages.length}
                    {ages.length === 1 ? " child" : " children"}
                </span>

            </div>


            <div className="children-age-grid">

                {ages.map((age, index) => (

                    <div
                        className="child-age-field"
                        key={index}
                    >

                        <label>
                            Child {index + 1}
                        </label>

                        <div className="child-age-input-wrapper">

                            <input
                                type="number"
                                min="0"
                                max="18"
                                value={age}
                                onChange={(e) =>
                                    updateChildAge(
                                        ageField,
                                        index,
                                        e.target.value
                                    )
                                }
                                placeholder="Age"
                                required
                            />

                            <span>
                                years
                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}


export default TravellerDetails;