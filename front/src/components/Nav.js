import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex justify-between  items-center w-screen h-20 bg-gray-200">
        <div className="ml-8">
          <Link to="/">( ͡° ͜ʖ ͡°)</Link>
        </div>
        <div className="mr-8">
          <span className="p-4">
            <Link to="/login">로그인</Link>
          </span>
          <span className="p-4">
            <Link to="/join">회원가입</Link>
          </span>
          <span className="p-4">
            <Link to="/board">문의게시판</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Nav;
