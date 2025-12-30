import React from 'react'
import '../component/Evanto.css'
import logo from '../assets/logo.jpg'
import market from '../assets/market.png'
import profile from '../assets/profile.jpg'
import Badge from 'react-bootstrap/Badge';

const Evanto = () => {
  return (

    <div>
      <div className='st'>
        <div>

          <div className='envato'>
            <a className='envato' href='https://themeforest.net/item/marketpro-ecommerce-multivendor-symfony-template-multipurpose/61008556?_gl=1*127h4o*_gcl_au*MTc1MTQ5NzE0NS4xNzY2MDQxMjcy*_ga*MTc5NzM2MDE5OS4xNzY2MDQxMjcz*_ga_ZKBVC1X78F*czE3NjYxMzQ2NjAkbzYkZzEkdDE3NjYxMzU4NTMkajQ0JGwwJGgw'>
              <img className='green' src={logo}></img></a>
            <span className='env'><b>envato</b> market</span>
            <button className='button'>Buy now</button>

          </div>
          <div className='blue'>
            <p>Until the end of the sale: 695Days  14Hours  18 Minutes  4 Sec.
              <span className='buy'>Buy one get one free on </span>
              <span className='yellow'>first order</span>|
              <img className='track' src='https://cdn-icons-png.flaticon.com/512/1476/1476838.png'>
              </img> <span className='order'>Track Your Order</span>
              <span className='about'>Order Tracking </span>
              <span className='us'> About Us</span>
              <span><select className='eng'>
                <option value="1">English</option>
                <option value="2">japan</option>
                <option value="3">French</option>
                <option value="4">Germany</option>
              </select></span>
              <select className='usd'><span >
                <option value="1">Usd</option>
                <option value="2">Yen</option>
                <option value="3">EURO</option>
                <option value="4">BDT</option>
              </span></select>
            </p></div></div>
        <div className='nav'>
          <p>
            <span className='market'><img src={market}></img></span><span>
              <select className='categories'>
                <option value="1">All categories</option>
                <option value="1">Grocery</option>
                <option value="2">Break fast&Dairy</option>
                <option value="3">French</option>
                <option value="4">Germany</option>
              </select></span>
            <input className='bar' placeholder='search for products,categories and brands'></input>
            <img className="profile" src={profile} ></img><span className='pro'>profile</span>
            <img className='heart' src='data:image/png;base64,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'></img>
            <span className='wish'>wishlist</span>
            <img className='cart' src='data:image/png;base64,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'></img>
            <span className='ca'>cart</span></p>
        </div><hr></hr>



        <div className='four'>
          <select className='topic'><span >
            <option value="1">Browse categories</option>
            <option value="2">vegtable</option>
            <option value="3">milk&cake</option>
            <option value="4">Grocery</option>
          </span></select>
          <select className='home'><span >
            <option value="1">Home</option>
            <option value="2">Home Grocery</option>
            <option value="3">Home Electroic</option>
            <option value="4">Home Fashion</option>
          </span></select>
          <select className='shops'><span >
            <option value="1">Shop</option>
            <option value="2">Shop details</option>
            <option value="3">Shop details</option>
          </span></select>
          <select className='Page'><span >
            <option value="1">Cart</option>
            <option value="2">Wishlist</option>
            <option value="3">Checkout</option>
          </span></select>
          <select className='Vendors'><span >
            <option value="1">Vendors</option>
            <option value="2">Vendors details</option>
            <option value="3">Vendors details two</option>
          </span></select>
          <select className='Blog'><span >
            <option value="1">Blog</option>
            <option value="2">Blog details</option>
          </span></select>
          <span className='contact'>contact Us</span>
          <span className='help'>Need any help!Call us </span><p className='num'>(+2)07081998 </p>
        </div>
      </div>

    </div>













  )
}

export default Evanto

