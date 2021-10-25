import Axios from "axios";

const axiosInstance = Axios.create({
    baseURL: '',
    timeout : 3000,
})

axiosInstance.interceptors.request.use(
    (config) => {
      console.log(config);
      return config;
    },
    (err) => {
      console.log(err);
      return Promise.reject(err);
    }
  );
  axiosInstance.interceptors.response.use(
    (config) => {
      console.log(config);
      return config;
    },
    (err) => {
      console.log(err);
      return Promise.reject(err);
    }
  );

  export default axiosInstance;