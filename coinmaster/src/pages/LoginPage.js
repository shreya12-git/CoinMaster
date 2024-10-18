import React from 'react';
import LoginNavbarComponent from '../components/LoginNavbar';
import Login from './Login';
function Loginpage(){
    return (
        <div>
            <LoginNavbarComponent></LoginNavbarComponent>
            <Login></Login>
        </div>
    );
}
export default Loginpage;