import React, { useRef, useState } from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="./netflix-image.png" alt="" />
        </div>
      </div>
      <div className="container">
        <form action="">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
