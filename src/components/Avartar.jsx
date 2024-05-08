import React, { Component } from 'react';

function Avatar(Props) {
    return ( 
        <img className="avatar-img" src={Props.src} />
    );
}

export default Avatar;