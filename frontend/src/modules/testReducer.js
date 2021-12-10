const initialState = {
    freeDatas: [
      // BOARD_NO, BOARD_TTL, BOARD_WRTR, REG_DT
    ],
    count : 0,
    page : 1,
    id : '',
    email : '',
    nickname : ''
  };
  
  //상태가 변화할 때 수행되는 함수
  //Type에 따른 상태변화
  const testReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_FREE_DATA':
        return { ...state,
                 freeDatas: action.payload.freeDatas,
                 count: action.payload.count,
                 page : action.payload.page }
      
      case 'NAVER_LOGIN_USER':
        return { ...state,
                 id: action.payload.id,
                 email: action.payload.email,
                 nickname : action.payload.nickname
        }

      default:
        return state;
    }
  };
  export default testReducer;