import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Pagination, Search } from "../components";
// 액션 함수 import
import { DelContent, GetContent, GetContentDetail } from "../modules/board";

const Board = ({ contentCount }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const content = useSelector((state) => state.board.content);

  // 눌렀을 때 보여줄 페이지 , 초기값은 0
  const [page, setPage] = useState(0);

  // GetContent(여기에 위의 값을 전달,10)
  useEffect(() => {
    dispatch(GetContent(page, 10));
    // console.log(content);
    // 배열 안에 주시할 값을 넣어줌, 값이 변하면 위에 있는 console에 찍힌다
  }, [page]);

  useEffect(() => {
    // console.log(content);
  }, [content]);

  const writePost = () => {
    nav("/board/write");
  };

  const showDetail = (num) => {
    nav(`/board/${num}`);
    dispatch(GetContentDetail(num));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="w-3/5">
          <ul className="grid grid-cols-[1fr_4fr_1fr_3fr_1fr] items-center text-center bg-gray-200 h-12 border-[1px] border-b-black">
            <li>번호</li>
            <li>제목</li>
            <li>작성자</li>
            <li>작성일</li>
            <li>조회수</li>
          </ul>
          {content.map(({ id, title, user, createdAt, count }, idx) => (
            <ul
              key={idx}
              className="grid grid-cols-[1fr_4fr_1fr_3fr_1fr] items-center text-center h-12 border-[1px] border-b-black"
            >
              <li>{idx + 1}</li>
              <li
                className="cursor-pointer"
                onClick={(e) => {
                  showDetail(id);
                }}
              >
                {title}
              </li>
              <li>{user}</li>
              <li>{createdAt}</li>
              <li>{count}</li>
            </ul>
          ))}
        </div>

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
        <Pagination setPage={setPage} contentCount={contentCount} />
        <div className="flex mt-4">
          <Search />
          <button
            onClick={writePost}
            className="cursor-pointer bg-gray-200 p-3 rounded-lg mt-4 ml-4 flex items-center justify-center"
          >
            글쓰기
          </button>
        </div>
      </div>
    </>
  );
};

export default Board;
