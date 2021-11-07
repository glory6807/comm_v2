import CommonAxios from './CommonAxios.js'


const getList = async () => {
    return await CommonAxios({
        url: '/free/list',
        method: 'GET'
    })
}

// const postList = async () => {
//     CommonAxios.axiosPost("/board/freeListPost", {data:"POST hi", data2:"POST hi2"}); 
// }



const Send = {
    getList,
    // postList
}

export default Send;