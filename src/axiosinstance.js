import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "http://localhost:8000";

let tokens = localStorage.getItem("access")
  ? JSON.parse(localStorage.getItem("access"))
  : null;

const axiosinstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${tokens}`,
  },
});

axiosinstance.interceptors.request.use(async (req) => {
    if (!tokens){
        tokens = localStorage.getItem("access")
    ? JSON.parse(localStorage.getItem("access"))
    : null;
    req.headers.Authorization = `Bearer ${access}`

    }
    const user=jwt_decode(access)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) <1;
    if(!isExpired) return req

    const resp = await axios.post(`${baseURL}/api/token/refresh/`,{
        refresh:tokens.refresh

    })
    localStorage.setItem('authtokens',JSON.stringify(resp.data))
    req.headers.Authorization = `Bearer ${response.data.access}`
  
  return req;
});

export default axiosinstance;
