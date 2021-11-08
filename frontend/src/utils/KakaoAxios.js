import { isConstructorDeclaration } from 'typescript';
import CommonAxios from './CommonAxios.js'


const authorizeToken = async (code) => {
    return await CommonAxios({
        url : "/oauth/kakaoLogin"
       ,method: 'POST'
       ,data : {
         'code' : code
       }
    })
}

const Send = {
    authorizeToken
}

export default Send;