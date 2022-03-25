import React from 'react';
import './Products.css'

const Products = ({product}) => {
    const {strMeal, idMeal, strMealThumb, }=product
    return (
       <div>
            <div className='product'>
            <img src={strMealThumb} className='img-fluid' alt="" />
            <h4>{strMeal}title</h4>
            <h6>${idMeal}.00</h6>
            <button>Order Now</button>
        </div>
       </div>
    );
};

export default Products;