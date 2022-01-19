import { sha256 } from 'js-sha256';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";

const SignUpContainer = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.8rem;
  z-index:2;

  .inValidInput {
    border-color: red;
  }
`;

const SignUp = () => {
  // Page redirection variance
  const history = useNavigate();
  // Input data variances
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [mobile, setMobile] = useState('-');
  // Event handlers
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    isValidEmailFromat(email) ? setIsValidEmail(true) : setIsValidEmail(false);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangePasswordCheck = (event) => {
    setPasswordCheck(event.target.value);
  };
  const handleChangeMobile = (event) => {
    setMobile(event.target.value);
    if (mobile.length ===3 || mobile.length === 8) setMobile(mobile + '-')
  };
  const handleSignupSubmit = async () => {
    const userInformation = {
      email: email,
      name: name,
      password: sha256(password),
      mobile: mobile
    }

    try {
      await axios.post('https://localhost:4000/signup',{userInformation});
      history.push("/signin");
    } catch (err) {
      console.log(err);
    }
  };
  // Validation check
  const isValidEmailFromat = (string) => {
    const format = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    return format.test(string); 
  }
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  return (
      <SignUpContainer>
          <section>
            <h1>Registration</h1>
          </section>
          <section>Email*</section>
            <input type='text' placeholder='Enter Email' onChange={handleChangeEmail} className={isValidEmail ? '' : 'inValidInput'} required />
            {isValidEmail ? '' : <div>올바른 이메일 형식이 아닙니다</div>}
          <section>Name*</section>
            <input type='text' placeholder='이름을 8자 이내로 입력해주세요' onChange={handleChangeName} MaxLength='8' required />
          <section>Password*</section>
            <input type='password' placeholder='Enter Password' onChange={handleChangePassword} required />
          <section>Password Check*</section>
            <input type='password' placeholder='Enter Email' onChange={handleChangePasswordCheck} required />
          <section>Mobile</section>
            <input type='tel' placeholder='010-0000-0000' onChange={handleChangeMobile} MaxLength='13' />
          <p>
            <button onClick={() => handleSignupSubmit()}>Submit</button>
          </p>
          <p>Already have an account? <a href="/">Sign in</a>.</p>
      </SignUpContainer>
  );
};

export default SignUp;