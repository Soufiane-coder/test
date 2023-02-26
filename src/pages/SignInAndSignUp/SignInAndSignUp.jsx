import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SignIn from "../../layout/sign-in-and-sign-out/SignIn/SignIn";
import SignUp from "../../layout/sign-in-and-sign-out/SignUp/SignUp";
import { ReactComponent as UndrawMobileImage } from "../../assets/undraw/undraw_access_account_re_8spm.svg";
import ToggleSignInSignUp from "../../components/ToggleSignInSignUp/ToggleSignInSignUp";
import Flip from 'react-reveal/Flip';
import './SignInAndSignUp.scss';

class SignInAndSignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            isSignIn: true
        }
    }
    render() {
        return (
            <>
                <NavigationBar />
                <div className="log-in-log-out">
                    <div className="side-bar" />
                    <div className="side-bar-dark" />
                    <Flip bottom>
                        <UndrawMobileImage />
                    </Flip>
                    <section className="form-section">
                        <ToggleSignInSignUp parent={this} />

                        <SignIn parent={this} />

                        <SignUp parent={this} />
                    </section>
                </div>
            </>
        )
    }
}


export default SignInAndSignUp;