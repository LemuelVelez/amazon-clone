import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Checkout() {
  return (
    <>
      <Header />
      <h1>I AM CHECKOUT, SMASH THE LIKE BUTTON</h1>
    </>
  );
}

export default App;
