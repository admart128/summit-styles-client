import React from 'react';
import {Link } from 'react-router-dom';
import backgroundImage from '../img/a.png';

const HomeSection1 = () => {
    return(
         <section className='Section1' style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundPosition: 'center',
            }}>
            <p>New Styles<br></br>for Fall 2023</p> 
            <Link to="/shop/new-featured">
                <button>View Collection</button>
            </Link>
        </section>
    )
}

export default HomeSection1;
