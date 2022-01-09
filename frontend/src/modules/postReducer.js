// initialState
const initialState = {
    notiDatas: [],
    count: 0,
    page: 0,
    id: '',
    oneNoti: {}
};

const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_NOTICE_DATA':
            return { ...state,
                    notiDatas: action.payload.notiDatas,
                    count: action.payload.count,
                    page: action.payload.page }
        
        case 'GET_NOTICE_ONE':
            return { ...state,
                    oneNoti: state.notiDatas.find(row => row.BOARD_NO === action.payload.id) }
        
        // case 'EDIT_NOTICE_ONE':
        //     return { ...state,
        //             editNoti: }

        default:
            return state;
    }
};

export default postReducer;