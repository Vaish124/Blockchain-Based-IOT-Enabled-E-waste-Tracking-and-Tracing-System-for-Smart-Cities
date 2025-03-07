import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './CreateProductBuy.css'
import Navbar from './../../components/Navbar/Navbar';

import { useParams } from 'react-router-dom'

const CreateProductBuy = () => {
    const { _id } = useParams();

    const [productDetails, setproductDetails] = useState({})

    let [quantity, SetQuantity] = useState(1)
    const [shippingAdress, setShippingAddress] = useState('')
    const [deliverycharges, setDeliveryCharges] = useState(0)


    const loadProductDetails = async () => {

        const response = await axios.get(`/api/v1/createproduct/${_id}`)

        setproductDetails(response?.data?.data)
    }


    useEffect(() => {
        loadProductDetails()

    })


    const increQuantity = () => {

        SetQuantity(++quantity)
    }

    const decrQuantity = () => {

        if (quantity === 1) return

        SetQuantity(--quantity)
    }


    const orderPlace = async () => {

        const userStore = JSON.parse(localStorage.getItem('user') || '{}')

        const newOrderUser = {
            user: userStore?._id,
            product: productDetails._id,
            quantity: quantity,
            shipping_address: shippingAdress,
            delivery_charges: deliverycharges
        }

        const response = await axios.post('/orders', newOrderUser)

        alert (response?.data?.message)

        if (response?.data.success) {
            window.location.href = "/orders"
        }
    }



    return (
        <div><Navbar/>
        <div className='container buyDetails-main-container mt-5'>

            <div className='buy-details-container'>
                <div className='p-3'>
                    <img src={productDetails.productImg} alt={productDetails.name} className='order-product-img' />

                </div>

                <div>
                    <div className='pt-3'>
                        <h2>{productDetails.name}</h2>
                        <h2 className='price' >Price : ₹ {productDetails.price} /-</h2>
                        <p>{productDetails.description}</p>
                        <button type="button"
                            onClick={increQuantity} className='quantitybtn'>+</button>
                        <button className='quantity '>{quantity}</button>
                        <button type="button"
                            onClick={decrQuantity} className='quantitybtn'>-</button><br /><br />

                        <input type="text"
                            placeholder='enter your shiiping address'
                            value={shippingAdress}
                            className='inputshippingaddress'

                            onChange={(e) => {
                                setShippingAddress(e.target.value)
                            }}
                        /><br />

                        <div className='mt-4'>
                            < input type="radio"
                                value={deliverycharges}
                                name='deliverycharges'
                                className='deliverycharges'
                                onClick={() => {
                                    setDeliveryCharges(40)
                                }} /> <label className='ms-1'>Normal delivery charges</label>

                            < input type="radio"
                                value={deliverycharges}
                                name='deliverycharges'
                                className='deliverycharges ms-5'

                                onClick={() => {
                                    setDeliveryCharges(100)
                                }}

                            /><label className='ms-2'>SuperFast delivery charges</label> 
                        </div>

                         

                    </div>
                    <button type="button"
                        onClick={orderPlace}
                        className='button order-now-btn mt-4'>Order Now</button>
                </div>


            </div>

        </div>
        </div>
    )
}

export default CreateProductBuy