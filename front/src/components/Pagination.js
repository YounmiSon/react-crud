import React, { useEffect, useState } from "react";

const Pagination = ({ contentCount, setPage }) => {
  const [count, setcount] = useState();

  useEffect(() => {
    // temp의 값이 전체 글 갯수 를 10으로 나누고 올림한 값
    const temp = Math.ceil(contentCount / 10);
    // 처음에 안누르면? 빈값이니까 눌러서 undefined가 아니게 되면 그때 값을 불러오게 된다
    if (contentCount != undefined) {
      // 아까 temp의 값을 새로운 배열로 만들어서 넣어준다
      // fill은 배열을 해당 value값으로 채워주는 함수, 새로 만들어져 비어있는 배열을 0으로 채워준다
      const arr = new Array(temp).fill(0);
      // fill 쓰면 이런식으로 나옴
      // console.log(arr); //(2) [0, 0]
      setcount(arr);
    }
  }, [contentCount]);

  useEffect(() => {
    // console.log(count);
  }, [count]);

  //
  const changePage = (id) => {
    setPage(id);
  };
  return (
    <div className="mt-4">
      <ul className="flex cursor-pointer">
        {/* <li className="px-2">이전</li> */}
        {/*undefined가 아니면 map 돌리고 undefined이면 null*/}
        {count != undefined
          ? count.map((el, idx) => (
              <li
                key={idx}
                onClick={() => {
                  changePage(idx);
                }}
                className="px-2"
              >
                {idx + 1}
              </li>
            ))
          : null}
        {/* <li className="px-2">다음</li> */}
      </ul>
    </div>
  );
};

export default Pagination;
