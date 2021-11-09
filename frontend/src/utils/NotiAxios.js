import CommonAxios from './CommonAxios.js'

const getList = async () => {
    return await CommonAxios({
        url: '/noti/list',
        method: 'GET'
    })
}

const writeBoard = async () => {
    return await CommonAxios({
        url: '/noti/write',
        method: 'GET'
    })
}

const Send = {
    getList, writeBoard
}

export default Send;