import React from 'react';
import {
    CButton,
    
  } from '@coreui/react'
function Header() {
    return (
        <div id='main'>
            <div className='header-heading'>
                <h4>A Mobile Application for Barangay Health Center</h4>
                <h1><span>BHEALTH</span> App<br/></h1>
                <p className='details'>in Sta. Maria Laguna, Philippines</p>
                <div className='header-btns'>
                <a href="https://play.google.com/store" >
                    <CButton><h3 className='header-btn'>DOWNLOAD NOW</h3></CButton>
                   </a>
                </div>
            </div>
        </div>
    )
}

export default Header;
