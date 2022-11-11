import React from "react";

const Search = () => {
  return (
    <div className="border-[1px] border-gray w-[400px] flex justify-center items-center p-6 rounded-md mt-4">
      <select className="mr-4">
        <option>제목</option>
        <option>작성자</option>
        <option>내용</option>
      </select>
      <input className="border-[1px] border-black" />
      <button className="bg-gray-200 w-12 h-8 ml-4 rounded-md">검색</button>
    </div>
  );
};

export default Search;
