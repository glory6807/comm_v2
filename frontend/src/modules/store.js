import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

import { persistStore } from 'redux-persist';
// browser가 밑에 작성할 config에 관해 이 store를 cache할 수 있게 접근을 허용해준다
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

const middlewares = [thunk.withExtraArgument({ history: history })];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
// store의  persisted 버젼을 선언해준다.
// 이제 이 persistor와 store를 사용하여 application을 감싸고 있는 provider를 새롭게 만들어줄 것이다.

// store와 persistor를 객체로 export default해줘서 다른 파일에서 사용할 수 있게 해준다.
export default { store, persistor };
