import React, { useState } from "react";
import "./SignUp.css";
import login from "../assets/loginimg.jpg";
import { Link } from "react-router-dom";
import logingif from "../assets/logingif.gif";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="signuppage">
      <div className="signupimage">
        <img src={logingif} width={500} height={500} style={{borderRadius:'40px 0 0 40px'}}></img>
      </div>
      <div className="signupcontainer">
        <div className="signup-box">
          <h2>SignUp</h2>
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
            <div className="input-box">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Confirm Password</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>OTP</label>
            </div>
            

            <button className="btn" type="submit">
              SignUp
            </button>

            <div className="login-link" style={{display:"flex", gap:"5px"}}>
              <p style={{color:"white"}}>Already have an account?</p><Link to='/login' style={{textDecoration:"underline"}}>Login</Link>
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

export default SignUp;
