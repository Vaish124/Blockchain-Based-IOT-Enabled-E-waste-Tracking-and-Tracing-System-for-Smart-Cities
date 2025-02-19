// import React, { useState, useEffect } from 'react';
// import './CreatingOrder.css';
// import { Link, useParams } from 'react-router-dom';
// import NavbarConsumer from './../../components/Navbar/Navbar';
// import axios from 'axios';

// const CreatingOrder = () => {
//     const { _id } = useParams();

//     const STATUS_BADGES = {
//         pending: 'text-danger',
//         delivered: 'text-success',
//         shipped: 'text-warning',
//     };

//     const [user, setUser] = useState({});
//     const [orders, setOrders] = useState([]);

//     const loadUserFromLocalStorage = () => {
//         const storeUser = JSON.parse(localStorage.getItem('user'));

//         if (storeUser) {
//             setUser(storeUser);
//             getUserOrders(storeUser._id);
//         } else {
//             alert('You are not logged in!');
//             window.location.href = '/';
//         }
//     };

//     useEffect(() => {
//         loadUserFromLocalStorage();
//     }, []);

//     const getUserOrders = async (currentUserId) => {
//         try {
//             const response = await axios.get(`/orders/user/${currentUserId}`);
//             if (response?.data?.data) {
//                 setOrders(response.data.data);
//             }
//         } catch (err) {
//             console.error('Error fetching user orders:', err);
//             // Handle error here, perhaps display an error message to the user
//         }
//     };

//     const calculateTotalAmount = () => {
//         let total = 0;
//         orders.forEach((order) => {
//             const { product, quantity } = order;
//             if (product) {
//                 total += product.price * quantity;
//             }
//         });
//         return total;
//     };

//     return (
//         <div>
//             <NavbarConsumer />
//             <Link to="/home">
//                 <span className="fs- bg-dark text-light ps-2 pe-2">⬅</span>
//             </Link>

//             <div className="card-order mt-4">
//                 <p className="text-center mt-4 fs-1">My Orders</p>
//                 {orders.map((order) => {
//                     const { product, quantity, shipping_address, status, delivery_charges } = order;
//                     if (!product) {
//                         return null; // Skip rendering if product is null
//                     }
//                     return (
//                         <div className="my-order-card" key={order._id}>
//                             <div>
//                                 <div className="">
//                                     <img src={product.image} alt={product.name} className="myorder-product-img" />
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="ps-5 pt-4">
//                                     <Link to={`/buy/${product._id}`} className="myorder-product-name">{product.name}</Link>
//                                     <br />
//                                     <span className="fw-bold"> Qty:{quantity} </span> <span className="fw-bold ms-5 price"> Price: ₹ {product.price}/- </span>
//                                     <p className="mt-2 totalamount">
//                                         <span className="text-primary fw-bold">Amount = ₹ {product.price * quantity}</span>
//                                     </p>
//                                     <p className="mt-2 fw-bold">Shipping Address: {shipping_address}</p>
//                                     <p className={`status ${STATUS_BADGES[status]}`}>{status}</p>
//                                     <p className="fw-bold">Delivery Charges: ₹ {delivery_charges}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     );
//                 })}
//                 <h4 className="total-amount">
//                     TOTAL AMOUNT : ₹<span className=" me-3">{calculateTotalAmount()}</span>{' '}
//                 </h4>
//             </div>
//         </div>
//     );
// };

// export default CreatingOrder;
