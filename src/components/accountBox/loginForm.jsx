import React, { useContext, useState, useEffect } from "react";
import '../../views/home/AdminHome';
import { useHistory, Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CInput,
  CCard,

} from '@coreui/react'
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const [small, setSmall] = useState(false)
  const [small1, setSmall1] = useState(false)
  const [small2, setSmall2] = useState(false)
  const [small3, setSmall3] = useState(false)
  const [small4, setSmall4] = useState(false)
  const { switchToSignup } = useContext(AccountContext);
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [email1, setEmail1] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("https://bhealthweb.herokuapp.com/login", {
      // Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.success === true) {
        // console.log(response.data.result[0].roleId)

        if (response.data.result[0].roleId === 1) {
          console.log('Admin login!');
          setSmall1(!small1);
          // history.push("/AdminHome");
        }
        if (response.data.result[0].roleId === 2) {
          console.log('Doctor login!');
          setSmall2(!small2);
          // history.push("/DoctorPage");
        }

      } else {

        setSmall(!small);
      }
    });
  };
  
  const forgot = () => {
    setSmall3(!small3);
    setSmall4(!small4);
  }

  return (
    <BoxContainer>
      {<h5> {loginStatus}</h5>}
      <FormContainer>
        <Input onChange={(e) => {
          setEmail(e.target.value);
        }} type="email" placeholder="Email" />
        <Input onChange={(e) => {
          setPassword(e.target.value);
        }} type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink className="forgot" onClick={() => setSmall3(!small3)} >Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />



      <SubmitButton onClick={(login)} type="submit">Signin</SubmitButton>
      <CButton to="/" type="submit">Cancel</CButton>
      <Marginer direction="vertical" margin="1em" />
      <CModal
        show={small}
        onClose={() => setSmall(!small)}
        size="sml"
      >
        <CModalHeader closeButton>
          <CModalTitle>Error</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Wrong Email or Password Combination, Please Check your Inputs!
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setSmall(!small)}>Okay</CButton>{' '}

        </CModalFooter>
      </CModal>

      <CModal
        show={small1}
        onClose={() => setSmall1(!small1)}
        size="sml"
      >
        <CModalHeader>
          <CModalTitle>Good Day Admin</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Please click "Continue" button to proceed.
        </CModalBody>
        <CModalFooter>
          <a href="https://bhealthwebapp.herokuapp.com/users">
            <CButton color="primary" onClick={() => setSmall1(!small1)}>Continue</CButton>{' '}
          </a>
        </CModalFooter>
      </CModal>

      <CModal
        show={small2}
        onClose={() => setSmall2(!small2)}
        size="sml"
      >
        <CModalHeader>
          <CModalTitle>Good Day Doctor</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Please click "Continue" button to proceed.
        </CModalBody>
        <CModalFooter>
          <a href="https://bhealthwebapp.herokuapp.com/users">
            <CButton color="primary" onClick={() => setSmall2(!small2)}>Continue</CButton>{' '}
          </a>
        </CModalFooter>
      </CModal>

      <CModal
        show={small3}
        onClose={() => setSmall3(!small3)}
        size="sml"
      >
        <CModalHeader>
          <CModalTitle>Forgotten your password?</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Please enter your email:
          <FormContainer>
            <Input onChange={(e) => {
              setEmail1(e.target.value);
            }} type="email" placeholder="Email" />
          </FormContainer>
        </CModalBody>




        <CModalFooter>
          <div>
            <CButton color="primary" onClick={forgot}>Continue</CButton>{' '}
          </div>
        </CModalFooter>
      </CModal>

      <CModal
        show={small4}
        onClose={() => setSmall4(!small4)}
        size="sml"
      >
        <CModalHeader>
          <CModalTitle>Email Submitted</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Please check your email, you will receive your password there, if you didn't receive an email, kindly contact us.

        </CModalBody>


        <CModalFooter>

          <CButton color="primary" onClick={() => setSmall4(!small4)}>Okay</CButton>{' '}

        </CModalFooter>
      </CModal>


    </BoxContainer>
  );
}
