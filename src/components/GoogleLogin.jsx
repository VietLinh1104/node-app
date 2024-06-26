import React, { Component } from 'react';
import { ReactComponent as GoogleLogo } from './svg/google-icon.svg';


const GoogleLogin = ({ onClick }) => {

    return (
        <button onClick={onClick} className="login-box">
            <span className="span">
                <GoogleLogo/>
            </span>
            <span className="span line-cen">
                <p >Sign in with Google</p>
            </span>
                
        </button>
    );
}

export default GoogleLogin;