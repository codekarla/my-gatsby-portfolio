import React from 'react';
import Navbar from './Navbar';

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
