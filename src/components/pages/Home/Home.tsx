import React, { LabelHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Button/Button';
import './Home.scss';

export const Home: React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className='home'>
            <i className="fa-solid fa-key fa-6x" style={{ color: 'lightgrey', textShadow: '0px 1px 3px black' }}></i>
            <div className='home__text'>
                <h1>Secrets</h1>
                <p>Don't keep your secrets, share them anonymously!</p>
            </div>
            <hr className='home__hr-line' />
            <div className='home__button-container'>
                <Button label='Register' color='lightgrey' onClick={() => navigate('/signup')} />
                <Button label='Login' onClick={() => navigate('/signin')} />
            </div>
        </div>
    )
}