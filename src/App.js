// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Movies from './Movies';  // crear este componente como te mostré

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
