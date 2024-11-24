import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://192.168.100.5:3000/api',
    headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        Pragma: 'no-cache',
        Expires: '0',
      },
})

export default instance