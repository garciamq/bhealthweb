import React from 'react';
import aboutimage from '../images/vaccines.jpg';
import {
    CButton,
    
  } from '@coreui/react'

function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>Health Center Information</h1>
                <p>The latest on the coronavirus pandemic and vaccines...</p>
                <div className='header-btns'>
                <a href="https://edition.cnn.com/world/live-news/coronavirus-pandemic-vaccine-updates-03-05-21/index.html" >
                    <CButton><h3 className='header-btn'>Read More</h3></CButton>
                   </a>
                   </div>
               
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
        </div>
    )
}

export default About;
