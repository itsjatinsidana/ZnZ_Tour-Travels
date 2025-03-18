import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import About from './pages/About';


function App() {


  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/about" element={<About/>} />
      
    </Routes>
  );
}

export default App;

