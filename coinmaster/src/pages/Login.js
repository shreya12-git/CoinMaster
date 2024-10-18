import React, { useState } from "react";
import "./Login.css";
import login from "../assets/loginimg.jpg";
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
        <img src={login} width={500} height={500}></img>
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

            <div className="signup-link">
              <a href="#">Signup</a>
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
