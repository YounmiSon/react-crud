// 모듈
const express = require("express");
// 허용되지 않은 도메인은 접속할 수 없게 설정
const cors = require("cors");
const { sequelize, content } = require("./public/");

// express 호출
const app = express();
// 브라우저 보안 정책 때문에 해당 url만 접속을 허용해준다
// 서로 다른 도메인/포트 서버로 요청했을 때 허용해주는 옵션
// "http://localhost:3000" 도메인 허용함
app.use(cors({ origin: "http://localhost:3000" }));

// 객체값 전달 요청을 허용해줌 객체 읽어오고 보내고 둘다 객체로 가능하게 해줌
// express.urlencoded : 이거는 xml 해석해줌
app.use(express.json());

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("잘 열림");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/board/write", (req, res) => {
  // console.log(req.body);
  const { title, text, user } = req.body;
  // 글 등록했을 때는 조회수 무조건 0으로 준다
  content.create({ title, text, user, count: 0 });
  res.send(req.body);
});

// app.get("/board", (req, res) => {
//   // content 테이블에 create 함수로 편하게 추가
//   // 처음에 여기서 되는지 확인하고 만들기
//   content.create({ title: "나는 테스트", user: "테스트 만두", count: 0 });
//   res.send();
// });

app.post("/board", async (req, res) => {
  const { index, count } = req.body;
  const contents = await content.findAll({
    // 몇 개를 자를지
    offset: index * count,
    // 몇 개를 가져올지
    limit: 10,
  });
  res.send(contents);
});

// params로 하면 get 방식사용
// post 방식으로 하면 index를 보내서 얘랑 맞는 애를 제거함
app.post("/delContent", (req, res) => {
  const { num } = req.body;
  content.destroy({ where: { id: num } });
  res.send();
});

app.listen(8000, () => {
  console.log("서버 열림");
});
