import React from 'react';

import './signInAndSignUp.scss';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignInAndSignUpPage = () => (
  <div className='signInAndSignUp'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
