import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setCookie = (name, value, option){
    return cookie.set(name, value, {...option});
}

export const getCookie = (name){
    return cookie.get(name);
}