import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './OurFoodtItems.css'

const OurFoodItems = () => {
    return (
        <div>
            <h2 className='text-center pt-5 items-title'> <span>O</span>ur <span>F</span>ood  <span>I</span>tems</h2>
            <div className="container">
                <div className='text-center items'>
                    <Link className='itemsLinks'   to='/chicken'>Chicken</Link>
                    <Link className='itemsLinks' to='/burek'>Burek</Link>
                    <Link className='itemsLinks' to='/fresh'>Fresh</Link>
                    <Link className='itemsLinks' to='/rice'>Rice</Link>
                    <Link className='itemsLinks' to='/vegetable'>Vegetable</Link>

                   
                   
                </div>
                <div>
                <Outlet />
                </div>
            </div>
        </div>
    );
};

export default OurFoodItems;