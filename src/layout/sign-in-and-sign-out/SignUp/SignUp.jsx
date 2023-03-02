import React from 'react';
import $ from 'jquery';

class SignUp extends React.Component {
    constructor({ parent, history }) {
        super();

        this.parent = parent;
        this.history = history;
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    _handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    _handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password are not the same");
            return;
        }

        try {
            let res = await $.ajax({
                url: "http://localhost/Game%20Of%20Life/logup.php",
                method: 'post',
                data: {
                    username: displayName,
                    email: email,
                    password: password,
                }
            });
            try {
                res = JSON.parse(res);
                if (res.status === 'success') {
                    localStorage.setItem('user', JSON.stringify(res.user));
                    this.history.push('/gameField');
                }
            } catch (_) {
                console.log("cannot sign up", _);
            }
        } catch (err) {
            console.error(`Error detected logup : ${err}`);
        }

        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    render() {
        return (
            <div className={`sign-up__container  ${this.parent.state.isSignIn ? "hidden" : ""}`}>
                <form className="card" onSubmit={this._handleSubmit}>
                    <h1 className="sign-up">Sign Up</h1>
                    <div className="inputBox">
                        <input type="text" name="displayName" value={this.state.displayName} onChange={this._handleChange} required />
                        <span className="user">Username</span>
                    </div>

                    <div className="inputBox">
                        <input type="email" name="email" value={this.state.email} onChange={this._handleChange} required />
                        <span className="user">Email</span>
                    </div>

                    <div className="inputBox">
                        <input type="password" name="password" value={this.state.password} onChange={this._handleChange} required />
                        <span>Password</span>
                    </div>

                    <div className="inputBox">
                        <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this._handleChange} required />
                        <span>Confirm password</span>
                    </div>
                    <button className="enter">Enter</button>

                </form>
            </div>
        )
    }
}


export default SignUp;