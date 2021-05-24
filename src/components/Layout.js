import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import '../css/global.css';
import * as style from '../css/layout.module.css';

function Layout({children}) {
    const data = useStaticQuery(graphql`
        query LayoutQuery {
            site {
                siteMetadata {
                    title
                    copyright
                }
            }
        }
    `);
    // console.log("From Layout:", data);
    const {copyright} = data.site.siteMetadata;

    return (
        <div>
            <nav className={style.navbar}>
                
                <Link to="/" className={style.logo}>
                    <h2>KV</h2>
                </Link>
                <div className={style.links}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                </div>
            </nav>

            {children}

            <footer className={style.footer}>
                <span> {copyright} </span>
                <span> All rights reserved. </span>
            </footer>
        </div>
    )
}

export default Layout;

