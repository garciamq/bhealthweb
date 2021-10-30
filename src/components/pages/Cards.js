import React from 'react';
import 'src/App.css'
import Cards from '../Cards';
import Navbar from '../../components/Navbar';
import Footer from '../../Footer';

function ServiceCards() {
  return (
    <>
    <Navbar />
      <Cards />
      <Footer />
    </>
  );
}

export default ServiceCards;
