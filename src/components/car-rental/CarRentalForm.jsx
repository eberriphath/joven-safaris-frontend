import { useState } from "react";
import api from "../../api/axios";

function CarRentalForm() {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",

        vehicle_type: "",

        pickup_location: "",
        pickup_date: "",
        pickup_time: "",

        dropoff_location: "",
        dropoff_date: "",
        dropoff_time: "",

        driver_age: "",
        driving_license_number: "",
        license_country: "",

        special_requests: ""
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function updateField(field, value) {
        setFormData(previous => ({
            ...previous,
            [field]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            await api.post("/car-rentals", {
                ...formData,
                driver_age:
                    formData.driver_age === ""
                        ? null
                        : Number(formData.driver_age)
            });

            setSubmitted(true);

        } catch (err) {

            console.error(err.response?.data || err.message);

            setError(
                err.response?.data?.error ||
                "Unable to submit your car rental request. Please try again."
            );

        } finally {
            setLoading(false);
        }
    }

    if (submitted) {
        return (
            <div className="text-center py-16">

                <h2 className="text-3xl font-semibold text-[#2F7D32]">
                    Thank You!
                </h2>

                <p className="mt-4 text-[#6B5744]">
                    Your car rental request has been received.
                    Our team will review your request and contact
                    you regarding availability, pricing, and the
                    next steps.
                </p>

            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-8"
        >

            {/* CUSTOMER INFORMATION */}

            <section>

                <h2 className="text-2xl font-semibold text-[#2C1810]">
                    Your Information
                </h2>

                <div className="grid md:grid-cols-2 gap-5 mt-5">

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={formData.full_name}
                        onChange={e =>
                            updateField("full_name", e.target.value)
                        }
                        required
                        className="w-full p-4 border rounded-xl"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={e =>
                            updateField("email", e.target.value)
                        }
                        required
                        className="w-full p-4 border rounded-xl"
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={e =>
                            updateField("phone", e.target.value)
                        }
                        required
                        className="w-full p-4 border rounded-xl"
                    />

                </div>

            </section>


            {/* VEHICLE */}

            <section>

                <h2 className="text-2xl font-semibold text-[#2C1810]">
                    Vehicle & Rental Details
                </h2>

                <div className="grid md:grid-cols-2 gap-5 mt-5">

                    <select
                        value={formData.vehicle_type}
                        onChange={e =>
                            updateField("vehicle_type", e.target.value)
                        }
                        required
                        className="w-full p-4 border rounded-xl"
                    >

                        <option value="">
                            Select Vehicle Type
                        </option>

                        <option value="Economy Car">
                            Economy Car
                        </option>

                        <option value="SUV">
                            SUV
                        </option>

                        <option value="4x4 Safari Vehicle">
                            4x4 Safari Vehicle
                        </option>

                        <option value="Van / Minibus">
                            Van / Minibus
                        </option>

                    </select>


                    <input
                        type="text"
                        placeholder="Pickup Location"
                        value={formData.pickup_location}
                        onChange={e =>
                            updateField("pickup_location", e.target.value)
                        }
                        required
                        className="w-full p-4 border rounded-xl"
                    />

                    <input
                        type="date"
                        value={formData.pickup_date}
                        onChange={e =>
                            updateField("pickup_date", e.target.value)
                        }
                        required
                        className="w-full p-4 border rounded-xl"
                    />

                    <input
                        type="time"
                        value={formData.pickup_time}
                        onChange={e =>
                            updateField("pickup_time", e.target.value)
                        }
                        required
                        className="w-full p-4 border rounded-xl"
                    />

                    <input
                        type="text"
                        placeholder="Drop-off Location"
                        value={formData.dropoff_location}
                        onChange={e =>
                            updateField("dropoff_location", e.target.value)
                        }
                        required
                        className="w-full p-4 border rounded-xl"
                    />

                    <input
                        type="date"
                        value={formData.dropoff_date}
                        onChange={e =>
                            updateField("dropoff_date", e.target.value)
                        }
                        required
                        className="w-full p-4 border rounded-xl"
                    />

                    <input
                        type="time"
                        value={formData.dropoff_time}
                        onChange={e =>
                            updateField("dropoff_time", e.target.value)
                        }
                        required
                        className="w-full p-4 border rounded-xl"
                    />

                </div>

            </section>


            {/* DRIVER */}

            <section>

                <h2 className="text-2xl font-semibold text-[#2C1810]">
                    Driver Information
                </h2>

                <div className="grid md:grid-cols-2 gap-5 mt-5">

                    <input
                        type="number"
                        min="18"
                        placeholder="Driver Age"
                        value={formData.driver_age}
                        onChange={e =>
                            updateField("driver_age", e.target.value)
                        }
                        className="w-full p-4 border rounded-xl"
                    />

                    <input
                        type="text"
                        placeholder="Driving Licence Number"
                        value={formData.driving_license_number}
                        onChange={e =>
                            updateField(
                                "driving_license_number",
                                e.target.value
                            )
                        }
                        className="w-full p-4 border rounded-xl"
                    />

                    <input
                        type="text"
                        placeholder="Licence Country"
                        value={formData.license_country}
                        onChange={e =>
                            updateField(
                                "license_country",
                                e.target.value
                            )
                        }
                        className="w-full p-4 border rounded-xl"
                    />

                </div>

            </section>


            {/* SPECIAL REQUESTS */}

            <section>

                <h2 className="text-2xl font-semibold text-[#2C1810]">
                    Additional Requests
                </h2>

                <textarea
                    placeholder="Anything else we should know?"
                    value={formData.special_requests}
                    onChange={e =>
                        updateField(
                            "special_requests",
                            e.target.value
                        )
                    }
                    className="w-full p-4 border rounded-xl mt-5 min-h-[140px]"
                />

            </section>


            {/* ERROR */}

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl">
                    {error}
                </div>
            )}


            {/* SUBMIT */}

            <button
                type="submit"
                disabled={loading}
                className="
                    w-full
                    md:w-auto
                    px-10
                    py-4
                    rounded-xl
                    bg-[#C4873A]
                    text-white
                    font-semibold
                    hover:bg-[#2C1810]
                    transition
                    disabled:opacity-50
                "
            >
                {loading
                    ? "Submitting..."
                    : "Request a Car Rental"}
            </button>

        </form>
    );
}

export default CarRentalForm;