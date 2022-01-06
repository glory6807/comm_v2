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
    return await CommonAxios({
        url: '/noti/view',
        method: 'GET',
        params: {'boardNo' : boardNo }
    })
}

const write = async (notiData) => {
    console.log('noti axios - write');
    console.log('noti : '+ notiData);
    return await CommonAxios({
        url: '/noti/write',
        method: 'POST',
        data: {'notiData': notiData}
    })
}

// const writeBoard = async () => {
//     return await CommonAxios({
//         url: '/noti/write',
//         method: 'GET'
//     })
// }

const Send = {
    getList, getOne, write
}

export default Send;