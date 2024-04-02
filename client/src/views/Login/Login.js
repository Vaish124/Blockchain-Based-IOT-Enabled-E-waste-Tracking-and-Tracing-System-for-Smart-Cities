

import React from "react";
import { useState, useEffect } from "react";
import showToast from "crunchy-toast";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginBtn = async () => {
    if (!email) {
      alert("email is required");
      return;
    }
    if (!password) {
      alert("password is required");
      return;
    }

    const response = await axios.post("/login", {
      email: email,
      password: password,
    });

    // console.log(user.email)

    if (response?.data?.success) {
      showToast(response.data.message, "success", 4000);
      localStorage.setItem("user", JSON.stringify(response?.data.data));
      window.location.href = "/";
    } else {
      showToast(response.data.message, "warning", 4000);
    }
  };

  // const checkvalidity = ()=>{
  //   const response =JSON.parse(localStorage.getItem("user"))
  //   if(response){
  //       alert('you  have already logged in ')
  //       // showToast('you have already logged in', "success", 4000);
  //       window.location.href='/'
  //   }

  // }
  // useEffect(()=>{
  //   checkvalidity()
  // },[])

  return (
    <>
      <Navbar />
      <div className="login-form">
        <h1 className="text-center">Login</h1>

        <div>
          {/* <label htmlFor="name">Email</label> */}
          <input
            type="email"
            placeholder="Enter Email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="button" className=" loginbtn" onClick={loginBtn}>
          LogIn
        </button>
        <Link to="/signup" className="login-link">
          Don't have account ? SignUp
        </Link>
      </div>
      <Footer />
    </>
  );
}
