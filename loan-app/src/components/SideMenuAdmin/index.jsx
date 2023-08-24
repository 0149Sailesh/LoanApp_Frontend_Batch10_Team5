import React from 'react'
import styles from './style.module.css'
import user from './user.png'
import { useHistory } from 'react-router-dom'
function SideMenuAdmin() {
  const history = useHistory()
  const routeFunc = (url)=>{
    history.push(url)
  }
  return (
    <div className={styles.sideMenu}>
      
       <img width='70%' onClick={()=> routeFunc('/view-customers')} height="40" src='/icons/loan-ig.png' className={`rounded-circle ${styles.sideItems}`}></img>
       <p className={`${styles.sideItemsText}`}>View Customer</p>
       <img width='60%' onClick={()=> routeFunc('/admin-AddCustomerData')} height="40" src='icons/plus-white.png' className={`rounded-circle ${styles.sideItems}`}></img>
       <p className={`${styles.sideItemsText}`}>Add Customer</p>
       <img width='60%' onClick={()=> routeFunc('/view-loan')} height="40" src='icons/cart.png' className={`rounded-circle ${styles.sideItems}`}></img>
       <p className={`${styles.sideItemsText}`}>View Loan</p>
       <img width='60%' onClick={()=> routeFunc('/admin-AddLoanCard')} height="40" src='/icons/plus-white.png' className={`rounded-circle ${styles.sideItems}`}></img>
       <p className={`${styles.sideItemsText}`}>Add Loans</p>
       <img width='90%' onClick={()=> routeFunc('/view-items')} height="40" src='icons/form-g.png' className={`rounded-circle ${styles.sideItems}`}></img>
       <p className={`${styles.sideItemsText}`}>View Items</p>
       <img width='60%' onClick={()=> routeFunc('/admin-AddItemDetails')} height="40" src='icons/plus-white.png' className={`rounded-circle ${styles.sideItems}`}></img>
       <p className={`${styles.sideItemsText}`}>Add Items</p>
    </div>
  )
}

export default SideMenuAdmin