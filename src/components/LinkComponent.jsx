import React, { Component } from 'react';

function LinkComponent(Props) {


    return (
        <button onClick={Props.onClick} type="button" className="link-button">
            {Props.text}
        </button>
    );

}
 
export default LinkComponent;