import React from 'react';
import Contact from '../Contact/Contact';
import Shop from '../Main/Shop/Shop';
import OurSpecialRecipe from '../OurSpecialRecipe/OurSpecialRecipe';
import SliderBG from '../SliderBG/SliderBG';

const HomePage = () => {
    return (
        <div>
        <SliderBG></SliderBG>
      <Shop></Shop>
      <OurSpecialRecipe></OurSpecialRecipe>
      <Contact></Contact> 
        </div>
    );
};

export default HomePage;