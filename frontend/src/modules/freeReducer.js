const initialState = {
    freeDatas: [
      // BOARD_NO, BOARD_TTL, BOARD_WRTR, BOARD_CNTN REG_DT
    ],
    count : 0,
    page : 1,
    id : '',
    email : '',
    nickname : '',
    selectRowData: {}
  };
  
  //상태가 변화할 때 수행되는 함수
  //Type에 따른 상태변화
  const freeReducer = (state = initialState, action) => {
    console.log('action : ' + JSON.stringify(action));
    switch (action.type) {
      case 'GET_FREE_DATA':
        return { ...state,
                 freeDatas: action.payload.freeDatas,
                 count: action.payload.count,
                 page : action.payload.page }

        case 'GET_FREE_DATA_ONE':
          return {
              ...state,
              // state 에 action 으로 전달받은 id값과 일치하는 data가 있다면 return 해준다.
              selectRowData: state.freeDatas.find(row => row.BOARD_NO === action.payload.id)
          }

        case 'CREATE_NEW_ONE':
          return {
            selectRowData : {
              BOARD_NO : '', 
              BOARD_TTL : '', 
              BOARD_WRTR : '', 
              BOARD_CNTN : '',
              REG_DT : ''
            }
          }  

      default:
        return state;
    }
  };
  export default freeReducer;