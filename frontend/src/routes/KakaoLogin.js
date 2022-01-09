/* eslint-disable */
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
        dispatch(loginDispatch(response.data.user_id, response.data.email, response.data.nick_name, response.data.comm_v2_token));
        CookieUtil.setLoginCookie(response.data);
        history.push("/main");
      }

    });
    
  }, []);

  const loginDispatch = (id, email, nickname, comm_v2_token) => {
    return {
      type: 'GET_TOKEN_DATA',
        payload: {
          id: id,
          email: email,
          nickname: nickname,
          comm_v2_token : comm_v2_token
        }
    };
  }

  return (
    <>
    </>
  );
};

export default Login;
