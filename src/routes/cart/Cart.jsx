
import React from 'react';
import './Cart.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr'

const Cart = () => {
    const cartproducts = useSelector(state => state.oneProduct)
    console.log(cartproducts);
  return (
    <div style={{backgroundColor:"#f7f8fa"}} className='cart'>
        <div className="cart_navbar">
            <Link to="/">
            <img className='alibaba_logo' src="https://s.alicdn.com/@img/tfs/TB1pDDmmF67gK0jSZPfXXahhFXa-2814-380.png" alt="" />
            </Link>
            <h2>Shopping Card</h2>
        </div>
        <div className="shopping_cart">

            {
               cartproducts?.map((cartpro, index ) => (
                      <div key={index} className="cartprodct">
                      <img src={cartpro.pro.url} alt="" />
                      <h2>{cartpro.pro.title}</h2>
                      <h2>{cartpro.pro.price}</h2>
                      <GrFormClose/>
                    </div>
                    )
                    ) 
               }                      
            
                

           
        </div>
    

    </div>
  )
}

export default Cart