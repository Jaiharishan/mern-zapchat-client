import axios from 'axios';


// creating and axios instance with custom defaults

const fetcher = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        token: localStorage.getItem('jwtToken')
    }
})

export default fetcher