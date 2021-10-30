import React,{useState} from 'react';
import {Link} from 'react-scroll';
import logo from '../../images/bhealth.png';
import {
    CHeader,
    CToggler,
    CHeaderBrand,
    CHeaderNav,
    CHeaderNavItem,
    CHeaderNavLink,
    CSubheader,
    CBreadcrumbRouter,
    CLink
  } from '@coreui/react'

function Navbar() {

    const[nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }

    window.addEventListener('scroll',changeBackground);

    return (
        // <CHeader>
        <nav className={nav ? "nav active" :"nav"}>
            <CLink to='/' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt='' /> 
                
            </CLink>
            <h3 className="head">STA. MARIA BARANGAY HEALTH CENTER</h3>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
           
            <a className='menu' href="https://bhealthwebapp.herokuapp.com/login" >
                        <button className="sg">SIGN IN</button>

                
                </a>
    
        </nav>
        // </CHeader>
    )
}

export default Navbar;
