import React from 'react'
import { ReactComponent as HomePageIcon } from '../../assets/icons/homepage.svg';
import { ReactComponent as GamePageIcon } from '../../assets/icons/gamepage.svg';
import { ReactComponent as SignInPageIcon } from '../../assets/icons/sign-in-page.svg';
import { ReactComponent as SignUpPageIcon } from '../../assets/icons/sign-up-page.svg';
import { ReactComponent as SettingPageIcon } from '../../assets/icons/setting-page.svg';
import './NavigationBar.scss';
import { withRouter } from 'react-router-dom';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from '../../redux/user/user.actions';
const NavigationBar = ({ history, user, setCurrentUser }) => {

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
                                setCurrentUser("")
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
                        <li className="navigation__item"><div onClick={() => history.push('/')} className="navigation__link"> Home GOL </div></li>
                        <li className="navigation__item"><div className="navigation__link" onClick={() => history.push('/gameField')} >game field</div></li>
                        {
                            !user ?
                                <>
                                    <li className="navigation__item"><div className="navigation__link" onClick={() => history.push('/login')} >sign in</div></li>
                                    <li className="navigation__item"><div className="navigation__link" onClick={() => history.push('/login')} >sign up</div></li></> :
                                <li className="navigation__item"><div className="navigation__link" onClick={() => {
                                    setCurrentUser("")
                                    history.push('/')
                                }} >sign out</div></li>
                        }

                    </ul>
                </nav>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));