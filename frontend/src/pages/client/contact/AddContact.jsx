import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddContact({ closeModal, onContactAdded }) {
    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "", // Stores the selected company ID or name
    };

    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState("");
    const [companies, setCompanies] = useState([]);

    // Fetch companies from the API
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/company"); // Adjust the URL
                setCompanies(response.data);
            } catch (err) {
                console.error("Error fetching companies:", err);
            }
        };

        fetchCompanies();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const { firstName, lastName, email, phone, company } = formData;

        if (!firstName || !lastName || !email || !phone || !company) {
            setError("All fields are required.");
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
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
            await axios.post("http://localhost:8080/api/contacts", formData);
            alert("Contact saved successfully!");
            setFormData(initialFormData);
            onContactAdded(); // Refresh contacts in parent component
            closeModal(); // Close the modal
        } catch (err) {
            setError("Failed to save contact. Please try again.");
            console.error("Error saving contact:", err);
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
            <h2 className="text-2xl font-semibold text-center mb-6">Add Contact</h2>

            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            <div className="mb-4">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
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
            <div className="mb-4">
                <select
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select Company</option>
                    {companies.map((company) => (
                        <option key={company.id} value={company.id}>
                            {company.name}
                        </option>
                    ))}
                </select>
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
