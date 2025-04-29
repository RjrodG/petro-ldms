import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';
import logo1 from "../../assets/img/login-logo-zcmc.png";
import logo2 from "../../assets/img/login-logo-petro.png";
import loginImage from "../../assets/img/login-main-img.gif";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/dashboard'); // Redirect to dashboard
      navigate('/dashboard'); // Redirect to dashboard
      
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="logo-container">
          <img src={logo1} alt="Logo 1" className="logo" />
          <img src={logo2} alt="Logo 2" className="logo" />
        </div>
        <h1>ZCMC PETRO</h1>
        <p>Learning and Development Management System</p>
        <form className="form-container" onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            autoFocus
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
        <div className="footer">
          © ZCMC Professional Education Training and Research Office 2024
        </div>
      </div>

      <div className="right">
        <img src={loginImage} alt="Login-Image" />
      </div>
    </div>
  );
}

export default Login;
