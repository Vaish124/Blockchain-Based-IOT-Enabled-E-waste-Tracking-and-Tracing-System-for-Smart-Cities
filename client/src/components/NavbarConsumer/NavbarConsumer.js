
import React, { useEffect, useState } from "react";
import "./NavbarConsumer.css";
import showToast from "crunchy-toast";
import { Link } from "react-router-dom";


function NavbarConsumer() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storageUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
    showToast("Logout Succesfully..!", "success", 4000);
  };

  return (
    <div className="navbar">
      <Link to="/homeConsumer" className="navbar-title fw-bold fs-2">
        🗑️ E-WASTE
      </Link>

      <div className="navbar-links-container">
        <Link to="/homeConsumer" className="navbar-link mx-4 fw-semibold">
          {" "}
          E-Waste Units{" "}
        </Link>
        <Link to="/orders" className="navbar-link mx-4 fw-semibold">
          {" "}
       My-order{" "}
        </Link>

        {/* <Link to='/signup'  className="navbar-l ink"> Signup </Link> */}

        {user?.name ? (
          <button
            type="button"
            className="navbar-link log-outbtn mx-4 px-4"
            onClick={logout}
          >
            {" "}
            Logout{" "}
          </button>
        ) : (
          <span>
            <Link to="/signup" className="navbar-link">
              {" "}
              Signup{" "}
            </Link>{" "}
            <Link to="/" className="navbar-link">
              login
            </Link>{" "}
          </span>
        )}

        <span className="mx-2 fs-5 fw-semibold ">👋 Hey {user?.name || "User"} !</span>
      </div>
    </div>
  );
}

export default NavbarConsumer;
