import React from 'react';
import './SignIn.scss';

class SignIn extends React.Component {

    constructor({ parent }) {
        super();
        this.parent = parent;
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // const { email, password } = this.state;
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div className={`sign-in__container  ${!this.parent.state.isSignIn ? "hidden" : ""}`} >

                <form className="card" onSubmit={this.handleSubmit}>
                    <h1 className="sign-in">Sign In</h1>
                    <div className="inputBox">
                        <input type="text" name="email" value={this.state.email} required onChange={this.handleChange} />
                        <span className="user">Email</span>
                    </div>

                    <div className="inputBox">
                        <input type="password" name="password" value={this.state.password} required onChange={this.handleChange} />
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