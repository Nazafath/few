import React from 'react';
import image2 from "../Components/image/2.png.webp"

const Pinkman = () => {
    return (
        <div className='container row'>
            <div className='m-5 polos-text pinkman-right pinkman-right me-5'>
                <h3>Discover Our App</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.is eius laudantium.</p>
            </div>
            <div className='pinkman-left ms-5'>
                 <img src={image2} alt="" />
            </div>
            
        </div>
    );
};

export default Pinkman;