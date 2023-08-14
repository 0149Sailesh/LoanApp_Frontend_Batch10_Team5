import axios from 'axios'

import { GET_ALL_ADMINS, ADMIN_LOGIN } from './url'

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
// Test route
export const GetAllAdmins = () => axios.get(GET_ALL_ADMINS, getHeader());
export const AdminLogin = (data) => axios.post(ADMIN_LOGIN, data)