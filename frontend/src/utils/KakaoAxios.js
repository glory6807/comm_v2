import CommonAxios from './CommonAxios.js'

const authorizeToken = async (code) => {
    console.log("AUTHORIZE TOKEN");
    const tokenData = await CommonAxios({
        url : "/oauth/kakaoLogin"
       ,method: 'POST'
       ,data : {
         'code' : code
       }
    });

    console.log("RETURN:");
    console.log([tokenData.data]);
    return {
        type: "GET_TOKEN_DATA"
       ,payload : tokenData.data
    };
}

const Send = {
    authorizeToken
}

export default Send;