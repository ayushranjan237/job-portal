import React from 'react';

const JobItem = ({ job }) => {
  return (
    <div className="job-item">
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>Tags: {job.tags.join(', ')}</p>
      <p>Stipend: {job.stipend}</p>
      <p>Duration: {job.duration}</p>
      {/* Add other relevant information */}
    </div>
  );
};

export default JobItem;
