import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { CreateContent } from "../modules/board";

const Write = () => {
  const title = useRef();
  const text = useRef();
  const user = useRef();

  const dispatch = useDispatch();

  // 이렇게 값이 제대로 넘어오는지, 액션되는지 확인한 뒤에 만들기
  // function test() {
  //   console.log(title.current.value);
  //   console.log(text.current.value);
  //   // dispatch(CreateContent());
  // }

  function submitPost() {
    // 예외처리 여기서 해줌
    if (title.current.value === "") {
      alert("제목을 입력해주세요");
      return;
    }
    if (text.current.value === "") {
      alert("내용을 입력해주세요");
      return;
    }
    if (user.current.value === "") {
      alert("작성자를 입력하세요");
      return;
    }
    dispatch(
      CreateContent(title.current.value, text.current.value, user.current.value)
    );
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <label className="mt-8">작성자</label>
      <input ref={user} className="borer-black border-[2px] w-96" />
      <label>제목</label>
      <input ref={title} className="borer-black border-[2px] w-96" />
      <label>내용</label>
      <textarea ref={text} className="borer-black border-[2px] w-96" />
      <button
        onClick={submitPost}
        className="flex items-center justify-center my-8"
      >
        등록하기
      </button>
    </div>
  );
};

export default Write;
