import React from 'react'
import LoginNav from '../Navbar/LoginNav'
import SideMenu from '../SideMenuUser'
import styles from './style.module.css'
import { useEffect } from 'react'
import { GetAllAdmins, AdminLogin } from '../request'
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginPage() {
  
  const history = useHistory();

  const getAllAdmins = async () => {
    let res = await GetAllAdmins();
    console.log(res)

  }

  useEffect(async () => {

    if (localStorage.getItem('Token')) {
      history.push('/dash-board')
    } 

  }, []);
  const loginFunc = async (data) => {
try{    const res = await AdminLogin(data)

    console.log(res)
    localStorage.setItem('Token',res.data.tokenDet)
    localStorage.setItem('user', JSON.stringify(res.data.userDet))
    toast.success('Logged in')
  }
    catch(e){
toast.error('try again')
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
     
    let formData = {
      username: e.target.userName.value,
     
      password: e.target.password.value
    }
    console.log(formData)

    const res = await loginFunc(formData)

    

    history.push('/dash-board')
    } catch(err){
      if(err.response.status==404){
        toast.error('Incorrect Credentials!')
      }
      
    }
    


  }
  return (
    <div>
      <LoginNav></LoginNav>
      <ToastContainer/>
      <div className={`${styles.loginContainer}`}>
        <div className={`${styles.flexItems}`}>
          <img width='100%' src='/stagecoach.jpg' alt="" />
        </div>
        <div>
          <div className={`${styles.loginForm}`}>
            <form onSubmit={handleSubmit} >
              <h3>Login</h3>
              <div className="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input name="userName" required type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
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