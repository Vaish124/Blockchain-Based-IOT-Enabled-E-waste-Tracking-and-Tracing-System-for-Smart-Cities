import React, { useState } from "react";
import "./RecyclingPlant.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

function RecyclingPlant() {
  const [name, setName] = useState("");
  const [productImg, setProductImg] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const productBtn = async () => {
    if (!name || !productImg || !price || !description || !quantity) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("/api/v1/createproduct", {
        name,
        productImg,
        price,
        description,
        quantity,
      });

      if (response?.data?.success) {
        alert(response.data.message);
        window.location.href = "/certificate";
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }

    // Clear input fields after submission
    setName("");
    setProductImg("");
    setDescription("");
    setPrice("");
    setQuantity("");
  };

  return (
    <>
    <div className="recycle-plant">
      <Navbar />
      <div className="waste-recycling-plant container">
        <h1>Welcome to Our E-Waste Recycling Plant</h1>
        <p>
          Our recycling plant is dedicated to environmentally responsible waste
          management and recycling. We offer a wide range of recycling services
          to help protect the environment and reduce waste.
        </p>

        <form className="Product-form">
          <h2>Product Send For Manufacturing</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Product name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Product Image"
              className="form-control"
              value={productImg}
              onChange={(e) => setProductImg(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Product price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Product description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Product quantity"
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={productBtn}
            className="btn btn-primary"
          >
            Send
          </button>
        </form>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default RecyclingPlant;
