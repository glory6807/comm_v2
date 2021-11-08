import { useEffect } from "react";
import axios from 'utils/KakaoAxios.js'

// reactstrap components

const Login = () => {

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    code = {"code" : code};
    
    console.log(code);
    axios.authorizeToken(code);
    
  }, []);

  return (
    <>
      
    </>
  );
};

export default Login;
