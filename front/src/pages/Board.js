import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Pagination, Search } from "../components";
// 액션 함수 import
import { GetContent, GetContentDetail } from "../modules/board";
// App.js에서 props로 글 갯수를 받아옴
const Board = ({ contentCount }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  // 리듀서에서 보낸 content : payload.data
  const content = useSelector((state) => state.board.content);

  // 눌렀을 때 보여줄 페이지가 있는 인덱스 번호 1,2,3 중.., 초기값은 0
  const [page, setPage] = useState(0);

  // GetContent(여기에 위의 state값을 전달,10)
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
          {/* {content.map((el, idx) => (
            <ul
              key={idx}
              className="grid grid-cols-[1fr_4fr_1fr_3fr_1fr] items-center text-center h-12 border-[1px] border-b-black"
            >
              <li>{idx + 1}</li>
              <li
                className="cursor-pointer"
                onClick={(e) => {
                  showDetail(idx);
                }}
              >
                {el.title}
              </li>
              <li>{el.user}</li>
              <li>{el.createdAt}</li>
              <li>{el.count}</li>
            </ul>
          ))} */}
          {content.map(({ id, title, user, createdAt, count }, idx) => (
            <ul
              key={idx}
              className="grid grid-cols-[1fr_4fr_1fr_3fr_1fr] items-center text-center h-12 border-[1px] border-b-black"
            >
              {/* 첫번째 페이지에서는 idx + 1로 처리하고 그 이상이면 * 10 하고 idx + 1
              그냥 id나 idx 등으로 찍었을 때 어케 나오는지 보고 계산해서 잘 쓰자... */}
              <li>{page === 0 ? idx + 1 : page * 10 + idx + 1}</li>
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
