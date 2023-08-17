import axios from 'axios'

import { GET_ALL_ADMINS, ADMIN_LOGIN, GET_ADMIN, EMPLOYEE_REGISTER, LOAN_REGISTER,
     GET_ALL_LOAN, DELETE_LOAN, ADD_ITEM, GET_ALL_ITEMS, DELETE_ITEM, UPDATE_ITEM, PUT_LOAN} from './url'



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
const getUserName = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    return user.username;
}
// Test route
export const GetAdmin = () => axios.get(GET_ADMIN, getHeader(), { params: { id: getUserName() } });
export const AdminLogin = (data) => axios.post(ADMIN_LOGIN, data)
export const EmpRegister = (data) => axios.post(EMPLOYEE_REGISTER, data);
export const LoanRegister = (data) => axios.post(LOAN_REGISTER, data);
export const GetAllLoan = () => axios.get(GET_ALL_LOAN, getHeader());
export const DeleteLoan=(id)=>axios.delete(`${DELETE_LOAN}${'/'}${id}`);
export const GetAllAdmins=()=>axios.get(GET_ALL_ADMINS, getHeader())

//Items
export const AddItem = (data) => axios.post(ADD_ITEM, data)
export const GetAllItems = ()=> axios.get(GET_ALL_ITEMS)
export const DeleteItem = (id) => axios.delete(`${DELETE_ITEM}/${id}`)
export const EditItem = (data) => axios.put(UPDATE_ITEM, data, getHeader())
export const PutLoan=(data)=>axios.put(PUT_LOAN, data)
