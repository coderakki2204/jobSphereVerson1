import React from "react";
import JobCard from "../componets/JobCard";
import FilterPanel from "../componets/FilterPanel";
import Savecard from "../componets/savedjob/Savecard";
const Dashboard = () => {
  return (
    <div>
      <div className="dashboard-container">
        <div className="dashboard-section job-filter">
          <h2>Filter</h2>
          <FilterPanel />
        </div>

        <div className="dashboard-section job-search">
          <JobCard />
        </div>

        <div className="dashboard-section saved-jobs">
          <h2 className="text-center">Saved Jobs</h2>
          <Savecard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
