import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './frontend/Hero/HeroComponent';
import SignUp from './frontend/components/signUpPage';
import Login from './frontend/components/login';
import Navbar from './frontend/Navbar/navbar';
import Footer from './frontend/Hero/Footer'
import Home from './frontend/HomePage/home';
import Watchlist from './frontend/WatchlistPage/watchlistPage';
import SavedFiles from './frontend/components/savedFiles';
import TablePage from './frontend/TablePage/tablePage';
import Dashboard from './frontend/ProductDashboard/dashboard';
import VerificationPage from './frontend/components/verfication';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verification/:email" element={<VerificationPage />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/home/table"
          element={
            <>
              <Navbar />
              <TablePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/watchlist"
          element={
            <>
              <Navbar />
              <Watchlist />
              <Footer />
            </>
          }
        />
        <Route
          path="/savedfiles"
          element={
            <>
              <Navbar />
              <SavedFiles />
              <Footer />
            </>
          }
        />
        <Route path="/home/table/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
