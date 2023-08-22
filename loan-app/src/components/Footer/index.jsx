
import React from 'react';
import styles from './style.module.css';


export function Footer() {



    return (
        <div className={`  d-flex justify-content-center  ${styles.main}`}>
            <div className='d-flex  align-items-center w-100 justify-content-center'>

                <div className={styles.logo}>
                    <img src='/icons/footer-logo.png' height={80} width={140} />
                </div>
                <div className={`${styles.nav}`}>
                    <div className={styles.navElement}>About  </div>
                    <div className={styles.navElement}>Contact us </div>
                    <div className={styles.navElement}>Terms</div>
                    <div className={styles.navElement}>Privacy</div>
                </div>
            </div>

        </div>
    );
}