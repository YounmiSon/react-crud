import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="flex justify-center items-center w-screen h-20 bg-gray-200">
          <li className="p-4">
            <Link to="/login">로그인</Link>
          </li>
          <li className="p-4">
            <Link to="/join">회원가입</Link>
          </li>
          <li className="p-4">
            <Link to="/board">문의게시판</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
