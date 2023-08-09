import React from 'react'
import LoginNav from '../Navbar/LoginNav'
import SideMenu from '../SideMenu'
import styles from './style.module.css'
function LoginPage() {
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
                    <h3>Login</h3>
                <div class="form-group">
                     <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <br></br>
    <div class="form-group">
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  
</form>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default LoginPage