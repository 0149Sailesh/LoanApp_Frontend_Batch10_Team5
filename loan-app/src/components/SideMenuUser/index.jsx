import React from 'react'
import styles from './style.module.css'
import user from './user.png'
import { useHistory } from 'react-router-dom'
function SideMenuUser() {
  const history = useHistory()
  const routeFunc = (url)=>{
    history.push(url)
  }
  return (
    <div className={styles.sideMenu}>
      
       <img width='60%' onClick={()=> routeFunc('/user/view-loan')} height="40"   src='/icons/loan-ig.png' className={`rounded-circle ${styles.sideItems}`}></img>
       <p className={`${styles.sideItemsText}`}>View Loans</p>
       <img width='60%' onClick={()=> routeFunc('/user/apply-loan')} height="40" src='/icons/plus-white.png' className={`rounded-circle ${styles.sideItems}`}></img>
       <p className={`${styles.sideItemsText}`}>Apply Loan</p>
       <img width='100%' onClick={()=> routeFunc('/user/view-items')} height="40" src='/icons/form-g.png' className={`rounded-circle ${styles.sideItems}`}></img>
       <p className={`${styles.sideItemsText}`}>View Items</p>
    </div>
  )
}

export default SideMenuUser