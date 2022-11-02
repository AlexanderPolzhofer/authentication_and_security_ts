import React from 'react';
import { InputForm } from '../../Form/InputForm';
import './Signin.scss';

export const Signin: React.FC = () => {
    return (
        <div className='signin'>
            <h1 className='signin__text'>Signin</h1>
            <hr />
            <div className='signin__input-form'>
                 <InputForm buttonLabel='Login' />
            </div>
        </div>
    )
}