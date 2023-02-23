import React from 'react'
import {ReactComponent as HomePageIcon } from '../../assets/icons/homepage.svg';
import {ReactComponent as GamePageIcon } from '../../assets/icons/gamepage.svg';
import {ReactComponent as SignInPageIcon } from '../../assets/icons/sign-in-page.svg';
import {ReactComponent as SignUpPageIcon } from '../../assets/icons/sign-up-page.svg';
import './NavigationBar.scss';

const NavigationBar = () => (
    <div className="navigation-bar">
        <HomePageIcon className='icon'/>
        <GamePageIcon className='icon'/>
        <SignInPageIcon className='icon'/>
        <SignUpPageIcon className='icon'/>
    </div>
)
export default NavigationBar;