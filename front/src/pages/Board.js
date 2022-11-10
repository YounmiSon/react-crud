import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// 액션 함수 import
import { DelContent, GetContent, GetContentDetail } from "../modules/board";

const Board = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const content = useSelector((state) => state.board.content);

  useEffect(() => {
    dispatch(GetContent(0, 10));
    // console.log(content);
    // 배열 안에 주시할 값을 넣어줌, 값이 변하면 위에 있는 console에 찍힌다
  }, []);

  useEffect(() => {
    console.log(content);
  }, [content]);

  const writePost = () => {
    nav("/board/write");
  };

  const showDetail = (num) => {
    nav(`/board/${num}`);
    dispatch(GetContentDetail(num));
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <table className="w-3/5">
        <thead>
          <tr className="text-center bg-gray-200 h-12 border-[1px] border-b-black">
            <td>번호</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
            <td>조회수</td>
          </tr>
        </thead>
        <tbody>
          {content.map(({ id, title, user, createdAt, count }, idx) => (
            <tr
              key={idx}
              className="text-center bg-white h-12 border-[1px] border-b-black"
            >
              <td>{idx + 1}</td>
              <td
                className="cursor-pointer"
                onClick={(e) => {
                  showDetail(id);
                }}
              >
                {title}
              </td>
              <td>{user}</td>
              <td>{createdAt}</td>
              <td>{count}</td>
            </tr>
          ))}
          {/* 둘 다 됨
          {content.map((el, idx) => (
            <tr
              className="text-center bg-white h-12 border-[1px] border-b-black"
              key={idx}
            >
              <td>{el.idx}</td>
              <td>{el.title}</td>
              <td>{el.user}</td>
              <td>{el.createdAt}</td>
              <td>{el.count}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <button
        onClick={writePost}
        className="flex items-center justify-center my-8"
      >
        글쓰기
      </button>
    </div>
  );
};

export default Board;
