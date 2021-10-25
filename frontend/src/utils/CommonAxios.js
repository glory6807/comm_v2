import Axios from "axios";

// Axios create 를 이용하여 Axios 객체 생성.
// 이로서 timeout 3000을 설정값을 가진 Axios 객체 생성.
const axiosInstance = Axios.create({
    timeout : 3000
});


// GET function
// NEST.js 에서 Get Decorator는 파라미터를 받을 수 없음. 
// localhost:3000/board/freeList?boardNo=111 이런식으로 쿼리스트링을 사용하거나,
// 쿼리스트링을 사용하지 못하는 상황이라면 POST 함수를 사용하는게 맞음.
const axGet = (url)=>{
  console.log("GET API EXECUTE");

  axiosInstance.get(url)
  .then((response)=>{
    console.log(response);
    return response;
  });
  // 뒤에 then 을 활용하여 ERROR 를 리턴할 수 있도록 추가적인 조치 필요해 보임.
};


// POST function
const axPost = (url, param)=>{
  console.log("POST API EXECUTE");

  axiosInstance.post(url,param)
  .then((response)=>{
    console.log(response);
    return response;
  });
  // 뒤에 then 을 활용하여 ERROR 를 리턴할 수 있도록 추가적인 조치 필요해 보임.
};

//PUT function
// PUT 함수도 있으면 좋을 듯.

// DELETE function
// DELETE 함수도 있으면 좋을 듯.


// Axios create 로 만든 객체에 Interceptor 달아줌.
// 앞으로 이 모듈의 axGet, axPost... 등의 함수를 사용하게 되면
// 아래의 인터셉터를 거치며 request, response 를 수행할 것임.
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