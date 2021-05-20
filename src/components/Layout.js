import React from 'react';
import {Link} from 'gatsby';
import '../css/global.css';
import * as style from '../css/layout.module.css';

function Layout({children}) {
    return (
        <div>
            <nav className={style.navbar}>
                
                <Link to="/" className={style.brand}>
                    <h2>KV</h2>
                </Link>
                <div className={style.links}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                </div>
            </nav>

            {children}

            <footer>
                Copyright 2021 KV
            </footer>
        </div>
    )
}

export default Layout;
