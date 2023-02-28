import React from 'react';
import $ from 'jquery';
import './SignIn.scss';

class SignIn extends React.Component {

    constructor({ parent, history }) {
        super();

        this.parent = parent;
        this.history = history;
        this.state = {
            email: '',
            password: ''
        }
    }

    _handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    _handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            let res = await $.ajax({
                url: "http://localhost/Game%20Of%20Life/login.php",
                method: 'post',
                data: {
                    email: email,
                    password: password
                }
            });
            res = JSON.parse(res);
            if (res.status === 'success') {
                localStorage.setItem('user', JSON.stringify(res.user));
                this.history.push('/game%20field');
            }
        } catch (err) {
            console.error(`Error detected login : ${err}`);
        }

        // try {
        //     fetch('http://localhost/Game%20Of%20Life/login.php', options)
        //         .then((res) => {
        //             if (!res.ok) {
        //                 throw new Error('not found');
        //             }
        //             return res.json();
        //         })
        //         .then((res) => {
        //             console.log(res);
        //             if (res.account) { // if the account exist go to the game field
        //                 // this.history.push('/game%20field');
        //             }

        //         });
        //     this.setState({
        //         email: '',
        //         password: ''
        //     })
        // } catch (err) {
        //     console.log(err.message);
        // }
    }

    render() {
        return (
            <div className={`sign-in__container  ${!this.parent.state.isSignIn ? "hidden" : ""}`} >

                <form className="card" onSubmit={this._handleSubmit}>
                    <h1 className="sign-in">Sign In</h1>
                    <div className="inputBox">
                        <input type="text" name="email" value={this.state.email} required onChange={this._handleChange} />
                        <span className="user">Email</span>
                    </div>

                    <div className="inputBox">
                        <input type="password" name="password" value={this.state.password} required onChange={this._handleChange} />
                        <span>Password</span>
                    </div>

                    <button className="enter">Enter</button>

                </form>
                <button className='sign-in-with-google' > Sign in with Google</button>
            </div >
        )

    }
}

export default SignIn;