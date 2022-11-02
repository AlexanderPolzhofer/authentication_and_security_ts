import React from 'react';
import { Button } from '../../Button/Button';
import './Home.scss';

export const Home: React.FC = () => {
    return (
        <div className='home'>
            <i className="fa-solid fa-key fa-6x" style={{ color: 'lightgrey', textShadow: '0px 1px 3px black' }}></i>
            <div className='home__text'>
                <h1>Secrets</h1>
                <p>Don't keep your secrets, share them anonymously!</p>
            </div>
            <hr className='home__hr-line' />
            <div className='home__button-container'>
                <Button label='Register' color='lightgrey' />
                <Button label='Login' />
            </div>
        </div>
    )
}