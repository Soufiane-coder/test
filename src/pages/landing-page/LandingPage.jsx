import React from 'react';
import './LandingPage.scss'
import Header from '../../layout/landing-page/Header/Header'
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Quote from '../../layout/landing-page/Quote/Quote';
import ComplateRoutineDescription from '../../layout/landing-page/ComplateRoutineDescription/ComplateRoutineDescription';
import RoutineDescription2 from '../../layout/landing-page/RoutineDescription2/RoutineDescription2';
import Remember from '../../layout/landing-page/Remember/Remember';
import Footer from '../../layout/landing-page/Footer/Footer';

const LandingPage = () => {
    const user = localStorage.getItem('user');
    return (
        <div className="container">
            <NavigationBar user={user} />
            <Header />
            <Quote />
            <ComplateRoutineDescription />
            <RoutineDescription2 />
            <Remember />
            <Footer />
        </div>
    )
}

export default LandingPage;