import axios from 'axios'

const SecureAxios = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
})



export default SecureAxios