import React from 'react';

function ButtonComponent(Props) {
        return (
            <button type="button" className="button">
                {Props.text}
            </button>
        );
    }
export default ButtonComponent;