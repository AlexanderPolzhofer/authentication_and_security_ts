import React from 'react';
import { Button } from '../Button/Button';
import './InputForm.scss';

interface InputFormProps {
    buttonLabel: string;
}

export const InputForm: React.FC<InputFormProps> = ({ buttonLabel }) => {

    return (
        <div className='input-form'>
            <form className='input-form__user-input-container'>
                <label htmlFor='email-input' className='input-form__label'>Email:</label>
                <input type='email' id='email-input' className='input-form__input'></input>
                <label htmlFor='password-input' className='input-form__label'>Password:</label>
                <input type='password' id='password-input' className='input-form__input'></input>
                <Button label={buttonLabel ? buttonLabel : 'Test'} color='lightgrey'/>
            </form>
        </div>
    )
}