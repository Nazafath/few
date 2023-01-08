import React from 'react';
import phone from '../Components/image/dualphone.png.webp'

const Next = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-6">
                    <img src={phone} alt="" height={"788px"} width={"497px"} />
                </div>
                <div className="col-6 the-bargain-closer">
                    <h3>Launch your App</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, sint expedita quibusdam quasi </p>
                    <a href="#" className='btn btn-warning'>Read more</a>
                </div>

            </div>
        </div>
    );
};

export default Next;