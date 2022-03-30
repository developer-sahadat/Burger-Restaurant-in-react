import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodProduct = ({foodProduct}) => {
    const {strMeal, idMeal, strMealThumb}=foodProduct
    let navigate = useNavigate();

    const orderBtnHandler=(id)=>{
        navigate(`/productItems/${id}`)
    }
    return (
        <div>
             <div  data-aos="fade-left">
            <div className='product'  >
            <img data-aos="zoom-in" src={strMealThumb} className='img-fluid' alt="" />
            <h4>{strMeal}title</h4>
            <p className='start'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </p>
            <h6>${idMeal}.00</h6>
            <button onClick={()=>orderBtnHandler(idMeal)}>Order Now</button>

        </div>
       </div>
        </div>
    );
};

export default FoodProduct;