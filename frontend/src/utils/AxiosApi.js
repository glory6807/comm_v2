import CommonAxios from './CommonAxios.js'


const getList = async () => {   
        console.log('get in');    
        return await CommonAxios({
                url: '/board/freeList',
                method: 'get'
            })
}

const Send = {
    getList
}

export default Send;