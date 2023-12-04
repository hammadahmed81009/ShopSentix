// src/App.js
import React from 'react';
import Navbar from './Navbar/navbar';
import SavedFiles from './components/savedFiles';
import HeroNavbar from './Hero/HomeNavbar';
import Section1 from './Hero/Section1'
import Section2 from './Hero/Section2'

export default function App() {
  return (
    <>
      <HeroNavbar/>
      <Section1 />
      <Section2/>
    </>
  );
}
