import React from 'react';
import './Button.scss';

interface ButtonProps {
    label: string;
    color?: string;
}

export const Button: React.FC<ButtonProps> = ({ label, color }) => {
    return (
        <button className='button' style={{ backgroundColor: `${color}` }}>{label}</button>
    )
}