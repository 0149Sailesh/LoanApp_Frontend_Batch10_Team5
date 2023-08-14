import axios from 'axios'

import { GET_ALL_ADMINS } from './url'

// Test route
export const GetAllAdmins = () => axios.get(GET_ALL_ADMINS);