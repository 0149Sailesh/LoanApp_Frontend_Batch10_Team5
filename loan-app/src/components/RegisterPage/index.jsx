import React from 'react'
import LoginNav from '../Navbar/LoginNav'
import SideMenu from '../SideMenuUser'
import { useRef } from 'react'
import axios from 'axios'
import styles from './style.module.css'
import { ADMIN_REGISTER } from '../url'
function RegisterPage() {

  const emailRef= useRef('');
  const passRef= useRef('');
  const confirmPassRef=useRef('')
  const nameRef=useRef('');
  const handleSubmit = async(e) => {
    e.preventDefault()
    let formData = {
      username:nameRef.current,
      email:emailRef.current,
      password:passRef.current
        }
      try{
        let res= await axios.post(ADMIN_REGISTER,formData, {
          headers: {
            'Content-Type': 'application/json',
        }
        }
      )
        if(res.status == 200){
            // test for status you want, etc
            console.log(res.status)
        }    
        // Don't forget to return something   
        return res.data
    }
    catch (err) {
        console.error(err);
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
            <form >
              <h3>Register</h3>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input ref={emailRef} onChange={(e)=>emailRef.current=e.target.value} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group" style={{ marginTop: "10px" }}>
                <label for="usr">Name:</label>
                <input ref={nameRef} onChange={(e)=>nameRef.current=e.target.value}  type="text" class="form-control" id="usr" />
              </div>
              <div class="form-group" style={{ marginTop: "10px" }}>
                <label for="exampleInputPassword1">Password</label>
                <input ref={passRef} onChange={(e)=>passRef.current=e.target.value}  type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <br></br>
              <div class="form-group">
                <button type="submit" onClick={handleSubmit} class="btn text-warning bg-danger fw-bold">Submit</button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RegisterPage