import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <nav className="bg-gray-900 p-4">
          <div className="container mx-auto flex justify-between">
            <Link to="/" className="text-lg font-bold hover:text-gray-300">TestApp-v2</Link>
            <div className="flex space-x-4">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
              <Link to="/settings" className="hover:text-gray-300">Settings</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;