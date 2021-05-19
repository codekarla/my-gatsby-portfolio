import React from 'react';
import {Link} from 'gatsby';

function Navbar() {
    return (
        <nav>
            <h2>KV</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
        </nav>
    )
}

export default Navbar;
