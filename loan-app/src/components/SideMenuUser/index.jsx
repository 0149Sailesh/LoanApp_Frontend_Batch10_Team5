import React from 'react'
import styles from './style.module.css'
import user from './user.png'
function SideMenu() {
  return (
    <div className={styles.sideMenu}>
       <img width="100%" height="70" src={user}/>
       <img width='80%' height="50" src='/icons/loan-ig.png' className={`rounded-circle ${styles.sideItems}`}></img>
       <p className={`${styles.sideItemsText}`}>View Loans</p>
       <img width='100%' height="50" src='icons/form-g.png' className={`rounded-circle ${styles.sideItems}`}></img>
       <p className={`${styles.sideItemsText}`}>Apply Loan</p>
       <img width='80%' height="50" src='icons/cart.png' className={`rounded-circle ${styles.sideItems}`}></img>
       <p className={`${styles.sideItemsText}`}>Purchases</p>
    </div>
  )
}

export default SideMenu