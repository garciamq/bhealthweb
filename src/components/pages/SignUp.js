import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import space1 from './CovidUpdate.module.css';
import Axios from 'axios' ;
import {
  CButton,
  CFormGroup,
  CInputRadio,
  CLabel,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Navbar from '../../components/Navbar';

function Register(){
  const [nameReg,setNameReg] = useState("");
  const [emailReg,setEmailReg] = useState("");
  const [passwordReg,setPasswordReg] = useState("");
  const [addressReg,setAddressReg] = useState("");
  const [phoneReg,setPhoneReg] = useState("");
  const [genderReg,setGenderReg] = useState("");

 

const register = () => {
    Axios.post("http://localhost:3001/register", { 
      name: nameReg,
      email: emailReg, 
      password: passwordReg,
      address: addressReg,
      phone: phoneReg,
      gender: genderReg,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="c-app c-default-layout flex-column align-items-center">
       <CContainer>
       <Navbar />
       </CContainer>
       <CContainer className={space1.space1}>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  {/* <h1>Register</h1>
                  <p className="text-muted">Create your account</p> */}
                   <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText> <CIcon name="cil-user" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" onChange={(e) => {
                      setNameReg(e.target.value);
                    }} placeholder="Name" autoComplete="name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                       @
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" onChange={(e) => {
                      setEmailReg(e.target.value);
                    }} placeholder="Email"/>
                  </CInputGroup>
                  
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" onChange={(e) => {
                      setPasswordReg(e.target.value);
                    }} placeholder="Password" autoComplete="new-password" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText> <CIcon name="cil-location" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" onChange={(e) => {
                      setAddressReg(e.target.value);
                    }} placeholder="Address" autoComplete="address" required/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText> <CIcon name="cil-phone" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" onChange={(e) => {
                      setPhoneReg(e.target.value);
                    }} placeholder="Phone Number" autoComplete="phone" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    {/* <CInputGroupPrepend>
                      <CInputGroupText></CInputGroupText>
                    </CInputGroupPrepend> */}
                     <CInputGroupPrepend>
                      <CInputGroupText> <CIcon name="cil-user" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CCol md="9">
                              <CFormGroup variant="checkbox">
                                <CInputRadio className="form-check-input" id="radio1" name="radios" value="option1" />
                                <CLabel variant="checkbox" htmlFor="radio1">Male</CLabel>
                              </CFormGroup>
                              <CFormGroup variant="checkbox">
                                <CInputRadio className="form-check-input" id="radio2" name="radios" value="option2" />
                                <CLabel variant="checkbox" htmlFor="radio2">Female</CLabel>
                              </CFormGroup>

                            </CCol>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Repeat password" autoComplete="new-password" />
                  </CInputGroup>
                  
                  <CCardBody className="text-center">
         
                  <Link to="/Sign-in">
                      <CButton onClick = {register} color="success" className="mt-3" active  >Register</CButton>
                    </Link>
                    
                    </CCardBody>
                    
                    
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
