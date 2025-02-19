import React from 'react';
import './Contractor.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import profilePic from "./Images/profile.png";
import { Link } from 'react-router-dom';

function Contractor() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className="contractor-card">
          <img src={profilePic} className="product-image" alt="Profile" />
          <h3 className='contractor-name'>Vaishnavi Bhusare</h3>
          <p className='area-name'>Hadpsar Lene No:3</p>
          <p> <a href='tel' className='text-none' >📞 7499297094</a></p>
          <Link to="/contactcard" className='contact-now'>Send Us Message</Link>
        </div>

        <div className="contractor-card">
          <img src={profilePic} className="product-image" alt="Profile" />
          <h3 className='contractor-name'>Vaishnavi Shirsath</h3>
          <p className='area-name'> Nagar</p>
          <p> <a href='tel' className='text-none' >📞 7058908359</a></p>
          <Link to="/contactcard" className='contact-now'>Send Us Message</Link>
        </div>

        <div className="contractor-card">
          <img src={profilePic} className="product-image" alt="Profile" />
          <h3 className='contractor-name'>Pratiksha Vikhe</h3>
          <p className='area-name'>Shewalewadi Nandini Dreams</p>
          <p> <a href='tel' className='text-none' >📞 7020657630</a></p>
          <Link to="/contactcard" className='contact-now'>Send Us Message</Link>
        </div>

        <div className="contractor-card">
          <img src={profilePic} className="product-image" alt="Profile" />
          <h3 className='contractor-name'>Vaishnavi Raut</h3>
          <p className='area-name'>Pimpri Chinchwad</p>
          <p> <a href='tel' className='text-none' >📞 9579776784</a></p>
          <Link to="/contactcard" className='contact-now'>Send Us Message</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contractor;
