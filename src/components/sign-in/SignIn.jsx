import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: '',
            })
        } catch (error) {
            alert(error.message);
        }

    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required />

                    <div className="buttons">
                        <Button type="submit">
                            Sign In
                        </Button>
                        <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;