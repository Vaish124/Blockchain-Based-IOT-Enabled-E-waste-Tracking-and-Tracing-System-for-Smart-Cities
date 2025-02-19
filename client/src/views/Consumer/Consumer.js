// import React from "react";
// import "./Consumer.css";
// import Navbar from "./../../components/Navbar/Navbar";
// import Footer from "./../../components/Footer/Footer";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import consumerCard from "../../components/RecyclingCard/ConsumerCard.js";
// const Consumer = () => {
//   const [consumerProduct, setConsumerProduct] = useState([]);
//   const [search, setSearch] = useState("");

//   const loadProducts = async () => {
//     const response = await axios.get("/api/v1/consumerproducts");
//     setConsumerProduct(response?.data?.data);
//   };

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   const searchProduct = async () => {
//     const response = await axios.get(`/product/search?q=${search}`);
//     setConsumerProduct(response?.data?.data);
//   };

//   useEffect(() => {
//     searchProduct();
//   }, [search]);
//   return (
//     <div>
//       <Navbar />

//       <input
//         type="text"
//         value={search}
//         className="mt-3 searchbar"
//         placeholder="Search Product"
//         onChange={(e) => {
//           setSearch(e.target.value);
//         }}
//       />
//       <div className="card-container">
//       {consumerProduct?.map((product, i) => {
//           const { _id, name, consumerproductprice, consumerproductimg, consumerproductDescription,consumerproductquantity } = product;
//           return (
//             <consumerCard
//               key={i}
//               consumerproductimg={consumerproductimg}
//               name={name}
//               consumerproductprice={consumerproductprice}
//               consumerproductquantity={consumerproductquantity}
//               consumerproductDescription={consumerproductDescription}
//               _id={_id}
//             />
//           );
//         })
//         }
//         </div>

//       <Footer />
//     </div>
//   );
// };

// export default Consumer;

import React from "react";
import "./Consumer.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Consumers() {
  const [products, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const loadProducts = async () => {
    const response = await axios.get("/api/v1/consumerproducts");
    setProduct(response?.data?.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const searchProduct = async () => {
    const response = await axios.get(`/product/search?q=${search}`);
    setProduct(response?.data?.data);
  };

  useEffect(() => {
    searchProduct();
  }, [search]);
  return (
    <div>
      <Navbar />

      <input
        type="text"
        value={search}
        className="mt-3 searchbar"
        placeholder="Search Product"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="products-cards">
        {products?.map((product, i) => {
          const { _id, name, price, productImg, description } = product;
          return (
            <ProductCard
              key={i}
              name={name}
              price={price}
              productImg={productImg}
              description={description}
              _id={_id}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Consumers;
