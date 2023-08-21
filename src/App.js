import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Header/>
      <div className="app">
        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
