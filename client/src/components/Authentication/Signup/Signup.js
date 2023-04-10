import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.scss";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/signup", { name, email, password });
      history("/login");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="signup_container">
    <div className="signup_content">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="signup_input">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name"/>
        </div>
        <div className="signup_input">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/>
        </div>
        <div className="signup_input">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
        </div>
        {error && <div>{error}</div>}
        <div className="signup_btn">
        <button type="submit">Signup</button>
        </div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
      </div>
    </div>
  );
};

export default Signup;