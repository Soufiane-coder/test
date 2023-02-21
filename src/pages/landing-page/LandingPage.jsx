import React from 'react';
import './LandingPage.scss'
import Header from '../../layout/landing-page/Header'
import NavigationBar from '../../components/NavigationBar';

const LandingPage = () => (
    <div className="container">
        <NavigationBar/>
        <Header/>
    </div>
)

export default LandingPage;