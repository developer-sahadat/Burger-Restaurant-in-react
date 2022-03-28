
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('utilities/burger-data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    }, [])

    const [searchValue, setSearch]=useState([])

    const searchHandler=()=>{

        if(searchValue.length===0){
            alert('Please write something')
            return;
        }else{
            let url=(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
            fetch(url)
            .then(res=>res.json())
            .then(data=>data.meals?setProducts(data.meals.slice(0, 4)):alert('Sorry, no product with this name was found'))
        }
      
    };
   
   
    return (
        <div className='m-5'>

            <div className="container">
                <h2 className='search-title'> <span>E</span>nter the <span>F</span>ood name to get your <span>F</span>avorite food</h2>
                
  <InputGroup className="mb-3  mx-auto" style={{width:'60%'}}>
    <FormControl
    className='py-2 search'
    onChange={(event)=>setSearch(event.target.value)}
      placeholder="Enter the food name"
      aria-label="Enter the food name"
      aria-describedby="basic-addon2"
    />
    <button onClick={searchHandler} className='search-btn'  id="button-addon2">
    Search
    </button>
  </InputGroup>
            </div>

           <div className="container">
                    <h1 className='text-center pt-5 pb-3 product-title'><span>N</span>EW <span>M</span>ORE <span>F</span>LAVORS</h1>
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