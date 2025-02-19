import React from "react";
import "./HomeConsumer.css";
import { Link } from "react-router-dom";
import NavbarConsumer from "../../components/NavbarConsumer/NavbarConsumer";
import Footer from "../../components/Footer/Footer";
import manufacture from "./Images/manufacturer.png";
import consumers from "./Images/consumers.png";
import wasteBin from "./Images/waste-bin.png";
import wasteCollection from "./Images/waste-collection.png";
import contractors from "./Images/contractors.png";
import wasteRecycling from "./Images/waste-recycling.png";
import dataDestruction from "./Images/data-destruction.png";
import rightArrow from "./Images/right-arrow.png";
import retailers from "./Images/retailers.png";

function HomeConsumer() {
  return (
    <>
     <NavbarConsumer/>
      <div>
        <div>
          <h1 className="service-text">Our Services</h1>

          <div className="containers">
            <div className="feature-card">
              <img
                src={consumers}
                className="img-manufacturer"
                alt="consumers"
              />
              <h3 className="title">Consumers</h3>
              <Link to="/consumer">
                <img src={rightArrow} className="right-arrow" alt="arrow" />
              </Link>
            </div>

            <div className="feature-card">
              <img
                src={contractors}
                className="img-manufacturer"
                alt="contractors"
              />
              <h3 className="title">Contractors</h3>
              <Link to="/contractor">
                <img src={rightArrow} className="right-arrow" alt="arrow" />
              </Link>
            </div>

            <div className="feature-card">
              <img
                src={wasteCollection}
                className="img-manufacturer"
                alt="waste-collection"
              />
              <h3 className="title">Waste Collection Center</h3>
              <Link to="/center">
                <img src={rightArrow} className="right-arrow" alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomeConsumer;
