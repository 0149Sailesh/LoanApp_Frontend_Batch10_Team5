import axios from 'axios'

import { GET_ALL_ADMINS, ADMIN_LOGIN, GET_ADMIN, EMPLOYEE_REGISTER,LOAN_REGISTER } from './url'

const getHeader = ()=>{
    const header = {
        
        headers: {
            "Access-Control-Allow-Origin": "*",
    
            Authorization: `Bearer ${localStorage.getItem('Token')}`
            
        },
        withCredentials: true
    }

    return header;
}
const getUserName = ()=>{
    let user = JSON.parse(localStorage.getItem('user'))
    return user.username;
}
// Test route
export const GetAdmin = () => axios.get(GET_ADMIN, getHeader(), { params: {id: getUserName()} });
export const AdminLogin = (data) => axios.post(ADMIN_LOGIN, data)
export const GetAllAdmins=()=>axios.get(GET_ALL_ADMINS, getHeader)
export const EmpRegister=(data)=>axios.post(EMPLOYEE_REGISTER, data);
export const LoanRegister =(data)=>axios.post(LOAN_REGISTER,data);