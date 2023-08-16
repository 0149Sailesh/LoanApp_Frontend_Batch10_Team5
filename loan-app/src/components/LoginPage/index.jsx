import React from 'react'
import LoginNav from '../Navbar/LoginNav'
import SideMenu from '../SideMenuUser'
import styles from './style.module.css'
import { useEffect } from 'react'
import { GetAllAdmins, AdminLogin } from '../request'
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();

  const getAllAdmins = async () => {
    let res = await GetAllAdmins();
    console.log(res)

  }

  const loginFunc = async (data) => {
    const res = await AdminLogin(data)

    console.log(res)
    localStorage.setItem('Token',res.data.tokenDet)
    localStorage.setItem('user', JSON.stringify(res.data.userDet))

  }
  // useEffect( ()=>{
  //   getAllAdmins()
  // }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = {
      username: 'admin1',
      email: e.target.email.value,
      password: e.target.password.value
    }


    const res = await loginFunc(formData)

    console.log(formData)

    history.push('/dash-board')


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
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input name="email" required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input name="password" required type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <br></br>
              <div className="form-group">
                <button type="submit" className="btn text-warning bg-danger fw-bold">Submit</button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginPage