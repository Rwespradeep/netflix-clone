import React, { useRef, useState } from "react";
import "./RegisterUser.scss";

const RegisterUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handlefinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="./netflix-image.png" alt="" />
          <button className="loginButton"> Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV Shows and more..</h1>
        <h2>Stream Anywhere. Pause anytime.</h2>
        <p>Ready to get started? Enter you email address to get registered.</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email Address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="registerButton" onClick={handlefinish}>
              Start Membership
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterUser;
