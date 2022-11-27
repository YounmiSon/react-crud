import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (search === null || search === "") {
    }
  };
  return (
    <div className="border-[1px] border-gray w-[400px] flex justify-center items-center p-6 rounded-md mt-4">
      <select className="mr-4">
        <option>제목</option>
        <option>작성자</option>
        <option>내용</option>
      </select>
      <form onSubmit={(e) => onSearch(e)}>
        <input
          className="border-[1px] border-black"
          onChange={searchHandler}
          value={search}
        />
        <button className="bg-gray-200 w-12 h-8 ml-4 rounded-md">검색</button>
      </form>
    </div>
  );
};

export default Search;
