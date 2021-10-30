// import React from 'react';
// import 'src/App.css'
// import Cards from '../Cards';
// import HeroSection from '../HeroSection';
// import Navbar from '../../components/Navbar';
// import Footer from '../../Footer';


// function Home() {
//   return (
//     <>
//     <Navbar />
//       <HeroSection />
//       <Cards />
//       <Footer />
//     </>
//   );
// }

// export default Home;

import React, {useState, useEffect} from 'react';

import Navbar from '../Navbar/Navbar';
import Header from '../Header';
import Products from '../Products';
import About from '../About';
import Contact from '../Contact';
import {css} from '@emotion/core';
import Footer from '../../Footer';
import Cards from '../Cards';
import PropagateLoader from 'react-spinners/PropagateLoader';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function Home() {

  const[loading,setLoading] = useState(false);
  const override = css`
  align-items: center;
  display:block;
  border-color:red;
  margin-top:20%;
  `;

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])

  return (
    <div className="App">

      {
        loading ? <PropagateLoader color={"#000062"} loading={loading} css={override} size={40}/> 
        :
        <>
        <Navbar/>
        <Header/>
        <Products/>
        {/* <Cards/> */}
        <About/>
        <Contact/>
        <Footer />
        </>

      }
      <MessengerCustomerChat pageId="104423825168707" appId="896841584228684"/>

      
    </div>
  );
}

export default Home;

