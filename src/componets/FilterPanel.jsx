const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <h2 className="date-posted">Date Posted</h2>
      <select className="date-select">
        <option value="">Select...</option>
        <option value="24h">Last 24 hours</option>
        <option value="7d">Last 7 days</option>
        <option value="30d">Last 30 days</option>
        <option value="1m">Last 1 month</option>
      </select>
      <div className="job-type-card">
        <h2>Job Type</h2>
        <div class="checkbox-grid">
          <label>
            <input type="checkbox" value="full-time" />
            Full-time
          </label>

          <label>
            <input type="checkbox" value="part-time" />
            Part-time
          </label>

          <label>
            <input type="checkbox" value="internship" />
            Internship
          </label>

          <label>
            <input type="checkbox" value="remote" />
            Remote
          </label>
        </div>
      </div>
      <h2 >Experince</h2>
    <select className="experince-select">
        <option value="">Select...</option>
        <option value="Fresher/Junior">Fresher/Junior</option>
        <option value="Intermedate">Intermedate</option>
        <option value="Senior">Senior</option>
        <option value="NoExperince">No Experince</option>
      </select>

      <div className="button-container">
        <button className="reset-button">Reset filters</button>
      </div>
    </div>
  );
};

export default FilterPanel;
