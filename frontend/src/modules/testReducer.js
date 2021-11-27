const initialState = {
    freeDatas: []
  };
  
  //상태가 변화할 때 수행되는 함수
  //Type에 따른 상태변화
  const testReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case 'GET_FREE_DATA':
        return { ...state, freeDatas: [...action.payload] };
  
      default:
        return state;
    }
  };
  export default testReducer;