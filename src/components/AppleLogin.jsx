import React, { Component } from 'react';
import appleLogo from './svg/apple_icon.png';


const AppleLogin = ({ onClick }) => {

    return (
        <button onClick={onClick} className="applelogin-box">
            <span className="span">
                
                <img src={appleLogo} className="apple-icon" />
            </span>
            <span className="span line-cen">
                <p >Sign in with Google</p>
            </span>
                
        </button>
    );
}

export default AppleLogin;