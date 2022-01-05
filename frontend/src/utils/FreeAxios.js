import CommonAxios from './CommonAxios.js'

const getUser = async (header) => {
    return await CommonAxios({
        url: '/oauth/naverLogin',
        method: 'GET',
        params: header
    })
}

const getList = async (page) => {
    console.log('page? ' + page)
    const freeListData = await CommonAxios({
        url: '/free/list',
        method: 'GET',
        params: {'page' : page}
    })

    return {
            type: 'GET_FREE_DATA',
        payload : { freeDatas : freeListData.data[0],
                    count : freeListData.data[1],                    
                    page : freeListData.data[2]}
    }
}

const getOne = async (boardNo) => {
    return await CommonAxios({
        url: '/free/view',
        method: 'GET',
        params: {'boardNo' : boardNo}
    })
}

const writeOne = async (datas) => {
    return await CommonAxios({
        url: '/free/write',
        method: 'POST',
        data: {'datas' : datas}
    })
}

const modifyOne = async (datas) => {
    return await CommonAxios({
        url: '/free/modify',
        method: 'POST',
        data: {'datas' : datas}
    })
}

const Send = {
    getUser,
    getList,
    getOne,
    writeOne,
    modifyOne
}

export default Send;