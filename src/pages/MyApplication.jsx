import React from "react";
import application from "../api/application.json"; 

const MyApplication = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Applications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {application.map((app, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 shadow-md hover:shadow-lg transition bg-green-300"
          >
            <h3 className="text-xl font-semibold">{app.company}</h3>
            <p><span className="font-bold">Role:</span> {app.role}</p>
            <p><span className="font-bold">Date:</span> {app.date}</p>
            <p><span className="font-bold">Status:</span> {app.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplication;

