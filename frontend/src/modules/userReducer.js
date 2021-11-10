import { createAction, handleActions } from "redux-actions";
import axios from "axios";

// actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const LOGIN_CHECK = "LOGIN_CHECK"; // 로그인 유지
const GET_AUTHNUM = "GET_AUTHNUM"; // 인증번호 받아오기
const FIND_PW = "FIND_PW"; // 비밀번호 찾기
const USER_INFO = "USER_INFO"; // 유저 정보 계속 유지하기

// actionCreators
const logIn = createAction(LOG_IN, (user, login_type) => ({
    user,
    login_type,
}))
const logOut = createAction(LOG_OUT, (user) => ({user}));
const loginCheck = createAction(LOGIN_CHECK, (cookie) => ({cookie}));
const findPw = createAction(FIND_PW, (email) => ({email}));
const UserInfo = createAction(USER_INFO, (user) => ({user}));

// initialState
const initialState = {
    user : {},
    // is_login : false,
    login_type: "normal",
    email: "",
};

// Google Login
const GoogleLoginAPI = (response) => {
    return function(dispatch, getState, { history }) {
        axios({
            method: "POST",
            url: "/oauth/googleLogin",
            data : {
                email : response.profileObj.email,
                name : response.profileObj.name
            }
        }).then((res) => {
            if(res.data.msg === "success"){

                // 토큰 받아오기
                const jwtToken = res.data.token;

                // 토큰 저장하기
                setCookie("user_login", jwtToken);

                const user_data = {
                    email : res.data.email,
                    nickname : res.data.nickname,
                    token : res.data.token,
                };

                dispatch(logIn(user_data, "google"));
            } else {
                console.log("GoogleLoginAPI msg : fail");
            }
        }).catch((err) => {
            console.log("GoogleLoginAPI 오류 발생", err);
        })
    }
}

// 일반 로그인
const loginAPI = (id, pw) => {
    return function (dispatch, getState, { history }){
        axios({
            method:"POST",
            url: "/oauth/login",
            data: {
                id : id,
                pw : pw,
            }
        }).then((res) => {
            if(res.data.msg === "success"){
                const jwtToken = res.data.token;
                setCookie("user_login", jwtToken);
                const user_data = {
                    email : res.data.email,
                    name: res.data.name,
                    token: res.data.token
                }

                dispatch(logIn(user_data, "normal"));
            }
        }).catch((err) => {
            console.log("loginAPI 오류 발생", err);
        })
    }
}

// 회원가입
const signupAPI = (id, email, name, pw) => {
    return function(dispatch, getState, { history }){
        axios({
            method: "POST",
            url: "/oauth/signup",
            headers: {
                Accept:"application/json",
                "Content-Type" : "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
            },
            data: {
                id: id,
                email: email,
                name: name,
                pw: pw
            }
        }).then((res) => {
            history.push("/");
        }).catch((err) => {
            console.log("signupAPI 오류 발생", err);
        })
    }
}

// PW 찾기
const FindPwAPI = (email) => {
    return function(dispatch, getState, { history }){
        axios({
            method: "POST",
            url:"/oauth/findPw",
            data: {
                email : email,
            }
        }).then((res) => {
            if(res.data.msg === "success"){
                dispatch(findPw(email));
            }
        }).catch((err) => {
            console.log("FindPwAPI 오류 발생", err);
        })
    }
}

// PW 변경

// 로그아웃 미들웨이
// 구글 로그인 시 카카오/네이버 로그아웃
const LogOutMiddleware = () => {
    return function(dispatch, getState, { history }){
        const loginType = getState().user.login_type;

        if(loginType === "normal"){
            history.replace("/");
            deleteCookie("user_login");
            deleteCookie("G_AUTHUSER_H");
            dispatch(logOut());
            return;
        }
        if(loginType === "google"){
            history.replace("/");
            deleteCookie("user_login");
            deleteCookie("G_AUTHUSER_H");
            dispatch(logOut());
            return;
        }
        if(loginType === "kakao"){
            history.replace("/");
            deleteCookie("user_login");
            deleteCookie("G_AUTHUSER_H");
            dispatch(logOut());
            return;
        }
        if(loginType === "naver"){
            history.replace("/");
            deleteCookie("user_login");
            deleteCookie("G_AUTHUSER_H");
            dispatch(logOut());
            return;
        }
    }
}

// reducer
export default handleActions({

    [LOG_IN] : (state, action) => 
        produce(state, (draft) => {
            draft.user = action.payload.user;

        })

})