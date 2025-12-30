import React from 'react'
import '../component/Front.css'
import banner from '../assets/banner-img1.png'
import ban from '../assets/ban.png'
import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';

const font = () => {
  return (
    <div>
      <div className='sec'>




        <div className='daily'>
          <p><span className='save'>save Up To 50% Off On Your First Order</span><br></br>
          <span className='he'><b>Daily Grocery Order and Get</b></span>
          <br></br><span className='exp'><b>Express</b></span><span className='delivery'><b>Delivery</b></span><br></br><br></br>
          <button className='explore'><a className='ex' href='https://preview.themeforest.net/item/marketpro-ecommerce-multivendor-symfony-template-multipurpose/full_screen_preview/61008556'>Explore shop🛒</a></button>
          <i className='italic'>starting at</i>
          <span className='dollar'><b>$60.99</b></span>
        <Carousel className='slide'>
            <Carousel.Item>
              <img className='ban' src={banner}></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className='ban' src={ban}></img>

            </Carousel.Item>

          </Carousel></p>
        </div>
        <Spinner className='spin' animation="grow" />



      </div>
    </div>
  )
}

export default font
