import React, { Component } from 'react';
import { ReactComponent as GoogleLogo } from './svg/google-icon.svg';


class GoogleLogin extends Component {

    render() { 
        return (
            <button className="login-box">
                <span className="span">
                    <GoogleLogo/>
                </span>
                <span className="span line-cen">
                    <p >Sign in with Google</p>
                </span>
                
            </button>
        );
    }
}
 
export default GoogleLogin;