import React from 'react';
import phone from '../Components/image/1.png.webp'

const Navbar = () => {
    return (
        <div id='N'>
            <div className='container'>
                <nav className="navbar navbar-expand-lg mx-5 mt-3" id='Navbar'>
                    <a className="navbar-brand text-white" href="#">MOB<b>APP</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-4 ">
                            <li className="nav-item active">
                                <a className="nav-link text-white" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Gallary</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Pricing</a>

                            </li>
                            <li>
                                <a className='btn nav-link border text-white' id='DB'>Download</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='faltu'>
                    <h1 className='text-white text-center mt-5'>
                        Mobile App Landing Page Template
                    </h1>
                    <h4 className='text-white-50 text-center mt-2'>
                        The one and only solution for any kind of mobila app landing needs. Just change the screenshots and texts and you are good to go.
                    </h4>
                </div>
                <div className='d-flex justify-content-center'>
                    <img src={phone} alt="" height={"918px"} width={"500px"} />
                </div>
            </div>
        </div>

    );
};

export default Navbar;