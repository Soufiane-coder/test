import React from 'react';
import './NavigationBarIntern.scss';
import { ReactComponent as HomePage } from '../../assets/icons/homepage.svg';
import { ReactComponent as SettingPageIcon } from '../../assets/icons/setting-page.svg';
import { ReactComponent as SignInPageIcon } from '../../assets/icons/sign-in-page.svg';
import { withRouter } from 'react-router-dom';

class NavigationBarIntern extends React.Component {
    constructor({ history }) {
        super();
        this.history = history;
    }
    render() {
        return (
            <div className="navigation-bar-intern">
                <div className="icons">
                    <HomePage onClick={() => this.history.push("/")} />
                    <SettingPageIcon onClick={() => this.history.push('/setting')} />
                    <SignInPageIcon className='icon' onClick={() => {
                        localStorage.setItem('user', "");
                        this.history.push('/');
                    }} />
                </div>
            </div>
        )
    }
}

export default withRouter(NavigationBarIntern);