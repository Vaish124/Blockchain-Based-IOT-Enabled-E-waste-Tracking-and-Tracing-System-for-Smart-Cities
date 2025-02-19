import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WasteBin.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function WasteBins() {
  return (
    <>
      <Navbar />
      <h1 className="text-center mb-5 mt-5">Our Smart Waste Bins</h1>
      <div className="container my-5">
      
        {/* <section>
         
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Ferrous Smart Waste Bin</h2>
                  <p className="card-text">
                    The Ferrous Smart Waste Bin is designed to collect ferrous materials such as iron and steel. It helps in recycling and managing these materials efficiently.
                  </p>
                  <ul>
                    <li>Capacity: 50 liters</li>
                    <li>Location: Industrial Area</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Non-Ferrous Smart Waste Bin</h2>
                  <p className="card-text">
                    The Non-Ferrous Smart Waste Bin is dedicated to non-ferrous materials like aluminum, copper, and brass. It promotes eco-friendly disposal of these materials.
                  </p>
                  <ul>
                    <li>Capacity: 40 liters</li>
                    <li>Location: Residential Area</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="text-center mt-5">
          
          <a 
            href="https://docs.google.com/spreadsheets/d/1HzZ-ApxkvVs-1nC4kEaNB9-wztjM0I61xhcqJ_kvYgM/edit?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary mt-3"
          >
            View Our Data Sheet
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default WasteBins;
