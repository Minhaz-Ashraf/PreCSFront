import axios from 'axios';

const apiurl = axios.create({
    baseURL : "https://pre-c-sserver.vercel.app",
});

export default apiurl;