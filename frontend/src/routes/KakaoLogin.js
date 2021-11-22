import { useEffect } from "react";
import axios from 'utils/KakaoAxios.js';
import { useHistory } from "react-router-dom";
import CookieUtil from '../utils/CookieUtil.js';

// reactstrap components

const Login = () => {
  let history = useHistory();

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    code = {"code" : code};
    
    axios.authorizeToken(code).then((response)=>{
      
      if(response.data === ""){
        
      }else{
        CookieUtil.setLoginCookie(response.data);
        history.push("/main");
      }

    });
    
  }, []);

  return (
    <>
      
    </>
  );
};

export default Login;
