import React from 'react';
import styles from './HomeContent.module.scss';

function HomeContent(props) {
    return (
        <>
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

export default HomeContent;
