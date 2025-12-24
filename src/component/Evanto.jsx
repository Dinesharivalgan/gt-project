import React from 'react'
import '../component/Evanto.css'
import logo from '../assets/logo.jpg'
import market from '../assets/market.png'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { GrAccessibility } from "react-icons/gr";


const Evanto = () => {
  return (

    <div>
      <div>
        <h3 className='envato'><img className='green' src={logo}></img><a className='envato' href='https://themeforest.net/item/marketpro-ecommerce-multivendor-symfony-template-multipurpose/61008556?_gl=1*127h4o*_gcl_au*MTc1MTQ5NzE0NS4xNzY2MDQxMjcy*_ga*MTc5NzM2MDE5OS4xNzY2MDQxMjcz*_ga_ZKBVC1X78F*czE3NjYxMzQ2NjAkbzYkZzEkdDE3NjYxMzU4NTMkajQ0JGwwJGgw'>envato</a>
          <span className='env'><GrAccessibility /> market</span>
          <button className='button'> <a className='button' href='https://themeforest.net/checkout/112922544/create_account'> Buy now</a></button></h3>

        <div className='blue'>
          <p>Until the end of the sale: 695Days  14Hours  18 Minutes  4 Sec.
            <span className='buy'>Buy one get one free on </span>
            <span className='yellow'>first order</span>|
            <img className='track' src='https://cdn-icons-png.flaticon.com/512/1476/1476838.png'>
            </img> <span className='order'>Track Your Order</span><span className='about'>Order Tracking </span>
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
      <div><p><img className='market' src={market}></img>


        <DropdownButton className="drop"
          id="dropdown-button-dark-example2"
          variant="search for products,categories or brands..."
          title="All categories"
          data-bs-theme="light"
        >
          <Dropdown.Item href="#/action-1" active> Grocery</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Breakfast&Dairy</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Vegtables</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Pet food&Toy</Dropdown.Item>
        </DropdownButton><input className='search' placeholder='search for products,categories or brands...'></input>
        <i class="bi bi-person-circle"></i>

      </p></div>









    </div>












  )
}

export default Evanto

