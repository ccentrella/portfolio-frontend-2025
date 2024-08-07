import React from 'react';
import styles from './Hero.module.scss';

function Hero(props) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftPanel}>
                    <div className={styles.profilePic}>
                        <img src='public/profile.png' alt='profile picture' />
                    </div>
                    <div className={styles.textContent}>
                        <p>&lsquo;Sup? My name is </p>
                        <p className={styles.name}>Chris Centrella.</p>
                    </div>
                </div>
                <div className={styles.rightPanel}>
                    <div className={styles.bgBox}></div>
                </div>
            </div>
            <div>
                <h2 className={styles.sectionHeading}>Industry Experience.</h2>
                <div></div>
            </div>
            <div>
                <h2 className={styles.sectionHeading}>Technical Experience.</h2>
                <div></div>
            </div>
            <div>
                <h2 className={styles.sectionHeading}>Causes.</h2>
                <div></div>
            </div>
        </>
    );
}

export default Hero;
