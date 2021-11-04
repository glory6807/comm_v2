import CommonAxios from './CommonAxios.js'


const authorizeToken = async (code) => {
    CommonAxios.axiosPost("/oauth/kakaoLogin", code);
}

const Send = {
    authorizeToken
}

export default Send;