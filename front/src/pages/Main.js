import React from "react";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const nav = useNavigate();
  return (
    <div className="flex items-center justify-center mt-8">
      <button
        className="cursor-pointer bg-gray-200 p-3 rounded-lg m-4"
        onClick={() => {
          nav("/login");
        }}
      >
        로그인
      </button>
      <button
        className="cursor-pointer bg-gray-200 p-3 rounded-lg"
        onClick={() => {
          nav("/join");
        }}
      >
        회원가입
      </button>
    </div>
  );
};

export default Main;
