import React from 'react'
import '../component/Fish.css'
import Carousel from 'react-bootstrap/Carousel';
import feature from '../assets/feature 3.png';
import milk from '../assets/milk.png';
import animal from '../assets/animal.png';
import fresh from '../assets/fresh.png';
import meat from '../assets/meat.png';
import frozone from '../assets/frozone.png';
import candy from'../assets/candy.png';
import veg from '../assets/veg.png';
import snacks from '../assets/snacks.png';



const Fish = () => {
  return (
    <div>
      <div className='th'>
      <div className='third'>

        <div><img className='milk' src={feature}></img><b>Desserts</b></div>
        <div><img className='milk' src={milk}></img><b>Milk</b></div>
        <div><img className='milk' src={fresh}></img><b>Fresh fruit</b> </div>
       <div><img className='milk' src={meat}></img><b>meat</b></div>
       <div><img className='milk' src={animal}></img><b>animal food</b></div>
        <div><img className='milk' src={veg}></img><b>vegtables</b></div>
        <div><img className='milk' src={snacks}></img><b>snacks</b></div>
        <div><img className='milk' src={candy}></img><b>Candy</b></div>
      </div>



</div>

    </div >
  )
}

export default Fish
