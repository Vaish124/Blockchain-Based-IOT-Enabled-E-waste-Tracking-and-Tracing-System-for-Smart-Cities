import React, { useState } from "react";
import showToast from "crunchy-toast";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginBtn = async () => {
    if (!email) {
      alert("Email is required");
      return;
    }
    if (!password) {
      alert("Password is required");
      return;
    }

    try {
      const response = await axios.post("/login", {
        email: email,
        password: password,
      });
    
      console.log("Login response:", response); // Log the entire response
    
      if (response?.data?.success) {
        showToast(response.data.message, "success", 4000);
        localStorage.setItem("user", JSON.stringify(response?.data.data));
    
        // Check the role after successful login
        const userRole = response?.data?.data?.role;
        console.log("User role:", userRole);
    
        // Redirect based on the user's role using window.location
        if (userRole === "Consumers") {
          window.location.href = "/HomeConsumer";
        } else {
          window.location.href = "/home";
        }
      } else {
        showToast(response.data.message, "warning", 4000);
      }
    } catch (error) {
      console.error("Login error:", error);
      showToast("An error occurred during login", "error", 4000);
    }
  }    

  return (
    <>
      <div className="login-form">
        <h1 className="text-center">Login</h1>

        <div>
          <input
            type="email"
            placeholder="Enter Email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="button" className="loginbtn" onClick={loginBtn}>
          LogIn
        </button>
        <Link to="/signup" className="login-link">
          Don't have an account? SignUp
        </Link>
      </div>
      <Footer />
    </>
  );
}
