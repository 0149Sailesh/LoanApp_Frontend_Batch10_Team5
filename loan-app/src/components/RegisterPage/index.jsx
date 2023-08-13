import React from 'react'
import LoginNav from '../Navbar/LoginNav'
import SideMenu from '../SideMenuUser'
import styles from './style.module.css'
function RegisterPage() {
  return (
    <div>
        <LoginNav></LoginNav>
        <div className={`${styles.loginContainer}`}>
            <div className={`${styles.flexItems}`}>
                <img width='100%' src='/stagecoach.jpg' alt="" />
            </div>
            <div>
                <div className={`${styles.loginForm}`}>
                <form >
                    <h3>Register</h3>
                <div class="form-group">
                     <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group" style={{marginTop:"10px"}}>
  <label for="usr">Name:</label>
  <input type="text" class="form-control" id="usr"/>
  </div>
  <div class="form-group" style={{marginTop: "10px"}}>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <br></br>
    <div class="form-group">
    <button type="submit" class="btn text-warning bg-danger fw-bold">Submit</button>
    </div>
  
</form>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default RegisterPage