import Axios from "axios";
import CookieUtils from "./CookieUtil";
// Axios create 를 이용하여 Axios 객체 생성.
// 이로서 timeout 3000을 설정값을 가진 Axios 객체 생성.
const axiosInstance = Axios.create({
    timeout : 10000
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("AXIOS REQUEST INTERCEPTOR");

    var comm_v2_token = CookieUtils.getCookie("comm_v2_token");
    if (comm_v2_token != null && comm_v2_token != undefined && comm_v2_token != ""){
      config.headers["Authorization"] = CookieUtils.getCookie("comm_v2_token");
    }
    
    document.body.classList.add('loading-indicator');
    return config;
  },
  (err) => {
    console.log(err);
    document.body.classList.remove('loading-indicator');
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (config) => {
    console.log("AXIOS RESPONSE INTERCEPTOR");
    document.body.classList.remove('loading-indicator');
    return config;
  },
  (err) => {
    console.log(err);
    document.body.classList.remove('loading-indicator');
    return Promise.reject(err);
  }
);

export default axiosInstance;