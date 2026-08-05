import { useState } from "react";

function EmergencyContact({
    formData,
    updateFormData,
    nextStep,
    previousStep
}) {

    const [error, setError] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        if (
            !formData.emergency_contact_name ||
            !formData.emergency_contact_phone ||
            !formData.emergency_contact_relationship
        ) {

            setError(
                "Please complete emergency contact details before continuing."
            );

            return;

        }

        setError("");

        nextStep();

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="booking-step"
        >

            <div className="step-header">

                <h2>
                    Emergency Contact
                </h2>

                <p>
                    Provide someone we can reach if needed during your safari.
                </p>

            </div>

            {
                error && (

                    <div className="form-error">

                        <span>
                            ⚠
                        </span>

                        <p>
                            {error}
                        </p>

                    </div>

                )
            }

            {/* CONTACT NAME */}

            <div className="form-group">

                <label>
                    Contact Name *
                </label>

                <input
                    type="text"
                    value={formData.emergency_contact_name}
                    onChange={(e) =>
                        updateFormData(
                            "emergency_contact_name",
                            e.target.value
                        )
                    }
                    placeholder="Emergency contact full name"
                />

            </div>

            {/* CONTACT PHONE */}

            <div className="form-group">

                <label>
                    Contact Phone *
                </label>

                <input
                    type="tel"
                    value={formData.emergency_contact_phone}
                    onChange={(e) =>
                        updateFormData(
                            "emergency_contact_phone",
                            e.target.value
                        )
                    }
                    placeholder="+254..."
                />

            </div>

            {/* RELATIONSHIP */}

            <div className="form-group">

                <label>
                    Relationship *
                </label>

                <select
                    value={formData.emergency_contact_relationship}
                    onChange={(e) =>
                        updateFormData(
                            "emergency_contact_relationship",
                            e.target.value
                        )
                    }
                >

                    <option value="">
                        Select relationship
                    </option>

                    <option value="Spouse">
                        Spouse
                    </option>

                    <option value="Parent">
                        Parent
                    </option>

                    <option value="Sibling">
                        Sibling
                    </option>

                    <option value="Child">
                        Child
                    </option>

                    <option value="Friend">
                        Friend
                    </option>

                    <option value="Relative">
                        Relative
                    </option>

                    <option value="Guardian">
                        Guardian
                    </option>

                    <option value="Other">
                        Other
                    </option>

                </select>

            </div>

            {/* PERSONALIZE YOUR SAFARI */}

            <div className="form-group">

                <label>
                    Help us personalize your safari
                </label>

                <textarea
                    rows="5"
                    value={formData.special_requests}
                    onChange={(e) =>
                        updateFormData(
                            "special_requests",
                            e.target.value
                        )
                    }
                    placeholder="Dietary requirements, honeymoon arrangements, accessibility needs, birthday celebrations, photography interests, airport pickup preferences, or anything else you'd like us to know. (Optional)"
                />

                <small className="form-helper">
                    Optional — the more we know, the better we can tailor your safari.
                </small>

            </div>

            {/* BUTTONS */}

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

export default EmergencyContact;