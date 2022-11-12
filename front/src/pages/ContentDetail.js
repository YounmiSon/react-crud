import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DelContent, editContent, GetContentDetail } from "../modules/board";

const ContentDetail = (id) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const nav = useNavigate();

  const contents = useSelector((state) => state.board.contents);
  // console.log(contents);

  useEffect(() => {
    const num = location.pathname.split("/board/")[1];
    dispatch(GetContentDetail(num));
  }, []);

  // 전역변수보다 매개변수가 먼저라서 매개변수로 nav를 전달하니까 빈 객체가 들어온거임
  // 여기서 매개변수로 nav 전달하면 안됨
  const delBtn = () => {
    const num = location.pathname.split("/board/")[1];
    dispatch(DelContent(num, nav));
  };
  const editBtn = () => {
    const num = location.pathname.split("/board/")[1];
    nav("/board/edit/" + num);
  };
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="w-3/5">
        <h1 className="bg-gray-200 h-12 text-2xl border-b-black flex items-center justify-center border-[1px] ">
          {contents.title}
        </h1>
        <p className="h-12 pl-4 border-[1px] border-b-black flex items-center">
          작성자 : {contents.user}
        </p>
        <div className="bg-gray-200 h-12 px-4 border-[1px] border-b-black flex items-center justify-between">
          <p>조회수 : {contents.count}</p>
          <p>작성일 : {contents.createdAt}</p>
        </div>

        <p className="h-60 pt-4 border-[1px] border-b-black flex justify-center">
          {contents.text}
        </p>
      </div>
      <div>
        <button
          className="cursor-pointer bg-gray-200 p-3 rounded-lg mt-8 mr-4"
          onClick={(e) => {
            delBtn();
          }}
        >
          삭제
        </button>
        <button
          className="cursor-pointer bg-gray-200 p-3 rounded-lg mt-8"
          onClick={(e) => {
            editBtn();
          }}
        >
          수정
        </button>
      </div>
    </div>
  );
};

export default ContentDetail;
