import React from 'react';
import styles from './styles.module.css';
import Nav from 'react-bootstrap/Nav';
export function Error404() {
    return (
        <div className={` d-flex align-items-center justify-content-center  ${styles.main}`}>
            <div style={{ width: '30%' }} >
                <h1 className={styles.heading}>Oops ! </h1>
                <div className='pt-4 pb-3 text-large' style={{ fontSize: '2rem', color: '#b1a7a6' }}>We didn't create the page you are looking for ... </div>
                <div className='d-flex justify-content-center flex-column  '>
                    <Nav.Link href='/dash-board'  style={{width:'50%'}}  className=' btn px-1 py-2 mt-2 ml-1 bg-danger text-warning border-0 fw-bold' variant="primary">Go back to dash board</Nav.Link>

                </div>
            </div>
            <img className={styles.img} src='icons/404.gif' width={500} />
        </div>
    );
}