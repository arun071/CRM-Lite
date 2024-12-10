import axios from "axios";
import React, { useEffect, useState } from "react";
import AddCompany from "./AddCompany";

export default function Company() {
  const url = import.meta.env.VITE_API_URL;
  const [searchTerm, setSearchTerm] = useState(""); // Search input state
  const [company, setCompany] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fetch all company or search results based on searchTerm
  const fetchCompany = async () => {
    try {
      const userName = sessionStorage.getItem('userName');
      
      const getUrl = searchTerm
        ? `${url}/companies/u/${userName}search?query=${searchTerm}`
        : `${url}/companies/u/${userName}`;
      const response = await axios.get(getUrl);
      console.log(response.data)
      setCompany(response.data); // Update company state with API response
    } catch (err) {
      console.error("Error fetching company:", err);
    }
  };

  useEffect(() => {
    fetchCompany();
  }, [searchTerm]); // Fetch data whenever searchTerm changes

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update searchTerm state
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Company</h1>
      <input
        type="text"
        placeholder="Search by  Company name ...."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full max-w-lg p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-lg"
      />
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">S.No</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Company Name</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Website</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Location</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Phone</th>
          </tr>
        </thead>
        <tbody>
          {company.length > 0 ? (
            company.map((company, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="p-4 flex items-center">
                  <img
                    src={`https://ui-avatars.com/api/?name=${company.name}`}
                    alt={`${company.name}`}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  {company.name}
                </td>
                <td className="px-4 py-2">{company.website}</td>
                <td className="px-4 py-2">{company.address}</td>
                <td className="px-4 py-2">{company.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No company found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Floating Button */}
      <button
        onClick={openModal}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add Company
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <AddCompany closeModal={closeModal} onCompanyAdded={fetchCompany} />
          </div>
        </div>
      )}
    </div>
  );
}
