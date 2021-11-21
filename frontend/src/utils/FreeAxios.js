import CommonAxios from './CommonAxios.js'

const getUser = async (header) => {
    console.log(header)
    return await CommonAxios({
        url: '/oauth/naverLogin',
        method: 'GET',
        params: header
    })
}

const getList = async () => {
    const freeListData = await CommonAxios({
        url: '/free/list',
        method: 'GET'
    })

    return {
            type: 'GET_FREE_DATA',
        payload : freeListData.data
    }
}

const getOne = async (boardNo) => {
    return await CommonAxios({
        url: '/free/view',
        method: 'GET',
        params: {'boardNo' : boardNo}
    })
}



const Send = {
    getUser,
    getList,
    getOne
}

export default Send;