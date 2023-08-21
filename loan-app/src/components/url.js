const BACKEND_URL = 'http://localhost:5044';

export const GET_ALL_ADMINS = `${BACKEND_URL}/api/Admin/GetAllAdmins`
export const EMPLOYEE_REGISTER = `${BACKEND_URL}/api/EmployeeMaster/RegisterEmployee`
export const ADMIN_REGISTER=`${BACKEND_URL}/api/Admin/RegisterAdmin`
export const ADMIN_LOGIN = `${BACKEND_URL}/api/Admin/LoginAdmin`
export const GET_ADMIN=`${BACKEND_URL}/api/Admin/GetAdmin/{id}`
export const LOAN_REGISTER=`${BACKEND_URL}/api/LoanCardMaster/RegisterLoanCard`
export const GET_ALL_LOAN=`${BACKEND_URL}/api/LoanCardMaster/GetAllLoanCards`
export const DELETE_LOAN=`${BACKEND_URL}/api/LoanCardMaster/DeleteLoanCard`


//Item specific
export const ADD_ITEM = `${BACKEND_URL}/api/ItemMaster/RegisterItem`
export const GET_ALL_ITEMS = `${BACKEND_URL}/api/ItemMaster/GetAllItems`
export const DELETE_ITEM = `${BACKEND_URL}/api/ItemMaster/DeleteItem`
export const UPDATE_ITEM = `${BACKEND_URL}/api/ItemMaster/EditItem`
export const PUT_LOAN=`${BACKEND_URL}/api/LoanCardMaster/EditLoanCard`
export const GET_ALL_EMPLOYEE=`${BACKEND_URL}/api/EmployeeMaster/GetAllEmployees`
export const DELETE_EMPLOYEE=`${BACKEND_URL}/api/EmployeeMaster/DeleteEmployee`
export const PUT_EMPLOYEE=`${BACKEND_URL}/api/EmployeeMaster/EditEmployee`
export const LOGIN_EMPLOYEE = `${BACKEND_URL}/api/EmployeeMaster/LoginEmployee`