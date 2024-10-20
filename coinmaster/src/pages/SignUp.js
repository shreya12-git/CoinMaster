import React, { useState } from "react";
import "./SignUp.css";
import logingif from "../assets/logingif.gif"; // Adjust the image path as necessary
import { Link } from "react-router-dom";

const SignUp = () => {
  // State variables for initial input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  // State to manage the view (step)
  const [step, setStep] = useState(1); // Step 1: input email/password, Step 2: input OTP

  const handleGetOtp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sending OTP to:", email);
    // Here you would typically send a request to your server to send the OTP
    // For demo, just log it and move to step 2
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password, "OTP:", otp);
    // Add your form submission logic here
  };

  return (
    <div className="signuppage">
      <div className="signupimage">
        <img src={logingif} width={500} height={500} style={{ borderRadius: '40px 0 0 40px' }} alt="Login Animation" />
      </div>
      <div className="signupcontainer">
        <div className="signup-box">
          <h2>Sign Up</h2>
          <form onSubmit={step === 1 ? handleGetOtp : handleSubmit}>
            {step === 1 && (
              <>
                <div className="input-box">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email"
                  />
                  <label>Email</label>
                </div>

                <div className="input-box">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="Password"
                  />
                  <label>Password</label>
                </div>

                <div className="input-box">
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    aria-label="Confirm Password"
                  />
                  <label>Confirm Password</label>
                </div>

                <button className="btn" type="submit">
                  Get OTP
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <div className="input-box">
                  <input
                    type="text"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    aria-label="OTP"
                  />
                  <label>OTP</label>
                </div>

                <button className="btn" type="submit">
                  Sign Up
                </button>
              </>
            )}

            <div className="login-link" style={{ display: "flex", gap: "5px" }}>
              <p style={{ color: "white" }}>Already have an account?</p>
              <Link to='/login' style={{ textDecoration: "underline" }}>Login</Link>
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
