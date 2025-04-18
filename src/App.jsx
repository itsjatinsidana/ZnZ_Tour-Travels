import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import About from './pages/About';
import PackageForm from './pages/PackageForm';
import ViewPackage from './pages/ViewPackege';
import DayOnePackage from './pages/DayOnePackage';
import DayTwoPackage from './pages/DayTwoPackage';
import DayThreePackage from './pages/DayThreePackage';
import VegFood from './pages/VegFood';

import GuestPreferenceForm from './pages/GuestPreferenceForm';


function App() {


  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/navbar" element={<Navbar/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/packageform" element={<PackageForm/>} />
      <Route path="/viewpackage" element={<ViewPackage/>} />
      <Route path="/dayone" element={<DayOnePackage/>} />
      <Route path="/daytwo" element={<DayTwoPackage/>} />
      <Route path="/daythree" element={<DayThreePackage/>} />
      <Route path="/vegfood" element={<VegFood/>} />
      <Route path="/customizeplan" element={<GuestPreferenceForm/>} />
      
    </Routes>
  );
}

export default App;

