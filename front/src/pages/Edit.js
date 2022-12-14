import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editContent } from "../modules/board";

const Edit = () => {
  const title = useRef();
  const text = useRef();

  const dispatch = useDispatch();

  const contents = useSelector((state) => state.board.contents);
  const nav = useNavigate();

  useEffect(() => {
    title.current.value = contents.title;
    text.current.value = contents.text;
  }, []);

  function editPost() {
    // 예외처리 여기서 해줌
    if (title.current.value === "") {
      alert("제목을 입력해주세요");
      return;
    }
    if (text.current.value === "") {
      alert("내용을 입력해주세요");
      return;
    }
    dispatch(
      editContent(title.current.value, text.current.value, contents.id, nav)
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <label className="my-8">작성자 : {contents.user}</label>
      <label>제목</label>
      <input ref={title} className="borer-black border-[2px] w-96" />
      <label>내용</label>
      <textarea ref={text} className="borer-black border-[2px] w-96" />
      <button
        onClick={editPost}
        className="flex items-center justify-center my-8"
      >
        수정하기
      </button>
    </div>
  );
};

export default Edit;
