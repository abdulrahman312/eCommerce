import React from 'react';
import './sign-in-sign-up.styles.scss';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/signup/SignUp';

function SignInSignUp() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUp;
