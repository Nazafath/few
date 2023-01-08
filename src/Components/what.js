import React from 'react';
import phone from '../Components/image/1.png.webp'
const What = () => {
    return (
        <div className='bg-light  d-flex align-items-center'>

            <div className='container d-flex align-items-center'>
                <div className='row '>
                    <div className="col-md-7 mt-5">

                        <div className="col4 d-flex align-items-center p-4 mb-3">
                            <div>
                                <button className='what-btn me-5'>1</button>
                            </div>
                            <div>
                                <h4 className='polos-text mt-3 '>Create an Account</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, debitis consectetur quis laboriosam distinctio delectus deserunt qui magn!</p>
                            </div>

                        </div>
                        <hr />
                        <div className="col4 d-flex align-items-center p-4 mb-3">
                            <div>
                                <button className='what-btn me-5'>1</button>
                            </div>
                            <div>
                                <h4 className='polos-text mt-3 '>Create an Account</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, debitis consectetur quis laboriosam distinctio delectus deserunt qui magn!</p>
                            </div>

                        </div>
                        <hr />
                        <div className="col4 d-flex align-items-center p-4 mb-3">
                            <div>
                                <button className='what-btn me-5'>1</button>
                            </div>
                            <div>
                                <h4 className='polos-text mt-3 '>Create an Account</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, debitis consectetur quis laboriosam distinctio delectus deserunt qui magn!</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={phone} height="700px" width="400px" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default What;