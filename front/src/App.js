import { Routes, Route } from "react-router-dom";
import { Main, Login, Join, Board, Write, ContentDetail, Edit } from "./pages";
import { Header, Nav } from "./components";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useDispatch } from "react-redux";

function App() {
  // const dispatch = useDispatch();
  // dispatch 어떻게 작동하는지 확인해보기 위해서 임의로 만들었음
  // const onClicks = () => {
  //   dispatch({ type: "CREATE", payload: "gg" });
  // };

  // 전체 글 갯수 state
  const [contentCount, setcontentCount] = useState();

  // useEffect 쓸건데 async 써야하면 밖에서 함수를 정의한다음에 가져다 쓴다
  async function getContent() {
    const count = await axios.get("http://localhost:8000/getContentCount");
    // console.log(count);
    // {data: 22, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
    // 위와 같이 나오니까 .data해서 필요한 정보(=글 갯수)만 가져온다
    setcontentCount(count.data);
  }

  useEffect(() => {
    getContent();
  }, []);

  useEffect(() => {
    // console.log(contentCount);
  }, [contentCount]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* 로그인, 회원가입 */}
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        {/*게시판 관련*/}
        {/*페이지 네이션에서 쓸거 여기서 props로 전달*/}
        <Route path="/board" element={<Board contentCount={contentCount} />} />
        <Route path="/board/write" element={<Write />} />
        <Route path="/board/:id" element={<ContentDetail />} />
        <Route path="/board/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
