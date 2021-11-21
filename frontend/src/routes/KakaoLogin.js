import { useEffect } from "react";
import axios from 'utils/KakaoAxios.js';
import { useHistory } from "react-router-dom";

// reactstrap components

const Login = () => {
  let history = useHistory();

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    code = {"code" : code};
    
    axios.authorizeToken(code).then((response)=>{
      
      if(response.data === ""){
        console.log(response.data);
        //history.push("/main");
      }else{
        
        console.log(response.data);
      }

    });
    
  }, []);

  return (
    <>
      
    </>
  );
};

export default Login;
