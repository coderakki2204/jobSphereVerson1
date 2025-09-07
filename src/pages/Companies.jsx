import React from "react";
import companies from "../api/companies.json"

const Companies = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Companies & Vacancies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {companies.map((c, index) => (
          <div
            key={index}
            className="border rounded-2xl p-4 shadow-md hover:shadow-lg transition bg-green-200"
          >
            <h3 className="text-xl font-semibold">{c.company}</h3>
            <p><span className="font-bold">Owner:</span> {c.owner}</p>
            <p><span className="font-bold">Post:</span> {c.post}</p>
            <p><span className="font-bold">Last Date:</span> {c.lastDate}</p>
            <p><span className="font-bold">Seats:</span> {c.seats}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
