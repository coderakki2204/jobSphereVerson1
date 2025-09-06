import React from "react";
import jobs from "../pages/data/jobs.json";

const JobCard = () => {
  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id} className="job-card gap-3">
          <div className="job-content">
            <img
              className="w-10 h-10 object-contain"
              src="/src/photos/heroLogo.svg"
              alt="logo"
            />

            <div>
              <h2 className="font-bold text-9xl">{job.title}</h2>
              <p className="font-semibold">{job.company}</p>

              <div className="flex font-light gap-6">
                <span className="bg-amber-50 text-1xl">{job.location}</span>
                <span className="bg-amber-50 text-1xl">{job.type}</span>
                <span className="bg-amber-50 text-1xl">{job.posted_date}</span>
              </div>

              <p className="text-xs font-sans">{job.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCard;
