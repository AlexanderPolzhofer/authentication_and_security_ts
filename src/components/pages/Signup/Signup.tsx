import React from 'react';
import { InputForm } from '../../Form/InputForm';
import './Signup.scss';

export const Signup: React.FC = () => {
    return (
        <div className='signup'>
            <h1 className='signup__text'>Signup</h1>
            <hr className='signup__hr-line'/>
            <div className='signup__input-form'>
                <InputForm buttonLabel='Register' />
            </div>
        </div>
    )
}