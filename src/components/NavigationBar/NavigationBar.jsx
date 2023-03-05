import React from 'react'
import { ReactComponent as HomePageIcon } from '../../assets/icons/homepage.svg';
import { ReactComponent as GamePageIcon } from '../../assets/icons/gamepage.svg';
import { ReactComponent as SignInPageIcon } from '../../assets/icons/sign-in-page.svg';
import { ReactComponent as SignUpPageIcon } from '../../assets/icons/sign-up-page.svg';
import { ReactComponent as SettingPageIcon } from '../../assets/icons/setting-page.svg';
import './NavigationBar.scss';
import { Link, withRouter } from 'react-router-dom';

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
            <div class="navigation">
                <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

                <label for="navi-toggle" class="navigation__button">
                    <span class="navigation__icon">&nbsp;</span>
                </label>

                <div class="navigation__background">&nbsp;</div>

                <nav class="navigation__nav">
                    <ul class="navigation__list">
                        <li class="navigation__item"><a href="/" class="navigation__link"> Home GOL </a></li>
                        <li class="navigation__item"><a href="/gameField" class="navigation__link">game field</a></li>
                        <li class="navigation__item"><a href="/login" class="navigation__link">sign in</a></li>
                        <li class="navigation__item"><a href="/login" class="navigation__link">sign up</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default withRouter(NavigationBar);