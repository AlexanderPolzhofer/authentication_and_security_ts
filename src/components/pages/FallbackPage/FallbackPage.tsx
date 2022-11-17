import React from 'react';
import './FallbackPage.scss';

export const FallbackPage = () => {
    return (
        <div className='fallback-page'>
            <img src='./../../../../public/images/Fallback.png'/>
            <h1>Wooops.. something went wrong!</h1>
        </div>
    )
}