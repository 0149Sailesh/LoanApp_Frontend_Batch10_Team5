const BACKEND_URL = 'http://localhost:5044';

export const GET_ALL_ADMINS = `${BACKEND_URL}/api/Admin/GetAllAdmins`
export const EMPLOYEE_REGISTER = `${BACKEND_URL}/api/EmployeeMaster/RegisterEmployee`
export const ADMIN_REGISTER=`${BACKEND_URL}/api/Admin/RegisterAdmin`
export const ADMIN_LOGIN = `${BACKEND_URL}/api/Admin/LoginAdmin`
export const GET_ADMIN=`${BACKEND_URL}/api/Admin/GetAdmin/{id}`
export const LOAN_REGISTER=`${BACKEND_URL}/api/LoanCardMaster/RegisterLoanCard`