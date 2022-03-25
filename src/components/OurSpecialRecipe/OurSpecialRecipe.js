import React from 'react';
import s1 from '../../Images/s-1 (1).webp'
import s2 from '../../Images/s-1 (2).webp'
import s3 from '../../Images/s-1 (3).webp'
import r1 from '../../Images/(1).jpg'
import r2 from '../../Images/(2).jpg'
import r3 from '../../Images/(3).jpg'
import r4 from '../../Images/(4).jpg'
import r5 from '../../Images/(5).jpg'
import r6 from '../../Images/(6).jpg'
import'./OurSpecialRecipe.css'

const OurSpecialRecipe = () => {
    return (
        <div className='m-5'>
            <div className="container">
                <h1 className='title'> <span>O</span>UR <span>S</span>PECIAL <span>R</span>ECIPES</h1>
                <div className="recipe">
                    <div className="row row-cols-md-2 g-5">
                        <div>
                           
                           <img src={s1} className='img-fluid' alt="" />
                          
                        </div>
                        <div>
                           
                           <img src={s2} className='img-fluid'  alt="" />
                           
                        </div>
                    </div>
                    <div className='w-100 mt-4 text-center'>
                        <img src={s3} className='img-fluid' alt="" />
                    </div>
                    <div className="row mt-5 row-cols-md-6">
                        <div>
                            <img src={r1} className='img-fluid' alt="" />
                        </div>
                        <div>
                            <img src={r2} className='img-fluid' alt="" />
                        </div>
                        <div>
                            <img src={r3} className='img-fluid' alt="" />
                        </div>
                        <div>
                            <img src={r4} className='img-fluid' alt="" />
                        </div>
                        <div>
                            <img src={r5} className='img-fluid' alt="" />
                        </div>
                        <div>
                            <img src={r6} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className='text-center pt-3'>
                    <button className='submut-btn'>Submit your recipe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSpecialRecipe;