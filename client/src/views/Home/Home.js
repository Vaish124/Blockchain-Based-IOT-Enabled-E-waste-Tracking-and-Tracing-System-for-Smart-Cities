import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import manufacture from "./Images/manufacturer.png";
import consumers from "./Images/consumers.png";
import wasteBin from "./Images/waste-bin.png";
import wasteCollection from "./Images/waste-collection.png";
import contractors from "./Images/contractors.png";
import wasteRecycling from "./Images/waste-recycling.png";
import dataDestruction from "./Images/data-destruction.png";
import rightArrow from "./Images/right-arrow.png";
import retailers from './Images/retailers.png';

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <h1 className='service-text'>Our Services</h1>

          <div className='container'>
            
            <div className='feature-card'>
              <img src={manufacture} className="img-manufacturer" alt="manufacturer" />
              <h3 className='title'>Manufacturer</h3>
              <Link to='/manufacturer'><img src={rightArrow} className='right-arrow' alt="arrow" /></Link>
            </div>

            <div className='feature-card'>
              <img src={retailers} className="img-manufacturer" alt="retailers" />
              <h3 className='title'>Retailers</h3>
              <Link to='/retailer'><img src={rightArrow} className='right-arrow' alt="arrow" /></Link>
            </div>

            {/* <div className='feature-card'>
              <img src={consumers} className="img-manufacturer" alt="consumers" />
              <h3 className='title'>Consumers</h3>
              <Link to='/consumer'><img src={rightArrow} className='right-arrow' alt="arrow" /></Link>
            </div> */}

            <div className='feature-card'>
              <img src={contractors} className="img-manufacturer" alt="contractors" />
              <h3 className='title'>Contractors</h3>
              <Link to='/contractor'><img src={rightArrow} className='right-arrow' alt="arrow" /></Link>
            </div>

          </div>
        </div>
      </div>
      <div>
        <div>
          <div className='container'>
            <div className='feature-card'>
              <img src={wasteCollection} className="img-manufacturer" alt="waste-collection" />
              <h3 className='title'>Waste Collection Center</h3>
              <Link to='/center'><img src={rightArrow} className='right-arrow' alt="arrow" /></Link>
            </div>

            <div className='feature-card'>
              <img src={wasteBin} className="img-manufacturer" alt="waste-bin" />
              <h3 className='title'>Smart <br /> Waste Bins</h3>
              <Link to='/wasteBin'><img src={rightArrow} className='right-arrow' alt="arrow" /></Link>
            </div>

            <div className='feature-card'>
              <img src={wasteRecycling} className="img-manufacturer" alt="waste recycling plant" />
              <h3 className='title'>Waste Recycling Plant</h3>
              <Link to='/recyclingPlant'><img src={rightArrow} className='right-arrow' alt="arrow" /></Link>
            </div>

            <div className='feature-card'>
              <img src={dataDestruction} className="img-manufacturer" alt="data-destruction-unit" />
              <h3 className='title'>Data Destruction Unit</h3>
              <Link to="/dataUnit"><img src={rightArrow} className='right-arrow' alt="arrow" /></Link>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home