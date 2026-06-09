import React from 'react';
import './App.css';
import { HomePage } from './Layouts/HomePage/HomePage';
import { Footer } from './Layouts/NavbarAndFooter/Footer';
import { Navbar } from './Layouts/NavbarAndFooter/Navbar';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}
