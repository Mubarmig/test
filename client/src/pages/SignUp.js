import { sha256 } from 'js-sha256';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [mobile, setMobile] = useState('-');
  // const history = useNavigate();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
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
  };
  const handleSignupSubmit = async () => {
    const userInformation = {
      email: email,
      name: name,
      password: sha256(password),
      mobile: mobile,
    };

    try {
      await axios.post('https://localhost:4000/signup', { userInformation });
      // history.push("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form>
      <section>
        <h1>Registration</h1>
      </section>
      <section>Email*</section>
      <input type="text" placeholder="Enter Email" onChange={handleChangeEmail} required />
      <section>Name*</section>
      <input
        type="text"
        placeholder="이름을 8자 이내로 입력해주세요"
        onChange={handleChangeName}
        required
      />
      <section>Password*</section>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={handleChangePassword}
        required
      />
      <section>Password Check*</section>
      <input
        type="password"
        placeholder="Enter Email"
        onChange={handleChangePasswordCheck}
        required
      />
      <section>Mobile</section>
      <input type="text" placeholder="010-0000-0000" onChange={handleChangeMobile} />
      <p>
        <button onClick={() => handleSignupSubmit()}>Submit</button>
      </p>
      <p>
        Already have an account? <a href="/">Sign in</a>.
      </p>
    </form>
  );
};

export default SignUp;
