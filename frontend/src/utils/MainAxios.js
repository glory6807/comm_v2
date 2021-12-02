import CommonAxios from './CommonAxios.js'

const getUser = async (header) => {
    return await CommonAxios({
        url: '/main/naverLogin',
        method: 'GET',
        params: header
    })
}

const Send = {
    getUser
}

export default Send;