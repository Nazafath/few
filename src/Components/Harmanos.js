import React from 'react';
import Polos from '../Components/Polos'

const Harmanos = () => {
    return (
        <div className='bg-light  p-5 m-2'> 
        <Polos/>
            <div className='container mt-5 harmanos' >
                <div className='row mx-auto'>
                    <div className='col-md-4'>
                       <div className='m-2 border-color bg-white'>
                            <h3 className='polos-text'>
                                Simple
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque
                            </p>
                       </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='m-2 border-color bg-white'>
                            <h3 className='polos-text'>
                                Useless
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque
                            </p>
                        </div>
                    </div>
                    <div className='col-md-4 bg-white'>
                        <div className='m-2 border-color'>
                            <h3 className='polos-text'>
                               Time waste
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Harmanos;