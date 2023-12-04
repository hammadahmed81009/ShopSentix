import React from 'react';
import Navbar from "./Navbar/navbar"
import SavedFiles from './components/savedFiles';
import HomePage from './HomePage/home'
import Sidebar from './Sidebar/sidebar';
import SentimentCard from './ProductDashboard/SentimentCard';

export default function App() {
  return (
    <>
    <SentimentCard sentimentValue={714} sentimentType="positive" />
    <SentimentCard sentimentValue={200} sentimentType="negative" />
    <SentimentCard sentimentValue={200} sentimentType="neutral" />
    </>
  )
}
