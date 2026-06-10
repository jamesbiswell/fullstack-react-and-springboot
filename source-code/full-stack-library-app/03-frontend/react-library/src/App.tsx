import React from 'react';
import './App.css';
import { HomePage } from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}
