import axios from 'axios'

import { GET_ALL_ADMINS, ADMIN_LOGIN, GET_ADMIN, EMPLOYEE_REGISTER, LOAN_REGISTER, PUT_EMPLOYEE,
     GET_ALL_LOAN, DELETE_LOAN, ADD_ITEM, GET_ALL_ITEMS, DELETE_ITEM, UPDATE_ITEM, PUT_LOAN,
      GET_ALL_EMPLOYEE, DELETE_EMPLOYEE, LOGIN_EMPLOYEE, GET_PURCHASED_ITEMS, GET_APPLIED_LOANS,APPLY_LOAN} from './url'



const getHeader = () => {
    const header = {

        headers: {
            "Access-Control-Allow-Origin": "*",

            Authorization: `Bearer ${localStorage.getItem('Token')}`

        },
        withCredentials: true
    }

    return header;
}
const deleteHeader = () => {
    const header = {

        headers: {
            "Access-Control-Allow-Origin": "*",

           

        },
        
    }

    return header;
}
// const getUserName = () => {
//     let user = JSON.parse(localStorage.getItem('user'))
//     return user.username;
// }
// Test route
export const GetAdmin = () => axios.get(GET_ADMIN, getHeader());
export const AdminLogin = (data) => axios.post(ADMIN_LOGIN, data)
export const EmpRegister = (data) => axios.post(EMPLOYEE_REGISTER, data, getHeader());
export const LoanRegister = (data) => axios.post(LOAN_REGISTER, data, getHeader());
export const GetAllLoan = () => axios.get(GET_ALL_LOAN, getHeader());
export const DeleteLoan=(id)=>axios.delete(`${DELETE_LOAN}${'/'}${id}`, getHeader());
export const GetAllAdmins=()=>axios.get(GET_ALL_ADMINS, getHeader())
export const GetAllEmployee=()=>axios.get(GET_ALL_EMPLOYEE, getHeader())
//Items
export const AddItem = (data) => axios.post(ADD_ITEM, data, getHeader())
export const GetAllItems = ()=> axios.get(GET_ALL_ITEMS, getHeader())
export const DeleteItem = (id) => axios.delete(`${DELETE_ITEM}/${id}`, getHeader())
export const EditItem = (data) => axios.put(UPDATE_ITEM, data, getHeader())
export const PutLoan=(data)=>axios.put(PUT_LOAN, data, getHeader())
export const DeleteEmployee=(id)=>axios.delete(`${DELETE_EMPLOYEE}${'/'}${id}`, getHeader())

export const PutEmployee= (data)=>axios.put(PUT_EMPLOYEE, data, getHeader())
export const LoginEmployee = (data)=>axios.post(LOGIN_EMPLOYEE, data)

//Employee items
export const GetEmployeePurchased = (id)=> axios.get(`${GET_PURCHASED_ITEMS}/${id}`, getHeader())
export const GetEmployeeLoans = (id) => axios.get(`${GET_APPLIED_LOANS}/${id}`, getHeader())

//User

export const ApplyLoan =(data)=>axios.post(APPLY_LOAN, data, getHeader())
