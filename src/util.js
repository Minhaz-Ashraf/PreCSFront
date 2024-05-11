import axios from "axios";

const apiurl = axios.create({
  baseURL: "https://precsserver-2.onrender.com/",
  // http://localhost:8000
  // You can add other default configurations here if needed
});

export default apiurl;