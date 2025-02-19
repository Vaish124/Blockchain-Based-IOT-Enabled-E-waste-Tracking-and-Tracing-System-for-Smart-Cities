import React, { useEffect, useState } from "react";
import "./Manufacturer.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import axios from "axios";
import CreateProductCard from "../../components/CreateProductCard/CreateProductCard";


const Manufacturer = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get("/api/v1/createproduct");
        setProducts(response?.data?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    const searchProduct = async () => {
      try {
        const response = await axios.get(`/api/v1/products/search?q=${search}`);
        setProducts(response?.data?.data);
      } catch (error) {
        console.error("Error searching products:", error);
      }
    };

    searchProduct();
  }, [search]);

  return (
    <div className="mb-5">
      <Navbar />
      <div className="manufacturer-container">
      <input
        type="text"
        value={search}
        className="mt-3 searchbar"
        placeholder="Search Product"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="products-cards">
        {products.map((product) => (
          <CreateProductCard
            key={product._id}
            name={product.name}
            price={product.price}
            productImg={product.productImg}
            description={product.description}
            _id={product._id}
          />
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Manufacturer;
