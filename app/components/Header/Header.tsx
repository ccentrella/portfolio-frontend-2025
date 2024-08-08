import React from 'react';
import { NavLink } from '@remix-run/react';
import styles from './Header.module.scss';

function Header() {
    const iconList = [
        {
            id: 0,
            src: './icons/light_mode_icon.svg',
            alt: 'dark mode toggle',
            href: null,
        },
        {
            id: 1,
            src: './icons/adhd_icon.png',
            alt: 'adhd mode toggle',
            href: null,
        },
        {
            id: 2,
            src: './icons/github_icon.svg',
            alt: 'github link',
            href: 'https://github.com/ccentrella',
        },
    ];
    const icons = iconList.map((icon) => {
        const image = (
            <img
                key={icon.id}
                src={icon.src}
                alt={icon.alt}
                className={styles.icon}
            />
        );

        return icon.href ? (
            <a
                key={icon.id}
                href={icon.href}
                rel={'noreferrer'}
                target={'_blank'}
            >
                {image}
            </a>
        ) : (
            image
        );
    });

    const navItemList = [
        {
            id: 0,
            to: '/',
            title: 'Experience',
        },
        {
            id: 1,
            to: '/interests',
            title: 'Interests',
        },
        {
            id: 2,
            to: '/blog',
            title: 'Blog',
        },
        {
            id: 3,
            to: '/contact',
            title: 'Contact',
        },
    ];
    const navItems = navItemList.map((navItem) => (
        <p key={navItem.id} className={styles.link}>
            <NavLink to={navItem.to}>{navItem.title}</NavLink>
        </p>
    ));

    return (
        <header className={styles.header}>
            <div className={styles.linksContainer}>
                <a href='/'>
                    <img
                        src={'./favicon.png'}
                        alt={'profile picture logo'}
                        className={styles.logo}
                    />
                </a>
                <p className={styles.title}>Experience</p>
            </div>
            <div className={styles.iconsContainer}>{icons}</div>
            <label
                htmlFor={'navbar-toggle'}
                className={styles.navbarToggleLabel}
            >
                <img src={'./icons/menu.svg'} alt={'menu button'} />
            </label>
            <input
                id={'navbar-toggle'}
                className={'navbar-toggle'}
                type={'checkbox'}
            />
            <nav className={'navbar'}>{navItems}</nav>
        </header>
    );
}

export default Header;
