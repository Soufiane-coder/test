import React from 'react';

class SignUp extends React.Component {
    constructor({ parent }) {
        super();
        this.parent = parent;

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
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
                <form className="card" onSubmit={this.handleSubmit}>
                    <h1 className="sign-up">Sign Up</h1>
                    <div className="inputBox">
                        <input type="text" name="displayName" value={this.state.displayName} onChange={this.handleChange} required />
                        <span className="user">Username</span>
                    </div>

                    <div className="inputBox">
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        <span className="user">Email</span>
                    </div>

                    <div className="inputBox">
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                        <span>Password</span>
                    </div>

                    <div className="inputBox">
                        <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required />
                        <span>Confirm password</span>
                    </div>
                    <button className="enter">Enter</button>

                </form>
            </div>
        )
    }
}


export default SignUp;