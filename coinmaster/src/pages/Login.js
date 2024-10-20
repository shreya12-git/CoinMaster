import React, { useState } from "react";
import "./Login.css";
import login from "../assets/loginimg.jpg";
import logingif from "../assets/logingif.gif";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="loginpage">
      <div className="loginimage">
        <img src={logingif} width={500} height={500} style={{borderRadius:'40px 0 0 40px' }}></img>
      </div>
      <div className="logincontainer">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>

            <div className="input-box">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>

            <div className="forgot-pass">
              <a href="#">Forgot your password?</a>
            </div>

            <button className="btn" type="submit">
              Login
            </button>

            <div className="signup-link" style={{display:"flex", gap:"5px"}}>
              <p style={{color:"white"}}>Do not have an account?</p><Link to='/signup' style={{textDecoration:"underline"}}>SignUp</Link>
            </div>
          </form>
        </div>

        {/* Animated background elements */}
        {[...Array(50)].map((_, i) => (
          <span key={i} style={{ "--i": i }}></span>
        ))}
      </div>
    </div>
  );
};

export default Login;
