import React from "react";
import { Routes, Route } from "react-router-dom";

// Import all module components
import Dashboard from "./Dashboard";
import Pipelines from "./Pipelines";
import Products from "./Products";
import Activities from "./Activities";
import Sidebar from "./Sidebar";
import Leads from "../client/leads/Leads";
import Contacts from "../client/Contact/Contacts";
import Company from "../client/company/Company";
import PageNotFound from "./PageNotFound";

export default function AdminPanel() {
    return (
        <div className="min-h-screen flex bg-gray-100">
            <Sidebar />
            {/* Main Content */}
            <main className="flex-grow p-6">
                <Routes>
                    
                    <Route path="/home" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/pipelines" element={<Pipelines />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/leads" element={< Leads />} />
                    <Route path="/companies" element={<Company />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </main>
        </div>
    );
}
