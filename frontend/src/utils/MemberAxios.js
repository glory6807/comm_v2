import CommonAxios from './CommonAxios.js'


const getList = async (page) => {
    console.log('page? ' + page)
    const MemListData = await CommonAxios({
        url: '/member/list',
        method: 'GET',
        params: {'page' : page}
    })

    return {
            type: 'GET_MEM_DATA',
            payload : { memDatas : MemListData.data[0],
                        count : MemListData.data[1],                    
                        page : MemListData.data[2]}
    }
}

const getOne = async (boardNo) => {
    console.log(boardNo);
    return await CommonAxios({
        url: '/member/view',
        method: 'GET',
        params: {'boardNo' : boardNo}
    })
}

const Send = {
    getList,
    getOne
}

export default Send;