import axios from 'axios';

const apiurl = axios.create({
    baseURL : "https://cspreadmin.gauravdesign.com/",
});

export default apiurl;