import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DelContent, GetContentDetail } from "../modules/board";

const ContentDetail = (id) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const contents = useSelector((state) => state.board.contents.data);
  console.log(contents);

  useEffect(() => {
    const num = location.pathname.split("/board/")[1];
    dispatch(GetContentDetail(num));
  }, []);

  const delBtn = () => {
    const num = location.pathname.split("/board/")[1];
    dispatch(DelContent(num));
  };

  return (
    <div>
      <h1>제목 : {contents.title}</h1>
      <p>작성자 : {contents.user}</p>
      <p>조회수 : {contents.count}</p>
      <p>조회수 : {contents.createdAt}</p>
      <p>내용 : {contents.text}</p>
      <button
        className="cursor-pointer"
        onClick={(e) => {
          console.log(e);
          delBtn(id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default ContentDetail;
