import CommonAxios from './CommonAxios.js'


const getList = async () => {
    // CommonAxios.axiosGet("/oauth/naverLogin");
    CommonAxios.axiosGet("/noti/list");
    // CommonAxios.axiosPost("/board/freeList", {data:"POST hi", data2:"POST hi2"}); 
}

const Send = {
    getList
}

export default Send;