const initialState = {
    memDatas: [
      // BOARD_NO, BOARD_TTL, BOARD_WRTR, REG_DT
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
  const memReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_MEM_DATA':
        return { ...state,
                 memDatas: action.payload.memDatas,
                 count: action.payload.count,
                 page : action.payload.page }

        case 'GET_MEM_DATA_ONE':
          return {
              ...state,
              // state 에 action 으로 전달받은 id값과 일치하는 data가 있다면 return 해준다.
              selectRowData: state.memDatas.find(row => row.BOARD_NO === action.payload.id)
          }

      default:
        return state;
    }
  };
  export default memReducer;