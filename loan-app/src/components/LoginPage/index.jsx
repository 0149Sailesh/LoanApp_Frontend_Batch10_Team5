import React from 'react'
import LoginNav from '../Navbar/LoginNav'
import SideMenu from '../SideMenuUser'
import styles from './style.module.css'
import { useEffect } from 'react'
import { GetAllAdmins } from '../request'
function LoginPage() {

  const getAllAdmins = async ()=>{
    let res = await GetAllAdmins();
    console.log(res)
  }
  useEffect( ()=>{
    getAllAdmins()
  }, [])
  const handleSubmit = (e) =>{
    let formData = {
      email : e.target.email.value,
      password : e.target.password.value
    }

    console.log(formData)
  }
  return (
    <div>
        <LoginNav></LoginNav>
        <div className={`${styles.loginContainer}`}>
            <div className={`${styles.flexItems}`}>
                <img width='100%' src='/stagecoach.jpg' alt="" />
            </div>
            <div>
                <div className={`${styles.loginForm}`}>
                <form onSubmit={handleSubmit} >
                    <h3>Login</h3>
                <div class="form-group">
                     <label for="exampleInputEmail1">Email address</label>
    <input name="email" required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name="password" required type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
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

export default LoginPage