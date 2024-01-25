import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className='grid-container'>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
