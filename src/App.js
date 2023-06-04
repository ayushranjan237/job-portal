import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/">
            <JobList />
          </Route>
          <Route path="/job/:id">
            <JobDetails />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
