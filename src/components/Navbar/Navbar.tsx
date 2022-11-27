import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
    return (

        <nav className='navbar'>
            <div>
                <Link to={'/'}>
                    <i className="fa-solid fa-key" style={{ color: 'lightgrey', textShadow: '0px 1px 3px black', fontSize: '21px' }}> SECRETS</i>
                </Link>
            </div>
            <div className='navbar__links-container'>
                <Link to={'/'} className='navbar__link'>
                    Home
                </Link>
                <Link to={'/signin'} className='navbar__link'>
                    SignIn
                </Link>
                <Link to={'/signup'} className='navbar__link'>
                    SignUp
                </Link>
            </div>

        </nav>
    )
}