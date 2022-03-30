
import React, { useEffect, useState } from 'react';
import FoodProduct from '../foodItemsProducts/FoodProduct';

const Fresh = () => {
    const [fish, setFresh]=useState([])
    console.log(fish);
        useEffect(()=>{
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Fresh')
            .then(res=>res.json())
            .then(data=>setFresh(data.meals))
        },[])
    return (
        <div>
        <div className='row row-cols-lg-3 g-4 row-cols-md-2'>
     {
         fish.map(element=><FoodProduct foodProduct={element} key={element.idMeal}></FoodProduct>)
     }
  </div>
  </div>
    );
};

export default Fresh;