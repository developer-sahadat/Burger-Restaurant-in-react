
import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import './SliderBG.css'
import banner1 from '../../Images/banner1.webp'
import banner2 from '../../Images/banner2.webp'
import banner3 from '../../Images/banner3.webp'

const SliderBG = () => {
    return (
        <div>
   
            
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Hasty and tasty!</h3>
      <p>Wake up your taste buds</p>
      <button className='slide-btn'>Oder Now</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>Hasty and tasty!</h3>
      <p>Wake up your taste buds</p>
      <button className='slide-btn'>Oder Now</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>Hasty and tasty!</h3>
      <p>Wake up your taste buds</p>
      <button className='slide-btn'>Oder Now</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


        </div>
    );
};

export default SliderBG;