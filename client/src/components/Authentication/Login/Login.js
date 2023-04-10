import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { email, password });
      console.log("login response ------ ", response);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      props.onLogin();
      history("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="login_container">
      <div className="login_content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login_input">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
          </div>
          <div className="login_input">
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
          </div>
          {error && <div>{error}</div>}
          <div className="login_btn">
            <button type="submit">Login</button>
          </div>
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;