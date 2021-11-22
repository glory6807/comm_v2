import { Cookies } from "react-cookie";


const setCookie = (name, value, option) => {
    const cookie = new Cookies();
    return cookie.set(name, value, {...option});
}

const setLoginCookie = (value, {...option})=>{
    const cookie = new Cookies();

    try{
        cookie.set("comm_v2_token", value.comm_v2_token);
        cookie.set("comm_v2_user_id", value.user_id);
        cookie.set("comm_v2_email", value.email);
        cookie.set("comm_v2_nick_name", value.nick_name);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}

const getCookie = (name)=>{
    const cookie = new Cookies();
    return cookie.get(name);
}

const CookieUtils = {
    getCookie,
    setCookie,
    setLoginCookie
}

export default CookieUtils;