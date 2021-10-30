// import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import { Button1 } from './Button1';
// import Dropdown from './Dropdown';

// import { useSelector, useDispatch } from 'react-redux'
// import logos from "../assets/bhealth.png";
// import {
//   CHeader,
//   CToggler,
//   CHeaderBrand,
//   CHeaderNav,
//   CHeaderNavItem,
//   CHeaderNavLink,
//   CSubheader,
//   CBreadcrumbRouter,
//   CLink
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

// // routes config
// import routes from '../routes'

// import {
//   TheHeaderDropdown,
//   TheHeaderDropdownMssg,
//   TheHeaderDropdownNotif,
//   TheHeaderDropdownTasks
// } from '../containers/index'
// import Services from './pages/Services';

// const TheHeader = () => {
//   const dispatch = useDispatch()
//   const sidebarShow = useSelector(state => state.sidebarShow)

//   const toggleSidebar = () => {
//     const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
//     dispatch({ type: 'set', sidebarShow: val })
//   }

//   const toggleSidebarMobile = () => {
//     const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
//     dispatch({ type: 'set', sidebarShow: val })
//   }

//   return (


//     <CHeader withSubheader>

//       <CHeaderBrand to="/">
//         <CIcon name="logo" src={logos} height="48" alt="Logo" />
//       </CHeaderBrand>

//       {/* <CHeaderNav className="d-md-down-none mr-auto">
//         <CBreadcrumbRouter
//           className=" m-0 px-0 px-md-1"
//         />
//       </CHeaderNav>
//       <CHeaderNav className="d-md-down-none mr-auto">
//         <CBreadcrumbRouter
//           className=" m-0 px-0 px-md-1"
//         />
//       </CHeaderNav> */}

//       <CHeaderNav className="d-md-down-none mr-auto">
//         {/* <CBreadcrumbRouter
//           className=" m-0 px-0 px-md-1"
//         /> */}
        
//         <CHeaderNavItem className="title" >
//           <CHeaderNavLink to="/">BARANGAY HEALTH CENTER</CHeaderNavLink>
//         </CHeaderNavItem>
//         {/* <CHeaderNavItem className="px-3">
//         <Services />
//         </CHeaderNavItem>
//         <CHeaderNavItem className="px-3">
//           <CHeaderNavLink to="/aboutUs">ABOUT US</CHeaderNavLink>
//         </CHeaderNavItem>
//         <CHeaderNavItem className="px-3">
//           <CHeaderNavLink to="/contact-us">CONTACT US</CHeaderNavLink>
//         </CHeaderNavItem> */}
//       </CHeaderNav>

//       <CHeaderNav className="px-3">
//       <CHeaderNavItem className="px-1">
//           <CHeaderNavLink to="/Login">SIGN IN</CHeaderNavLink>
//         </CHeaderNavItem>
//         {/* <CHeaderNavItem className="px-1">
//           <CHeaderNavLink to="/Sign-up">SIGN UP</CHeaderNavLink>
//         </CHeaderNavItem> */}
//       </CHeaderNav>
//     </CHeader>
//   )
// }

// export default TheHeader






// // function Navbar() {
// //   const [click, setClick] = useState(false);
// //   const [button, setButton] = useState(true);
// //   const [dropdown, setDropdown] = useState(false);

// //   const handleClick = () => setClick(!click);
// //   const closeMobileMenu = () => setClick(false);

// //   const onMouseEnter = () => {
// //     if (window.innerWidth < 960) {
// //       setDropdown(false);
// //     } else {
// //       setDropdown(true);
// //     }
// //   };

// //   const onMouseLeave = () => {
// //     if (window.innerWidth < 960) {
// //       setDropdown(false);
// //     } else {
// //       setDropdown(false);
// //     }
// //   };

// //   const showButton = () => {
// //     if (window.innerWidth <= 960) {
// //       setButton(false);
// //     } else {
// //       setButton(true);
// //     }
// //   };
// //   useEffect(() => {
// //     showButton();
// //   }, []);

// //   window.addEventListener('resize', showButton);


// //   return (
// //     <>
// //       <nav className='navbar'>
// //       <CHeaderNavItem className="px-1" >
// //           <CHeaderNavLink to="/">B - HEALTH</CHeaderNavLink>
// //         </CHeaderNavItem>
// //         <div className='menu-icon' onClick={handleClick}>
// //           <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
// //         </div>
// //         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
// //           <li className='nav-item'>
// //             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
// //               HOME
// //             </Link>
// //           </li>
// //           <li
// //             className='nav-item'
// //             onMouseEnter={onMouseEnter}
// //             onMouseLeave={onMouseLeave}
// //           >
// //             <Link
// //               to='/services'
// //               className='nav-links'
// //               onClick={closeMobileMenu}
// //             >
// //               SERVICES <i className='fas fa-caret-down' />
// //             </Link>
// //             {dropdown && <Dropdown />}
// //           </li>
// //           <li className='nav-item'>
// //             <Link
// //               to='/aboutUs'
// //               className='nav-links'
// //               onClick={closeMobileMenu}
// //             >
// //               ABOUT US
// //             </Link>
// //           </li>
// //           <li className='nav-item'>
// //             <Link
// //               to='/contact-us'
// //               className='nav-links'
// //               onClick={closeMobileMenu}
// //             >
// //               CONTACT US
// //             </Link>
// //           </li>
// //           <li>
// //             <Link
// //               to='/sign-up'
// //               className='nav-links-mobile'
// //               onClick={closeMobileMenu}
// //             >
// //               SIGN UP
// //               </Link>
// //             </li>
// //             <li>
// //             <Link
// //               to='/sign-in'
// //               className='nav-links-mobile'
// //               onClick={closeMobileMenu}
// //             >
// //               SIGN IN
// //               </Link>
// //             </li>



// //           </ul>
// //           {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}


// //           {button && <Button1 buttonStyle='btn--outline'>SIGN UP</Button1>}



// //       </nav>

// //     </>
// //   );
// // }

// // export default Navbar;
