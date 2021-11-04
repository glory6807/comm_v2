import { useEffect } from "react";
import axios from 'utils/KakaoAxios.js'

// reactstrap components
import {
  Button
} from "reactstrap";


const Login = () => {

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    code = {"code" : code};
    axios.authorizeToken(code);
  }, []);

  return (
    <>
      <Button></Button>
    </>
  );
};

export default Login;
