import React, { useState, useEffect } from 'react'
import { useHistory, Link, Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import space from './CovidUpdate.module.css';
import Axios from 'axios';

import {
  
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';


function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;


  const login = (email,password) => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      // console.log(response);
      if (response.data.success === true) {
        // console.log(response.data.result[0].roleId)
        if(response.data.result[0].roleId === 1){
          console.log('admin tooo!');
          history.push("/AdminHome");
        }
      
      }else{

      }
      // if (response.data.message) {
      //   setLoginStatus(response.data.message);
      // } else {
      //   setLoginStatus(response.data[0].email);

      // }
    });
  };

  // const login = () => {
  //   Axios.get("http://localhost:3001/login", {
  //     email: email,
  //     password: password,
  //   }).then((response) => {
  //     if (response.data.message) {
  //       setLoginStatus(response.data.message);
  //     } else {
  //       // setLoginStatus(response.data[0].email);
  //     }
  //   });
  // };
      // if (response.data.message) {
      //   setLoginStatus(response.data.message);
      // } else {
      //   setLoginStatus(response.data[0].email);

      // }
 

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/login").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       console.log(response.data.user[0].roleId);
  //       // setLoginStatus(response.data.user[0].email);

  //       if (response.data.result[0].roleId === 1) {
  //         // console.log(response.data.user[0].roleId);
  //         <Redirect to="/AdminHome"></Redirect>
  //       }
  //       if (response.data.result[0].roleId === 2) {
  //         <Redirect to="/AdminHome"></Redirect>
  //       }


  //       if (response.data.result[0].roleId === 3) {
  //         <Redirect to="/AdminHome"></Redirect>
  //       }


  //     }
  //   });
  // }, []);

  return (

    <div className="c-app c-default-layout flex-column align-items-center">
      <CContainer>
        <Navbar />
      </CContainer>

      <CContainer className={space.space}>
        <CRow className="justify-content-center">
          <CCol md="20">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  {/* <a href = "http://localhost:3002/#/">
                      <CButton> 
                        
                      </CButton>
                      </a> */}
                  <CForm>

                    {/* <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p> */}
                    {<h5>Good Day {loginStatus}</h5>}
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput required type="text" onChange={(e) => {
                        setEmail(e.target.value);
                      }} placeholder="Email Address" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput required type="password" onChange={(e) => {
                        setPassword(e.target.value);
                      }} placeholder="Password" />
                    </CInputGroup>

                    <CRow>
                      <CCol xs="6">

                        {/* <CButton onClick={history.push("/AdminHome")} color="primary" className="px-4">Login</CButton> */}
                        <CButton onClick={login(email,password)} color="primary" className="px-4">Login</CButton>

                      </CCol>

                      <CDropdown className="m-1 btn-group">
                        <CDropdownToggle color="info">

                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem header>Select your role</CDropdownItem>
                          <CDropdownItem to="/AdminPage" >BHW</CDropdownItem>
                          <CDropdownItem to="/DoctorPage">Doctor</CDropdownItem>
                          <CDropdownItem to="/NursePage">Nurse</CDropdownItem>
                          <CDropdownItem to="/MidwifePage">Midwife</CDropdownItem>
                          <CDropdownItem to="/PatientPage">Patient</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>

                      <CCol xs="1" className="text-center">
                        <CButton color="link" className="px-4">Forgot password?</CButton>
                      </CCol>
                      {/* <CCol xs="3">
                      <Link to="/">
                        <CButton color="danger" className="px-4">Cancel</CButton>
                        </Link>
                      </CCol> */}
                    </CRow>

                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Does not have account yet? Click the button</p>
                    <Link to="/Sign-Up">
                      <CButton color="danger" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login;