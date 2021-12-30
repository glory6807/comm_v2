// initialState
const initialState = {
    notiDatas: [],
    count: 0,
    page: 0,
    id: '',
    oneNoti: {}
};

const postReducer = (state = initialState, action) => {
    console.log('post reducer');
    switch(action.type) {
        case 'GET_NOTICE_DATA':
            return { ...state,
                    notiDatas: action.payload.notiDatas,
                    count: action.payload.count,
                    page: action.payload.page }
        
        case 'GET_NOTICE_ONE':
            console.log('post reducer - get notice one.. 제발 ㅠ');
            return { ...state,
                    oneNoti: state.notiDatas.find(row => row.BOARD_NO === action.payload.id) }
        
        // case 'EDIT_NOTICE_ONE':
        //     console.log('post reducer - edit notice one');
        //     return { ...state,
        //             editNoti: }
        default:
            return state;
    }
};

export default postReducer;

// // post list
// const getPostAPI = () => {
//     return function(dispatch, getState, { history }){
//         // axios.get("/noti/list")
//         //     .then((res) => {
//         //         const post_list = res.data;
//         //         dispatch(getPost(post_list));
//         //     }).catch((err) => {
//         //         console.log("getPostAPI 오류 발생", err);
//         //     })

//         AxiosData.getList().then((res)=> {
//             const post_list = res.data;
//             dispatch(getPost(post_list));
//         }).catch((err) => {
//             console.log("getPostAPI 오류 발생", err);
//         })
//     }
// }

// // get one
// const getOnePostAPI = (boardNo) => {
//     return async function(dispatch, getState, { history }){

//         // axios.post("/noti/view", JSON.stringify(formdata), {
//         //     headers: {
//         //         "Contents-Type": `application/json`,
//         //     },
//         // })
//         // .then((res) => {
//         //     console.log('get one api');
//         //     console.log(boardNo);
//         //     dispatch(onePost(res.data));
//         // }).catch((err) => {
//         //     console.log("getOnePostAPI 오류 발생", err);
//         // })


//         await axios
//             .get(`/noti/view/${boardNo}`)
//             .then((res) => {
//                 console.log('get one api');
//                 dispatch(onePost(res.data));
//                 // if(res.data.msg === "success"){
//                 //     dispatch(onePost(res.data.data));
//                 // } else {
//                 //     console.log("post one 가져오기 fail");
//                 // }
//             }).catch((err) => {
//                 console.log("getOnePostAPI 오류 발생", err);
//             })
//     }
// }

// // add post
// const addPostAPI = (boardTtl, boardCntn, boardWrtr) => {
//     return function(dispatch, getState, { history }) {
//         let formdata = new FormData();
//         formdata.append("boardTtl", boardTtl);
//         formdata.append("boardCntn", boardCntn);
//         formdata.append("boardWrtr", boardWrtr);

//         axios({
//             method: "POST",
//             url: "/noti/write",
//             data: formdata,
//             headers: {
//                 "Content-Type" : "multipart/form-data",
//                 "Access-Control-Allow-Origin": "*",
//             }
//         }).then((res) => {
//             if(res.data.msg === "success"){
//                 dispatch(addPost(boardTtl, boardCntn, boardWrtr));
//                 history.push("/noti/list");
//             } else {
//                 console.log("글 작성 실패");
//             }
//         }).catch((err) => {
//             console.log("addPostAPI 오류 발생", err);
//         })
//     }
// }

// // delete post
// const deletePostAPI = (boardNo, icrId) => {
//     return function (dispatch, getState, { history }){
//         axios({
//             method: "DELETE",
//             url: "/noti/delete",
//             data: {
//                 boardNo : boardNo,
//                 icrId: icrId,
//             },
//         }).then((res) => {
//             if(res.data.msg === "success"){
//                 dispatch(deletePost(boardNo, icrId));
//             }
//         }).catch((err) => {
//             console.log("deletePostAPI 오류 발생", err);
//         })
//     }
// }

// // reducer
// export default handleActions ({
//     [GET_POST] : (state, action) =>
//         produce(state, (draft) => {
//             draft.post_list = action.payload.post_list;
//         }),
//     [ONE_POST] : (state, action) =>
//         produce(state, (draft) => {
//             draft.detail_list = action.payload.post;
//         }),
//     [ADD_POST] : (state, action) =>
//         produce(state, (draft) => {
//             if(!draft.post_list) {
//                 draft.post_list = action.payload.post;
//             }
//             draft.post_list.unshift(action.payload.post);
//         }),
//     // [IS_MANAGER] : (state, action) =>
//     //     produce(state, (draft) => {
//     //         draft.manager = action.payload.button;
//     //     }),
//     [DELETE_POST] : (state, action) =>
//         produce(state, (draft) => {
//             draft.post_list = draft.post_list.filter((m) => m.boardNo !== action.payload.boardNo);
//         }),
//     },
//     initialState
// );

// // action creator export
// const actionCreators = {
//     getPost,
//     addPost,
//     getPostAPI,
//     getOnePostAPI,
//     addPostAPI,
//     deletePostAPI
// };

// export { actionCreators };