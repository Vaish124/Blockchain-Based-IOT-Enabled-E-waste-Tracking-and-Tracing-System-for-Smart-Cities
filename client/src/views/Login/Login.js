import React, {useState, useEffect} from 'react'
import "./Login.css";
import { Link } from "react-router-dom"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(()=>{
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');

    if(storageUser?.email){
      alert("You are already logged in!");
      window.location.href = "/";
    }

  }, [])

  return (
    <div>
      <form className="login-form">
        <h1 className='text-center'>Login</h1>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email"
            placeholder="Enter your email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password"
            placeholder="Enter your password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }} />
        </div>

        <button type="button" className="btn login-btn">
          Login
        </button>

        <p className="text-right">
          <Link to="/signup">Create a new account?</Link>
        </p>

      </form>
    </div>
  )
}

export default Login
