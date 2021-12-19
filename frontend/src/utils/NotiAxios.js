import CommonAxios from './CommonAxios.js'

const getList = async (page) => {
    console.log('noti axios - get list / page : ' + page);
    const notiListData = await CommonAxios({
        url: '/noti/list',
        method: 'GET',
        params: {'page' : page}
    })

    return {
        type: 'GET_NOTICE_DATA',
        payload: {
            count : notiListData.data[0],
            notiDatas : notiListData.data[1],
            page : notiListData.data[2]
        }
    }
}

const getOne = async (boardNo) => {
    console.log('noti axios - get one / board no : ' + boardNo);
    const notiData = await CommonAxios({
        url: '/noti/view',
        method: 'GET',
        params: {'boardNo' : boardNo }
    })

    return {
        type: 'GET_NOTICE_ONE',
        payload: {
            notiData : notiData
        }
    }
}

const writeBoard = async () => {
    return await CommonAxios({
        url: '/noti/write',
        method: 'GET'
    })
}

const Send = {
    getList, getOne
}

export default Send;