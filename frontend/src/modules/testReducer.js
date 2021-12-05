const initialState = {
    freeDatas: [
      // BOARD_NO, BOARD_TTL, BOARD_WRTR, REG_DT
    ],
    count : 0
  };
  
  //상태가 변화할 때 수행되는 함수
  //Type에 따른 상태변화
  const testReducer = (state = initialState, action) => {
    console.log('reducer')
    switch (action.type) {
      case 'GET_FREE_DATA':
        return { ...state,
                 freeDatas: action.payload.freeDatas,
                 count: action.payload.count }
  
      default:
        return state;
    }
  };
  export default testReducer;