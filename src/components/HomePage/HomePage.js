import React from 'react';
import Contact from '../Contact/Contact';
import Shop from '../Main/Shop/Shop';
import OurFoodItems from '../OurFoodItems/OurFoodItems';
import OurSpecialRecipe from '../OurSpecialRecipe/OurSpecialRecipe';
import SliderBG from '../SliderBG/SliderBG';

const HomePage = () => {
    return (
        <div>
        <SliderBG></SliderBG>
      <Shop></Shop>
      <OurFoodItems></OurFoodItems>
      <OurSpecialRecipe></OurSpecialRecipe>
      <Contact></Contact> 
        </div>
    );
};

export default HomePage;