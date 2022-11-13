import React, { useEffect, useState } from "react";

const Pagination = ({ contentCount, setPage }) => {
  const [count, setcount] = useState();

  // 페이지 번호 목록? [1,2,3,4,...] 그리는 거
  useEffect(() => {
    // props로 받아온 값 처리할거임
    // temp라는 임의의 값은 전체 글 갯수를 10으로 나누고 올림한 값이다
    const temp = Math.ceil(contentCount / 10);
    // 처음에 데이터를 가져오기 전에는 빈값이니까 undefined가 되고
    // undefined가 아니게 되면 그때 값을 불러오게 된다
    if (contentCount != undefined) {
      // 아까 temp의 값을 새로운 배열로 만들어서 넣어준다
      // fill은 배열을 해당 value값으로 채워주는 함수, 새로 만들어져 비어있는 배열을 0으로 채워준다
      const arr = new Array(temp).fill(0);
      // fill 쓰면 이런식으로 나옴
      // console.log(arr); //(2) [0, 0]
      // 여기서 갯수 length 만큼의 요소를 가진 배열이 생기는데 이걸 인덱스로 돌면서 페이지를 그리고 가져올거임
      // 그니까 fill은 아무거나 넣어도 상관이 없다
      setcount(arr);
    }
  }, [contentCount]);

  useEffect(() => {
    console.log(count);
  }, [count]);

  // setPage로 페이지번호(idx)를 받아와서 처리한다
  const changePage = (a) => {
    setPage(a);
  };

  return (
    <div className="mt-4">
      <ul className="flex cursor-pointer">
        <li className="px-2">이전</li>
        {/*undefined가 아니면 map 돌리고 undefined이면 null*/}
        {count !== undefined
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
        <li className="px-2">다음</li>
      </ul>
    </div>
  );
};

export default Pagination;
