import React, { useEffect, useState } from 'react';
import FoodProduct from '../foodItemsProducts/FoodProduct';

const Vegetable = () => {
    const [vegetable, setVegetable]=useState([])
  
        useEffect(()=>{
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Vegetable')
            .then(res=>res.json())
            .then(data=>setVegetable(data.meals))
        },[])
    return (
        <div>
              <div>
              <div className='row row-cols-lg-3 g-4 row-cols-md-2'>
           {
               vegetable.map(element=><FoodProduct foodProduct={element} key={element.idMeal}></FoodProduct>)
           }
        </div>
        </div>
        </div>
    );
};

export default Vegetable;