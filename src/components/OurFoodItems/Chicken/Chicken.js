import React, { useEffect, useState } from 'react';
import FoodProduct from '../foodItemsProducts/FoodProduct';

const Chicken = () => {
    const [chicken, setChicken]=useState([])
      useEffect(()=>{
          fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken')
          .then(res=>res.json())
          .then(data=>setChicken(data.meals))
      },[])
    return (
        <div>
              <div className='row row-cols-lg-3 g-4 row-cols-md-2'>
           {
               chicken.map(element=><FoodProduct foodProduct={element} key={element.idMeal}></FoodProduct>)
           }
        </div>
        </div>
    );
};

export default Chicken;