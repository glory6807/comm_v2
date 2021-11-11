import { useEffect } from "react";
import axios from 'utils/KakaoAxios.js';
import { useHistory } from "react-router-dom";

// reactstrap components

const Login = () => {
  let history = useHistory();

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    code = {"code" : code};
    
    console.log(code);
    axios.authorizeToken(code).then((response)=>{
      
      if(response.data === ""){
        history.push("auth/register");
      }else{
        
      }

    });
    
  }, []);

  return (
    <>
      
    </>
  );
};

export default Login;
