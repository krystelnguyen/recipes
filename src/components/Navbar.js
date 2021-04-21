import React from 'react';
import { Link } from 'react-router-dom'

export function Navbar(){
    return (
        <>
            <header>
                <ul>
                    <li><a href=""><Link to="/">home</Link></a></li>
                    <li><a href=""><Link to="/about">about</Link></a></li>
                </ul>
            </header>
        </>
    )
}