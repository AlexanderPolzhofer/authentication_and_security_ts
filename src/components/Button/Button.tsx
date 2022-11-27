import React from 'react';
import './Button.scss';

interface ButtonProps {
    label: string;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ label, color, onClick }) => {
    return (
        <button className='button' style={{ backgroundColor: `${color}` }} onClick={onClick}>{label}</button>
    )
}