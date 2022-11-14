import axios from "axios";

// 액션타입
const SIGN_UP = "register/SIGN_UP";

// 액션 함수

// 초기값
const init = {
    user:[{
        userId : "mandoo", 
        userPw : 1234, 
    }]
};

// 리듀서
function reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "SIGN_UP":
      return { ...state };

    default:
      return { ...state };
  }
}
