import axios from 'axios';
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const GLogin = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const {loginData} = useSelector((state) => ({
        loginData : state.login.loginData
    }));

    // Google Login
    const responseGoogle = (res) => {
        res = res.profileObj;

        axios({
            method: 'POST',
            url: '/oauth/googleLogin',
            data:{
                res
            }
        }).then((res)=> {
            // const googleToken = res.data;
            dispatch(loginDispatch(res.data.user_id, 
                                    res.data.email, 
                                    res.data.nick_name, 
                                    res.data.comm_v2_token));
            history.push("/main");
        })
    }

    // Google Login Fail
    const responseFail = (err) => {
        console.log(err);
    }

    const loginDispatch = (id, email, nickname, comm_v2_token) => {
        return {
            type: 'GET_TOKEN_DATA',
            payload: {
                id: id,
                email: email,
                nickname: nickname,
                comm_v2_token: comm_v2_token
            }
        };
    }

    return (
        <>
            <GoogleLogin
                clientId="584673240291-hhlhk15fsp18l0f9mq2taqdq1fsoc90c.apps.googleusercontent.com"
                buttonText="Google Login"
                onSuccess={responseGoogle}
                onFailure={responseFail}
            />
        </>
    )
};

export default GLogin;