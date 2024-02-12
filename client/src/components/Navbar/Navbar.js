import React, { useEffect, useState } from 'react'
import "./Navbar.css";
// import axios from 'axios';
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);


  useEffect(() => {
    const storageUse = JSON.parse(localStorage.getItem("user") || '{}');
    setUser(storageUse);
  }, [])
  // useEffect(() => {
  //   const fetchUserId = async () => {
  //     try {
  //       const response = await axios.get('/login'); // Replace '/api/user' with your actual backend endpoint
  //       setUserId(response.data.data.id);
  //     } catch (error) {
  //       console.error('Error fetching user ID:', error);
  //     }
  //   };

  //   fetchUserId();
  // }, []);


  return (
    <div className="navbar">
      <Link to="/" className="navbar-brand">
        🗑️E-waste
      </Link>

      <div className='navbar-links-container'>
        <Link to="/login" className="navbar-link">
          Login
        </Link>
        <Link to="/signup" className="navbar-link">
          Signup
        </Link>
      </div>
      <div>

        <span className='text-dark fs-5'>Hello 👋,{user?.name || 'user'}</span>
       

        {
          user?.name ? (
            <span className='text-dark fs-5 ms-3 curser-pointer' onClick={() => {
              localStorage.removeItem('user')
              window.location.href = '/login'
            }}> Logout </span>

          ) : null
        }


      </div>
    </div>
  )
}

export default Navbar