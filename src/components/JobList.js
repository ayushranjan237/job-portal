import React, { useState } from 'react';
import JobItem from './JobItem';
import jobsData from '../data/jobs.json';

const JobList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortByDate, setSortByDate] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = () => {
    setSortByDate(!sortByDate);
  };

  // Apply search and sort filters to jobs
  const filteredJobs = jobsData
    .filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortByDate) {
        return new Date(b.date) - new Date(a.date);
      } else {
        return 0;
      }
    });

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Search jobs"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <label>
          <input
            type="checkbox"
            checked={sortByDate}
            onChange={handleSortChange}
          />
          Sort by date
        </label>
      </div>
      <div className="job-list">
        {filteredJobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
