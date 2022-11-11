import { Routes, Route } from "react-router-dom";
import { Main, Login, Join, Board, Write, ContentDetail, Edit } from "./pages";
import { Header, Nav } from "./components";
// import { useDispatch } from "react-redux";

function App() {
  // const dispatch = useDispatch();
  // dispatch 어떻게 작동하는지 확인해보기 위해서 임의로 만들었음
  // const onClicks = () => {
  //   dispatch({ type: "CREATE", payload: "gg" });
  // };
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* 로그인, 회원가입 */}
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        {/*게시판 관련*/}
        <Route path="/board" element={<Board />} />
        <Route path="/board/write" element={<Write />} />
        <Route path="/board/:id" element={<ContentDetail />} />
        <Route path="/board/:id/edit" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
