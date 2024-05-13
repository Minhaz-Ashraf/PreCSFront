import axios from "axios";

const apiurl = axios.create({
  baseURL: "http://cspreadmin.gauravdesign.com/",
  // http://localhost:8000
  // You can add other default configurations here if needed
});

export default apiurl;