import React from 'react'
import { ReactComponent as HomePageIcon } from '../../assets/icons/homepage.svg';
import { ReactComponent as GamePageIcon } from '../../assets/icons/gamepage.svg';
import { ReactComponent as SignInPageIcon } from '../../assets/icons/sign-in-page.svg';
import { ReactComponent as SignUpPageIcon } from '../../assets/icons/sign-up-page.svg';
import { ReactComponent as SettingPageIcon } from '../../assets/icons/setting-page.svg';
import './NavigationBar.scss';
import { withRouter } from 'react-router-dom';

const NavigationBar = ({ history, user }) => {
    return (
        <div className="navigation-bar">
            <HomePageIcon className='icon' onClick={() => history.push('/')} />
            <GamePageIcon className='icon' onClick={() => history.push('/gameField')} />
            {
                !user ?
                    <>
                        <SignInPageIcon className='icon' onClick={() => history.push('/login')} />
                        <SignUpPageIcon className='icon' onClick={() => history.push('/login')} />
                    </>
                    :
                    <>
                        <SettingPageIcon className='icon' onClick={() => history.push('/setting')} />
                        <SignInPageIcon className='icon' onClick={() => {
                            localStorage.setItem('user', "");
                            history.push('/');
                        }} />
                    </>
            }
        </div>
    )
}
export default withRouter(NavigationBar);