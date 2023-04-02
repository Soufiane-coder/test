import React from 'react';
import Titre from '../Titre/Titre';
import './Header.scss';


const Header = () => (
    <div className='header' >
        <div className="background-white" />
        <div className="triangle-white triangle-up-right" />
        <div className="triangle-white triangle-buttom-left" />
        <Titre />
    </div>
)

export default Header;