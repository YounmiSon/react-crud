// 요청과 응답 처리를 위해 axios 사용
// get, post 등등
import axios from "axios";

// 액션 타입
const CREATE = "board/CREATE";
const GET_CONTENT = "board/GET_CONTENT";
const DEL_CONTENT = "board/DEL_CONTENT";

// 액션 생성 함수
// 글 목록 조회
// index : 페이지네이션 // count : 글의 갯수
export const GetContent = (index, count) => {
  return async (dispatch, getState) => {
    const content = await axios({
      // offset, limit 쓸거라서 post 방식 사용함
      method: "post",
      url: "http://localhost:8000/board",
      data: {
        index,
        count,
      },
    });
    dispatch({ type: "GET_CONTENT", payload: content });
  };
};

// 글 생성
export const CreateContent = (title, text, user) => {
  return async (dispatch, getState) => {
    const content = await axios({
      method: "post",
      url: "http://localhost:8000/board/write",
      data: {
        title,
        text,
        user,
      },
    });
    console.log(content);
  };
};

// 글 삭제
export const DelContent = (num) => {
  return async (dispatch, getState) => {
    await axios({
      method: "post",
      url: "http://localhost:8000/delContent",
      data: {
        num,
      },
    });
    // const { index, count } = getState();
    // const content = await axios({
    //   // offset, limit 쓸거라서 post 방식 사용함
    //   method: "post",
    //   url: "http://localhost:8000/board",
    //   data: {
    //     index,
    //     count,
    //   },
    // });
    // dispatch({ type: "GET_CONTENT", payload: content });
  };
};

// 글 수정
export const UpdateContent = () => {};

// 초기값
const init = {
  // 게시판 글을 담아둘 배열
  content: [
    {
      num: 1,
      title: "김치만두",
      user: "만두",
      createdAt: new Date().getTime(),
      count: 0,
    },
  ],
  index: 0,
  count: 10,
};

// 리듀서
function reducer(state = init, action) {
  // type : 어떤 명령을 내릴지에 대한 이름
  // payload : 전달한 값을 받아온 값
  const { type, payload } = action;
  //   console.log(action);
  switch (type) {
    // 대문자로 하는건 상태값을 나눌 때의 규칙
    case "CREATE":
      console.log("글 등록");
      // 주소가 바뀌어야 값이 변했다고 인지하고 업데이트한다
      // ...로 값을 복사해준다
      return { ...state };

    case "GET_CONTENT":
      console.log("글 조회");
      console.log(payload);
      return { ...state, content: payload.data };

    case "DEL_CONTENT":
      return { ...state };

    // 위의 case를 하나도 만족하지 않았을 때
    default:
      return { ...state };
  }
}

export default reducer;
