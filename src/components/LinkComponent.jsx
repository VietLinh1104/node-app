import React, { Component } from 'react';

function Link(Props) {


    return (
        <button type="button" className="link-button">
            {Props.text}
        </button>
    );

}
 
export default Link;