import React from 'react';

const JobDetails = ({ job }) => {
  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>Role: {job.role}</p>
      <p>Responsibilities: {job.responsibilities}</p>
      {/* Display other jobs with similar titles */}
    </div>
  );
};

export default JobDetails;
