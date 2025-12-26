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

        <div className='second'><p className='save'>save Up To 50% Off On Your First Order</p>


          <p className='he'>Daily Grocery Order and
            <br></br>Get <span className='exp'>Express</span>Delivery<br></br></p>
          <button className='explore'><a className='ex' href='https://preview.themeforest.net/item/marketpro-ecommerce-multivendor-symfony-template-multipurpose/full_screen_preview/61008556'>Explore shop🛒</a></button>
          <i>starting at</i>
          <span className='dollar'><b>$60.99</b></span>
          <Carousel className='slide'>
            <Carousel.Item>
              <img className='ban' src={banner}></img>
            </Carousel.Item>
            <Carousel.Item>
              <img className='ban' src={ban}></img>

            </Carousel.Item>

          </Carousel>
          <Spinner className='spin' animation="grow" />
        </div>


      </div>
    </div>
  )
}

export default font
