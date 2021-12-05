import CommonAxios from './CommonAxios.js'

const getAnalysisData = async () => {
    return await CommonAxios({
        url: '/main/analysisData',
        method: 'GET'
    })
}

const Send = {
    getAnalysisData
}

export default Send;