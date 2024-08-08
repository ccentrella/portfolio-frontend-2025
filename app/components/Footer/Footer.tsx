import React from 'react';
import { NavLink } from '@remix-run/react';
import styles from './Footer.module.scss';

function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <nav className={styles.linksContainer}>
                    <p>
                        <NavLink to='/'>Experience</NavLink>
                    </p>
                    <p>
                        <NavLink to='/interests'>Interests</NavLink>
                    </p>
                    <p>
                        <NavLink to='/blog'>Blog</NavLink>
                    </p>
                    <p>
                        <NavLink to='/contact'>Connect</NavLink>
                    </p>
                </nav>
                <div className={styles.copyrightContainer}>
                    <div className={styles.copyrightText}>
                        <p>
                            Built with love in Nashville, TN by Chris Centrella.
                            <br />
                            Copyright 2024, all rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
