import axios from 'axios';

const apiurl = axios.create({
    baseURL : "https://precsserver-2.onrender.com/",
});

export default apiurl;