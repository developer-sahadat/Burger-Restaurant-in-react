
import React, { useEffect, useState } from 'react';
import Spinners from '../../Spinners/Spinners';
import FoodProduct from '../foodItemsProducts/FoodProduct';



const Burek = () => {
    const [spinner, setSpinner]=useState(true)

    const [burek, setBurek]=useState([])
    useEffect(()=>{
        setSpinner(true)
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Burek')
        .then(res=>res.json())
        .then(data=>setBurek(data.meals))
        setSpinner(false)
    },[])

    

    return (
        <div className='row row-cols-lg-3 g-4 row-cols-md-2'>
           {
            spinner?<Spinners></Spinners>:burek.map(element=><FoodProduct foodProduct={element} key={element.idMeal}></FoodProduct>)
           }
        </div>
    );
};

export default Burek;