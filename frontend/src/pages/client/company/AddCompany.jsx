import React, { useState } from "react";
import axios from "axios";

export default function AddCompany({ closeModal, onCompanyAdded }) {
    const userName = sessionStorage.getItem('userName');
    const url = import.meta.env.VITE_API_URL;

    const initialFormData = {
        
        name: "",
        website: "",
        phone: "",
        address: "",
        userName: userName // Use userId from sessionStorage or default to 1
    };

    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const { name, website, phone, address } = formData;

        if (!name || !website || !phone || !address) {
            setError("All fields are required.");
            return false;
        }

        // Website URL validation
        const urlRegex = /^(https?:\/\/)?([\w\-]+)\.([a-z]{2,})(\/\S*)?$/;
        if (!urlRegex.test(website)) {
            setError("Please enter a valid website URL.");
            return false;
        }

        // Phone validation
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            setError("Please enter a valid 10-digit phone number.");
            return false;
        }

        setError(""); // Clear previous error messages
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            console.log(formData);
            await axios.post(`${url}/companies`, formData);
            alert("Company saved successfully!");
            setFormData(initialFormData); // Reset form
            onCompanyAdded(); // Refresh companies in parent component
            closeModal(); // Close the modal
        } catch (err) {
            setError("Failed to save company. Please try again.");
            console.error("Error saving company:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={closeModal}
                    className="text-black hover:bg-red-500 hover:text-white text-2xl h-10 w-10 rounded"
                >
                    X
                </button>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-6">Add Company</h2>

            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

            {/* Company Name */}
            <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Company Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Company Website */}
            <div className="mb-4">
                <input
                    type="text"
                    name="website"
                    placeholder="Company Website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Phone */}
            <div className="mb-4">
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Address */}
            <div className="mb-4">
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md w-full"
            >
                Submit
            </button>
        </form>
    );
}
