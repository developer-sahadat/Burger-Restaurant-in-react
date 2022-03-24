import React from 'react';
import './Products.css'

const Products = ({product}) => {
    const {title, price, pic, }=product
    return (
       <div>
            <div className='product'>
            <img src={pic} className='img-fluid' alt="" />
            <h4>{title}title</h4>
            <h6>${price}.00</h6>
            <button>Order Now</button>
        </div>
       </div>
    );
};

export default Products;