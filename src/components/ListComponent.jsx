import React, { Component } from 'react';
import { ReactComponent as MySVG } from './svg/inactive.svg';
import Link from './Link';

interface Props {
    items: string[];
    heading: string;
}

function ListComponent({ items, heading }: Props) {
    return (
        <>
            {/* {props.items.length === 0 && <p>No items found<p/>} */}
            <ul className="nav flex-column">
                {items.map((item, index) => (
                    <li className="nav-item" key={index}>
                        <MySVG/>
                        <a herf='#' className = 'link'>{item}</a>
                    </li>
                ))}
            </ul>
        </>
    );
}
 
export default ListComponent;