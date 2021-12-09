const initialState = {
    id : '',
    email : '',
    nickname : '',
    comm_v2_token : ''
};

//상태가 변화할 때 수행되는 함수
//Type에 따른 상태변화
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOKEN_DATA':
      return { ...state,
               id : action.payload.id,
               email : action.payload.email,
               nickname : action.payload.nickname,
               comm_v2_token : action.payload.comm_v2_token
              }

    default:
      return state;
  }
};
export default loginReducer;