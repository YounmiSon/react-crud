import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const userId = useRef();
  const userPw = useRef();
  const confirmPw = useRef();

  const dispatch = useDispatch();
  const nav = useNavigate();

  const signUp = () => {
    if (userId.current.value === "") {
      alert("아이디를 입력해주세요");
      return;
    }
    if (userPw.current.value === "") {
      alert("비밀번호를 입력해주세요");
      return;
    }
    if (confirmPw.current.value !== userPw.current.value) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    dispatch(
      userId.current.value,
      userPw.current.value,
      confirmPw.current.value,
      nav
    );
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <label>아이디</label>
      <input ref={userId} className="borer-black border-[2px] w-40"></input>
      <br />
      <label>비밀번호</label>
      <input ref={userPw} className="borer-black border-[2px] w-40"></input>
      <br />
      <label>비밀번호 확인</label>
      <input ref={confirmPw} className="borer-black border-[2px] w-40"></input>
      <br />
      <input onClick={signUp} type="submit" value="회원가입" />
    </div>
  );
};

export default Join;
