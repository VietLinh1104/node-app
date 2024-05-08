import React, { Component } from 'react';
import LinkComponent from './LinkComponent';
import Link from './Link';
import Avatar from './Avartar'
import LoginAuth from '../getData/LoginAuth';
import PathComponent from './PathComponent'


const handleLogoutClick = () => {
    // Chuyển hướng người dùng đến trang đăng nhập của Google
    window.location.href = '/api/logout';
}

const handleLoginDirect = () => {
    // Chuyển hướng người dùng đến trang đăng nhập của Google
    window.location.href = '/login';
}
const handleHomeDirect = () => {
    // Chuyển hướng người dùng đến trang đăng nhập của Google
    window.location.href = '/';
}

function LoggedIn(){
    return(
        <>
            <span><Link onClick={handleLogoutClick} text={"Logout"}/></span>
            <span><Link onClick={handleHomeDirect} text={"Home"}/></span>
            <span><Avatar src={"https://lh3.googleusercontent.com/a/ACg8ocLu_X0v9V2ZTqlkeMhvo1zfNwKNul-YFRBfgZa8dZmb_0eLQFs=s96-c"}/></span>
        </>
    )
}

function LoggedOut(){
    return(
        <>
            <span><LinkComponent onClick={handleLoginDirect} text={"Sign in"}/></span>
        </>
    )
}

function Header () {
    
    return ( 
        <nav className='App-header'> 
          <div className='nav-inline'>
            <span className='logo-ma'><h1 className='App-logo'>Notion</h1></span>
            <span className = 'btn-left'>{LoginAuth(LoggedIn(),LoggedOut())}</span>
            {/* <span className = 'btn-left'>{LoggedIn()}</span> */}
          </div>
        </nav>
    );
}

export default Header ;