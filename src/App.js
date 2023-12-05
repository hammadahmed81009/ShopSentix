import React from 'react';
import Navbar from './Navbar/navbar';
import SavedFiles from './components/savedFiles';
import HomePage from './HomePage/home'
import Sidebar from './Sidebar/sidebar';
import HeroNavbar from './Hero/HomeNavbar';
import Section1 from './Hero/Section1'
import Section2 from './Hero/Section2'
import Section4 from './components/section4';
import Section6 from './Hero/Section6';
import Footer from './Hero/Footer';
import Section3 from './Hero/Section3'
import Section4 from './Hero/Section4'
import Section5 from './Hero/Section5'


export default function App() {
  return (
    <>
      <HeroNavbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    <Footer/>
    
    </>
    
  );
}
