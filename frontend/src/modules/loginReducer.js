const initialState = {
  loginData : []
};

//상태가 변화할 때 수행되는 함수
//Type에 따른 상태변화
const loginReducer = (state = initialState, action) => {
  console.log("BBB" );
  console.log(action);
  switch (action.type) {
    case 'GET_TOKEN_DATA':

      console.log("???");
      console.log(state);
      return { ...state,
               loginData: action.payload
              }

    default:
      return state;
  }
};
export default loginReducer;