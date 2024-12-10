import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddLeadModal({ closeModal, onLeadAdded }) {
  const userName = sessionStorage.getItem('userName');
  const url = import.meta.env.VITE_API_URL;
  const initialFormData = {
    contactId: '',
    status: '',
    source: '',
    estimatedValue: '',
    userName: userName,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [contactOptions, setContactOptions] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${url}/contacts/u/${userName}`);
        console.log(response.data);
        setContactOptions(response.data);
      } catch (err) {
        console.error('Error fetching contacts:', err);
        setError('Failed to fetch contacts. Please try again.');
      }
    };

    fetchContacts();
  }, [userName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { contactId, status, source, estimatedValue } = formData;

    if (!contactId || !status || !source || !estimatedValue) {
      setError('All fields are required.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      console.log(formData);
      await axios.post(`${url}/leads`, formData);
      setSuccess('Lead added successfully!');
      setFormData(initialFormData);
      onLeadAdded(); // Refresh the leads list in parent component
      closeModal(); // Close the modal
    } catch (err) {
      setError('Failed to add lead. Please try again.');
      console.error('Error adding lead:', err);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Add Lead</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}
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

        {/* Contact Selection */}
        <div className="mb-4">
          <label className="block text-gray-700">Select Contact</label>
          <select
            name="contactId"
            value={formData.contactId}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">Select a contact</option>
            {contactOptions.map((contact,index) => (
              <option key={index} value={contact.id}>
                {contact.firstName} {contact.lastName}
              </option>
            ))}
          </select>
        </div>

        {/* Status Field */}
        <div className="mb-4">
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Source Field */}
        <div className="mb-4">
          <input
            type="text"
            name="source"
            placeholder="Source"
            value={formData.source}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Estimated Value Field */}
        <div className="mb-4">
          <input
            type="number"
            name="estimatedValue"
            placeholder="Estimated Value"
            value={formData.estimatedValue}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full"
        >
          Add Lead
        </button>
      </form>
    </div>
  );
}
