import React from "react";

import { Navbar } from './components/Navbar';

export function About() {
    return (
        <>
        <Navbar/>
        <h1>About</h1>
        <div class="container">
          <p>This is a page.</p>
        </div>
        </>
    );
}