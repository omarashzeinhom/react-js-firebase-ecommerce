import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1652527482/theshop/logo/TheSHOP_bsypza.webp"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInBtn">Sign in</button>
        </form>
        <p>
          By Signing in you agree to the TheShop prototype Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our interest-based ads notice.
        </p>
        <button className="login__registerBtn">Register your account</button>
      </div>
    </div>
  );
}

export default Login;
