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
        <>
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
            <div className="navigation">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="/" className="navigation__link"> Home GOL </a></li>
                        <li className="navigation__item"><a href="/gameField" className="navigation__link">game field</a></li>
                        <li className="navigation__item"><a href="/login" className="navigation__link">sign in</a></li>
                        <li className="navigation__item"><a href="/login" className="navigation__link">sign up</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default withRouter(NavigationBar);