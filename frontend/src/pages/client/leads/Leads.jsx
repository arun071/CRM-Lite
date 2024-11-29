import React, { useState, useEffect } from "react";
import axios from "axios";
import AddLead from "./AddLead";

export default function Leads() {
  const [searchTerm, setSearchTerm] = useState(""); // Search input state
  const [leads, setLeads] = useState([]); // Leads data state
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  // Open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fetch leads data
  const fetchLeads = async () => {
    try {
      const url = searchTerm
        ? `http://localhost:8080/api/leads/search?query=${searchTerm}`
        : `http://localhost:8080/api/leads`;
      const response = await axios.get(url);
      setLeads(response.data);
    } catch (err) {
      console.error("Error fetching leads:", err);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [searchTerm]); // Fetch data whenever searchTerm changes

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update searchTerm state
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Leads</h1>
      {/* <input
        type="text"
        placeholder="Search leads by status, source, etc."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full max-w-lg p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-lg"
      /> */}
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">S.No</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Contact</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Status</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Source</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Estimated Value</th>
          </tr>
        </thead>
        <tbody>
          {leads.length > 0 ? (
            leads.map((lead, index) => (
              <tr key={lead.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{lead.contact?.firstName || "N/A"}</td>
                <td className="px-4 py-2">{lead.status || "N/A"}</td>
                <td className="px-4 py-2">{lead.source || "N/A"}</td>
                <td className="px-4 py-2">{lead.estimatedValue || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No leads found.
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
        Add Lead
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <AddLead closeModal={closeModal} onLeadAdded={fetchLeads} />
          </div>
        </div>
      )}
    </div>
  );
}