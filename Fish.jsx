import React from 'react'
import '../component/Fish.css'
import Carousel from 'react-bootstrap/Carousel';
import feature from '../assets/feature 3.png';
import milk from '../assets/milk.png';
import animal from '../assets/animal.png';
import fresh from '../assets/fresh.png';
import meat from '../assets/meat.png';
import frozone from '../assets/frozone.png';




const Fish = () => {
  return (
    <div className='grocery'>
      <div className='third'>
        <Carousel>
          <Carousel.Item> <img className='milk' src={feature}></img></Carousel.Item>
          <Carousel.Item><img className='milk' src={milk}></img></Carousel.Item>
          <Carousel.Item> <img className='milk' src={fresh}></img></Carousel.Item>
          <Carousel.Item> <img className='milk' src={meat}></img> </Carousel.Item>
          <Carousel.Item><img className='milk' src={animal}></img></Carousel.Item> </Carousel>
      </div>  
      
      
      
      
      
      </div >
  )
}

export default Fish
