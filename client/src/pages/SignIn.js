import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled, { createGlobalStyle } from "styled-components";
import logo from '../data/logo.png';

const LoginContainer = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.8rem;
`;

const LoginInput = styled.input`
  width: 400px;
  font-size: 1.1rem;
  padding: 0.4rem;
  margin: 0.4rem;
`;

const LoginButton = styled.button`
  width: 416px;
  font-size: 1.1rem;
  padding: 0.4rem;
  margin: 0.4rem ;
`;

// const LogoContainer = styled.div`
//   height: 30%;
// `;
const Logo = styled.img`
  src: ${(props) => props.src};
  width: 125px;
  height: 100%;
  cursor: pointer;
`;

axios.defaults.withCredentials = true;
const SignIn = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const { email, password } = loginInfo;
  // if (!email || !password) {
  //   setErrorMessage('이메일과 비밀번호를 입력하세요');
  // }
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  return (
  <div>
    <LoginContainer>
    <Logo src={logo} />
    <br/>
      <LoginInput placeholder="email" onchange={handleInputValue('email')} />
    <br/>
      <LoginInput placeholder="password" onchange={handleInputValue('password')} />
    <br/>
    <LoginButton>
      sign in
    </LoginButton>

    </LoginContainer>

    {/* <div>
    <Link to='/signup'>아직 아이디가 없으신가요?</Link>
    </div> */}
    <div className='alert-box'>{errorMessage}</div>
  </div>
  )

};

export default SignIn;
