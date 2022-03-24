import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('utilities/burger-data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])

    return (
        <div className='m-5'>
           <div className="container">
                    <h1 className='text-center py-5 product-title'>NEW MORE FLAVORS</h1>
                <div className='row row-cols-lg-4 g-4 row-cols-md-2'>
                     
                      {
                        products.map(product=> 
                        <Products product={product}
                        key={product.id}
                        
                        >

                        </Products>)
                    }
                     
                </div>

            </div> 
        </div>
    );
};

export default Shop;