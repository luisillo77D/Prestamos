import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://192.168.100.5:3000/api',
})

export default instance