import React, { useEffect, useState } from 'react';
import FoodProduct from '../foodItemsProducts/FoodProduct';

const Rice = () => {
    const [rice, setRice]=useState([])
    console.log(rice);
        useEffect(()=>{
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Rice')
            .then(res=>res.json())
            .then(data=>setRice(data.meals))
        },[])
    return (
        <div>
           <div>
              <div className='row row-cols-lg-3 g-4 row-cols-md-2'>
           {
               rice.map(element=><FoodProduct foodProduct={element} key={element.idMeal}></FoodProduct>)
           }
        </div>
        </div>
        </div>
    );
};

export default Rice;