import "./Login.css";
import styled from "styled-components";
import { AccountBox } from "../../components/accountBox";
import Navbar from '../../components/Navbar/Navbar1';
import {

    CContainer,

} from '@coreui/react'

const AppContainer = styled.div`
background-color: white;
// margin-top: 100px;
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Login() {
    return (
        <div>
            <Navbar />
            <div className="log">
            <AppContainer>
                <AccountBox />
            </AppContainer>
            </div>
        </div>
    );
}

export default Login;
