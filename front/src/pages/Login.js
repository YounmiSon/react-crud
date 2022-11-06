import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <label>아이디</label>
      <input className="borer-black border-[2px] w-40"></input>
      <br />
      <label>비밀번호</label>
      <input className="borer-black border-[2px] w-40"></input>
      <br />
      <input type="submit" value="로그인" />
    </div>
  );
};

export default Login;
