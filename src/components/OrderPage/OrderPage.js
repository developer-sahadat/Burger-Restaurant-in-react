import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetails from '../OrderDetails/OrderDetails';

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
        <div>
        </div>
    );
};

export default OrderPage;