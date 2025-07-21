import React, { useState } from "react";
import "../styles/login.css"; // Make sure this path is correct

const Login = () => {
  const [view, setView] = useState("login");
  const [otp, setOtp] = useState("");
  const [mobileInput, setMobileInput] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([
    { username: "user123", password: "pass123", email: "user@example.com", mobile: "1234567890" },
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setError("");
      alert("Login successful!");
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = {
      username: e.target.username.value,
      email: e.target.email.value,
      mobile: e.target.mobile.value,
      password: e.target.password.value,
    };
    const exists = users.some(
      (u) =>
        u.username === newUser.username ||
        u.email === newUser.email ||
        u.mobile === newUser.mobile
    );
    if (exists) {
      alert("User already exists.");
    } else {
      setUsers([...users, newUser]);
      alert("Registration successful!");
      setView("login");
    }
  };

  const handleSendOTP = (e) => {
    e.preventDefault();
    const found = users.find((u) => u.mobile === mobileInput);
    if (found) {
      alert("OTP sent successfully to " + mobileInput);
      setView("otp");
    } else {
      alert("Mobile number not found.");
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      alert("OTP Verified! Proceed to reset.");
    } else {
      alert("Invalid OTP.");
    }
  };

  const renderForm = () => {
    switch (view) {
      case "login":
        return (
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <span className="icon">👤</span>
              <input type="text" name="username" placeholder="Username" required />
            </div>
            <div className="input-group">
              <span className="icon">🔒</span>
              <input type="password" name="password" placeholder="Password" required />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="brutalist-button">Log In</button>
            <a href="#" onClick={() => setView("forgot")}>Forgot Password?</a>
            <a href="#" onClick={() => setView("register")}>Sign Up</a>
          </form>
        );
      case "register":
        return (
          <form onSubmit={handleRegister}>
            <div className="input-group">
              <span className="icon">👤</span>
              <input type="text" name="username" placeholder="Username" required />
            </div>
            <div className="input-group">
              <span className="icon">📧</span>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <span className="icon">📱</span>
              <input type="text" name="mobile" placeholder="Mobile Number" required />
            </div>
            <div className="input-group">
              <span className="icon">🔒</span>
              <input type="password" name="password" placeholder="Password" required />
            </div>
            <button type="submit" className="brutalist-button">Register</button>
            <a href="#" onClick={() => setView("login")}>Back to Login</a>
          </form>
        );
      case "forgot":
        return (
          <form onSubmit={handleSendOTP}>
            <div className="input-group">
              <span className="icon">📱</span>
              <input
                type="text"
                placeholder="Registered Mobile Number"
                value={mobileInput}
                onChange={(e) => setMobileInput(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="brutalist-button">Send OTP</button>
            <a href="#" onClick={() => setView("login")}>Back to Login</a>
          </form>
        );
      case "otp":
        return (
          <form onSubmit={handleVerifyOTP}>
            <div className="input-group">
              <span className="icon">🔢</span>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="brutalist-button">Verify</button>
            <a href="#" onClick={() => setView("forgot")}>Resend OTP</a>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>
          {view === "login"
            ? "Login"
            : view === "register"
            ? "Sign Up"
            : view === "forgot"
            ? "Forgot Password"
            : "Verify OTP"}
        </h2>
        {renderForm()}
      </div>
    </div>
  );
};

export default Login;
