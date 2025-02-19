import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import dataunitimg from "../DataUnit/DataUnitImg/data-destruction.webp";
import dataunitimg2 from "../DataUnit/DataUnitImg/disposal-services.png";
import { Link } from "react-router-dom";
import "./DataUnit.css";

function DataUnit() {
  return (
    <>
      <Navbar />
      <div className="data-unit-page">
        <h1 className="text-center my-3 mb-5">
          Electronic Waste Data Destruction Unit
        </h1>

        <div className="text-center">
          <img src={dataunitimg} alt="imgunit" className="img-fluid mb-4" />
        </div>

        <div className="data-unit-container container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src={dataunitimg2} alt="img-disposal" className="img-fluid" />
            </div>

            <div className="col-md-6 destruction-text">
              <h2 className="fw-bold">Secure Data Destruction Services</h2>
              <p>
                We provide secure data destruction services for electronic waste
                to protect your sensitive information. The risk of a data breach
                doesn’t end when you retire old computers, hard drives, servers,
                and other electronics. That’s why you need data destruction and IT
                recycling services after your equipment is no longer useful to your
                organization.
              </p>
              <p>
                At Newtech Recycling, we offer data destruction as well as IT
                hardware and server recycling as part of our corporate cleanout
                services. We make it easy to find data destruction solutions that
                work for your business.
              </p>
              <button type="button" className="btn btn-outline-primary fw-bold my-3">
                Destruction
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default DataUnit;
