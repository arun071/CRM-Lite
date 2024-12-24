import React from 'react';
import ChartCard from '../../components/ChartCard';

export default function Dashboard() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p>Welcome to the CRM Lite Dashboard.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example Cards */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2">Total Users</h2>
                    <p className="text-3xl font-bold text-blue-600">120</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2">New Leads</h2>
                    <p className="text-3xl font-bold text-green-600">45</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-2">Pending Tasks</h2>
                    <p className="text-3xl font-bold text-yellow-600">8</p>
                </div>
                <ChartCard />
            </div>
        </div>
    );
}
