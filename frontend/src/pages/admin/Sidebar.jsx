import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8080/api/v1/logout", {
        withCredentials: true,
      });
      navigate("/signin");
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col sticky top-0 h-screen">
      {/* Sidebar Header */}
      <div className="p-4 text-2xl font-bold text-center border-b border-gray-700">
        CRM Lite
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow overflow-y-auto p-2">
        <ul className="space-y-2 mt-4">
          {[
            { path: '/dashboard', label: 'Dashboard' },
            { path: '/leads', label: 'Leads' },
            { path: '/pipelines', label: 'Pipelines' },
            { path: '/contacts', label: 'Contacts' },
            { path: '/companies', label: 'Companies' },
            { path: '/products', label: 'Products' },
            { path: '/activities', label: 'Activities' },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="block py-3 px-4 hover:bg-blue-500 rounded-md transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={() => { handleLogout() }}
          className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
