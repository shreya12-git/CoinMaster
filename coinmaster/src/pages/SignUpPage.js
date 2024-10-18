import React from 'react';
import LoginNavbarComponent from '../components/LoginNavbar';
import Login from './Login';
import SignUp from './SignUp';
function SignUpPage(){
    return (
        <div>
            <LoginNavbarComponent></LoginNavbarComponent>
            <SignUp></SignUp>
        </div>
    );
}
export default SignUpPage;