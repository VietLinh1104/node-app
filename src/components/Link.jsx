import React, { Component } from 'react';

function Link(Props) {
    return (
        <p>
            <a href="#" className="link ">{Props.text}</a>
        </p>
    );

}
 
export default Link;