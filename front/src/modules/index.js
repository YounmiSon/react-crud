// createStore : redux 모듈 저장소 만드는 함수
import { createStore, combineReducers, applyMiddleware } from "redux";
// 미들웨어 thunk 사용
import thunk from "redux-thunk";
import board from "./board";

const rootReducer = combineReducers({ board });

// 리듀서 함수랑 미들웨어 전달
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
