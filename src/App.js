import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes, not Switch
import Checkout from './Checkout';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
