import React from 'react';
import styles from './Hero.module.scss';

function Hero(props) {
    return (
        <div className={styles.panelContainer}>
            <div className={styles.leftPanel}>
                <div className={styles.profile}>
                    <img src='public/profile.png' alt='profile picture' />
                </div>
                <div>
                    <p className={styles.nameIntro}>&lsquo;Sup? My name is </p>
                    <p className={styles.name}>Chris Centrella.</p>
                </div>
            </div>
            <div className={styles.rightPanel}>
                <div className={styles.highlightContainer}></div>
            </div>
        </div>
    );
}

export default Hero;
