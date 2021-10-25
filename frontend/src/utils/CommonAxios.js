import Axios from "axios";

// Axios create 를 이용하여 Axios 객체 생성.
// 이로서 timeout 3000을 설정값을 가진 Axios 객체 생성.
const axiosInstance = Axios.create({
    timeout : 3000
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("AXIOS REQUEST INTERCEPTOR");
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

axiosInstance.interceptors.response.use(
  (config) => {
    console.log("AXIOS RESPONSE INTERCEPTOR");
    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

const functionList = {
  axGet,
  axPost
}

export default functionList;