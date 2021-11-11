import CommonAxios from './CommonAxios.js'


const getList = async () => {
    return await CommonAxios({
        url: '/free/list',
        method: 'GET'
    })
}

const getOne = async (boardNo) => {
    console.log(boardNo);
    return await CommonAxios({
        url: '/free/view',
        method: 'GET',
        params: {'boardNo' : boardNo}
    })
}



const Send = {
    getList,
    getOne
}

export default Send;