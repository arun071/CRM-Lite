import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Pipelines() {
  const userName = sessionStorage.getItem("userName");
  const url = import.meta.env.VITE_API_URL;
  const [pipelineStages, setPipelineStages] = useState([
    "NEW",
    "PROPOSAL_SENT",
    "CONTACTED",
    "QUALIFIED",
    "CLOSED"
  ]);
  const [leadsByStage, setLeadsByStage] = useState({});

  // Fetch leads grouped by stages
  const fetchLeads = async () => {
    try {
      const response = await axios.get(`${url}/leads/u/${userName}/pipelines`);
      setLeadsByStage(response.data); // Example format: { New: [...], Contacted: [...] }
    } catch (err) {
      console.error("Error fetching leads for pipeline:", err);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        Leads Pipeline
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {pipelineStages.map((stage) => (
          <div
            key={stage}
            className="flex-1 max-w-sm bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              {stage}
            </h2>
            <div className="space-y-4">
              {leadsByStage[stage]?.length > 0 ? (
                leadsByStage[stage].map((lead) => (
                  <div
                    key={lead.id}
                    className="p-4 bg-gray-100 rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors duration-300"
                  >
                    <p className="font-bold text-gray-800">
                      {lead.contactName || "N/A"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {lead.source || "Source: N/A"}
                    </p>
                    <p className="text-sm text-gray-600">
                      Value: {lead.estimatedValue || "N/A"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No leads in this stage.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
