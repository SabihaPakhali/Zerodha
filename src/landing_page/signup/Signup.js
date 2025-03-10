import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import Toastify from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/api/signup", {
        username,
        email,
        password,
      });
  
      if (response.data.success) {
        toast.success("Signup Successful");
  
        setTimeout(() => {
          window.location.href = "http://localhost:3001/dashboard"; // Redirect to Dashboard App
        }, 2000);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error("Signup Failed");
      console.log(err);
    }
  };
  

  return (
    <div className="signup-container">
      <ToastContainer />
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;






