import React, { Component } from 'react';

function Link(Props) {
    return (
        // <p><a herf="#" className="\link-opacity-10-hover">{Props.text}</a></p>
        <p><a className="link" onClick={Props.onClick}>{Props.text}</a></p>

    );
}
 
export default Link;