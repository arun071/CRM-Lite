import axios from "axios";
import React, { useEffect, useState } from "react";
import AddContact from "./AddContact";

export default function Contacts() {
  const [searchTerm, setSearchTerm] = useState(""); // Search input state
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Fetch all contacts or search results based on searchTerm
  const fetchContacts = async () => {
    try {
      const url = searchTerm
        ? `http://localhost:8080/api/contacts/search?query=${searchTerm}`
        : `http://localhost:8080/api/contacts`;
      const response = await axios.get(url);
      setContacts(response.data); // Update contacts state with API response
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [searchTerm]); // Fetch data whenever searchTerm changes

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update searchTerm state
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>
      <input
        type="text"
        placeholder="Search by name, email, phone..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full max-w-lg p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-lg"
      />
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">S.No</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Name</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Email</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Phone</th>
            <th className="px-4 py-2 text-left text-gray-700 font-semibold">Company</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((contact, index) => (
              <tr key={contact.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="p-4 flex items-center">
                  <img
                    src={`https://ui-avatars.com/api/?name=${contact.firstName}+${contact.lastName}`}
                    alt={`${contact.firstName} ${contact.lastName}`}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  {contact.firstName} {contact.lastName}
                </td>
                <td className="px-4 py-2">{contact.email}</td>
                <td className="px-4 py-2">{contact.phone}</td>
                <td className="px-4 py-2">{contact.company?.name || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No contacts found.
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
        Add Contact
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <AddContact closeModal={closeModal} onContactAdded={fetchContacts} />
          </div>
        </div>
      )}
    </div>
  );
}
