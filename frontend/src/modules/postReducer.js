import { createAction, handleActions } from "redux-actions";
import axios from "axios";
import { produce } from "immer";
import AxiosData from 'utils/NotiAxios.js'

// actions
const GET_POST = "GET_POST";
const ONE_POST = "ONE_POST";
const ADD_POST = "ADD_POST";
// const IS_MANAGER = "IS_MANAGER";
const DELETE_POST = "DELETE_POST";

// actionCreators
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const onePost = createAction(ONE_POST, (post) => ({ post }));
// const isManager = createAction(IS_MANAGER, (button) => ({ button }));
const deletePost = createAction(DELETE_POST, (itemId, icrId) => ({ itemId, icrId }));

// initialState
const initialState = {
    post_list : [],
    is_manager : {}
}

// post list
const getPostAPI = () => {
    return function(dispatch, getState, { history }){
        // axios.get("/noti/list")
        //     .then((res) => {
        //         const post_list = res.data;
        //         dispatch(getPost(post_list));
        //     }).catch((err) => {
        //         console.log("getPostAPI 오류 발생", err);
        //     })

        AxiosData.getList().then((res)=> {
            const post_list = res.data;
            dispatch(getPost(post_list));
        }).catch((err) => {
            console.log("getPostAPI 오류 발생", err);
        })
        // axios({
        //     method: "GET",
        //     url: "/noti/list",
        // }).then((res) => {
        //     const post_list = res.data;
        //     dispatch(getPost(post_list));
        //     // if(res.data.msg === "success") {
        //     //     const post_list = res.data.data;
        //     //     dispatch(getPost(post_list));
        //     // } else {
        //     //     console.log("post list 가져오기 fail");
        //     // }
        // }).catch((err) => {
        //     console.log("getPostAPI 오류 발생", err);
        // })
    }
}

// get one
const getOnePostAPI = (boardNo) => {
    return async function(dispatch, getState, { history }){

        // axios.post("/noti/view", JSON.stringify(formdata), {
        //     headers: {
        //         "Contents-Type": `application/json`,
        //     },
        // })
        // .then((res) => {
        //     console.log('get one api');
        //     console.log(boardNo);
        //     dispatch(onePost(res.data));
        // }).catch((err) => {
        //     console.log("getOnePostAPI 오류 발생", err);
        // })


        await axios
            .get(`/noti/view/${boardNo}`)
            .then((res) => {
                console.log('get one api');
                dispatch(onePost(res.data));
                // if(res.data.msg === "success"){
                //     dispatch(onePost(res.data.data));
                // } else {
                //     console.log("post one 가져오기 fail");
                // }
            }).catch((err) => {
                console.log("getOnePostAPI 오류 발생", err);
            })
    }
}

// add post
const addPostAPI = (boardTtl, boardCntn, boardWrtr) => {
    return function(dispatch, getState, { history }) {
        let formdata = new FormData();
        formdata.append("boardTtl", boardTtl);
        formdata.append("boardCntn", boardCntn);
        formdata.append("boardWrtr", boardWrtr);

        axios({
            method: "POST",
            url: "/noti/write",
            data: formdata,
            headers: {
                "Content-Type" : "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
            }
        }).then((res) => {
            if(res.data.msg === "success"){
                dispatch(addPost(boardTtl, boardCntn, boardWrtr));
                history.push("/noti/list");
            } else {
                console.log("글 작성 실패");
            }
        }).catch((err) => {
            console.log("addPostAPI 오류 발생", err);
        })
    }
}

// delete post
const deletePostAPI = (boardNo, icrId) => {
    return function (dispatch, getState, { history }){
        axios({
            method: "DELETE",
            url: "/noti/delete",
            data: {
                boardNo : boardNo,
                icrId: icrId,
            },
        }).then((res) => {
            if(res.data.msg === "success"){
                dispatch(deletePost(boardNo, icrId));
            }
        }).catch((err) => {
            console.log("deletePostAPI 오류 발생", err);
        })
    }
}

// reducer
export default handleActions ({
    [GET_POST] : (state, action) =>
        produce(state, (draft) => {
            draft.post_list = action.payload.post_list;
        }),
    [ONE_POST] : (state, action) =>
        produce(state, (draft) => {
            draft.detail_list = action.payload.post;
        }),
    [ADD_POST] : (state, action) =>
        produce(state, (draft) => {
            if(!draft.post_list) {
                draft.post_list = action.payload.post;
            }
            draft.post_list.unshift(action.payload.post);
        }),
    // [IS_MANAGER] : (state, action) =>
    //     produce(state, (draft) => {
    //         draft.manager = action.payload.button;
    //     }),
    [DELETE_POST] : (state, action) =>
        produce(state, (draft) => {
            draft.post_list = draft.post_list.filter((m) => m.boardNo !== action.payload.boardNo);
        }),
    },
    initialState
);

// action creator export
const actionCreators = {
    getPost,
    addPost,
    getPostAPI,
    getOnePostAPI,
    addPostAPI,
    deletePostAPI
};

export { actionCreators };