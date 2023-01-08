import React from 'react';
import logos from "../Components/image/logos.png.webp"

const Logos = () => {
    return (
        <div>
            <div className='container d-flex justify-content-center p-5 '>
               <img src={logos} alt="" />  
            </div>
        </div>
    );
};

export default Logos;