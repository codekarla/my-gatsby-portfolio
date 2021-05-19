import React from 'react';
import Navbar from './Navbar';
import '../css/global.css';
import '../css/layout.css';

function Layout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
            <footer>
                Copyright 2021 KV
            </footer>
        </div>
    )
}

export default Layout;
