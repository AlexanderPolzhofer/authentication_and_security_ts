import React from 'react';
import './Footer.scss';

interface FooterProps {
    label: string;
}

export const Footer: React.FC<FooterProps> = ({ label }) => {
    return (
        <footer className='footer'>{label}</footer>
    )
}