import { useEffect } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import axios from 'utils/KakaoAxios.js';
import { useHistory } from "react-router-dom";
import CookieUtil from '../utils/CookieUtil.js';

// reactstrap components

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const {loginData}  = useSelector((state) => ({ loginData : state.login.loginData}));

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    code = {"code" : code};
    
    axios.authorizeToken(code).then((response)=>{
      
      if(response.data === ""){
        
      }else{
        console.log("AXIOS RETURN>>>>>")
        console.log(response);
        dispatch(response);
        //CookieUtil.setLoginCookie(response.data);
        //history.push("/main");
      }

    });
    
  }, []);

  return (
    <>
      <button>123{loginData[0]}</button>
      
    </>
  );
};

export default Login;
