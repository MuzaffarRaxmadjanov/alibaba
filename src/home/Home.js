import React from 'react'
import './homeStyle.css'
import Banner from "../components/banner/Bannerslider"
import Product from '../components/Products/Product'
import CartDiv from '../components/cartDiv/CartDiv'
import ProProduct from '../components/pro-products/ProProduct'
import Footer from '../components/footer/Footer'
import Bannerslider from '../components/banner/Bannerslider'

const Home = () => {
  return (
    <div>
        <Bannerslider />
      <Product />
      <CartDiv/>
      <ProProduct/>
      <Footer/>

    </div>
  )
}

export default Home