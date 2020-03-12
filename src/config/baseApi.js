import Axios from 'axios'

const token     =   localStorage.getItem('token')

const baseApi   =   Axios.create({
    baseURL: `http://10.236.210.219:5000`,
    headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json'
    }
})

export default baseApi