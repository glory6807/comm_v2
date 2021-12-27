import CommonAxios from './CommonAxios.js'

const getAnalysisData = async () => {
    return await CommonAxios({
        url: '/main/analysisData',
        method: 'GET'
    })
}

const getRecentBoardList = async() =>{
    return await CommonAxios({
        url: '/main/',
        method: 'GET'
    })
}

const getRecentUsrList = async() => {
    return await CommonAxios({
        url: '/main/recentUsr',
        method: 'GET'
    })
}

const Send = {
    getAnalysisData,
    getRecentBoardList,
    getRecentUsrList
}

export default Send;