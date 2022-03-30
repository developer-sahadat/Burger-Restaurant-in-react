import React, { useEffect, useState } from 'react';
import'./order.css'
import { useParams } from 'react-router-dom';


const OrderPage = () => {

    const params= useParams()
    const [orderProduct, setOrderProduct]=useState()
    console.log(orderProduct);
    useEffect(()=>{
        fetch('/utilities/burger-data.json')
        .then(res=>res.json())
        .then(data=>{
        const burgerProduct=data.find(product=>product.idMeal===+params.id)
          setOrderProduct(burgerProduct)
        
        })

    }, [params])

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
        .then(res=>res.json())
        .then(data=>setOrderProduct(data.meals[0]))
    }, [params])


    return (
        <div className='m-5'>
            <div className="container order-page row row-cols-lg-2 mx-auto justify-content-center align-items-center p-5">
              <div>
                  <div>
                    <img src={orderProduct?.strMealThumb} className='img-fluid rounded' alt="" />
                  </div>
              </div>
              <div>
                  <div>
                    <h2 className='m-0 pt-3'>{orderProduct?.strMeal}</h2>
                     <h6 className='fw-bold'>Price: {orderProduct?.idMeal}</h6> 
                    <h6 className='fw-bold'>Ratting: {orderProduct?.ratting ? orderProduct.ratting: 4}</h6>
                    <p className='fs-6'>{orderProduct?.strInstructions}</p>
                    <button>Add To cart</button>
                  </div>
              </div>
            </div> 
        </div>
    );
};

export default OrderPage;