const { useState } = React;

function MyHeader({ pageName, a }) {
  // const { pageName, a } = props
  // 이 안에 pagaName이라는 키로 값을 가져올수있음
  // 마찬가지로 a라는 키로 값을 가져올 수 있다.
  return (
    <>
      <h1>제목입니다. 이곳은 {pageName}입니다.</h1>
      <h2>부제목입니다. 이곳은 {pageName}입니다.</h2>
    </>
  );
}

// 1단계
// function MyHeader(props) {
//   return (
//     // JSX 식에는 부모 요소가 하나 있어야 합니다.
//     // 그래서 감싸줘야 함.
//     // <>에 아무것도 안 넣으면 React.Fragement로 인정한다.
//     <>
//       <h1>제목입니다. 이곳은 {props.pageName}입니다.</h1>
//       <h2>부제목입니다. 이곳은 {props.pageName}입니다.</h2>
//     </>
//   );
// }

// 2단계
// // props 구조분해할당으로 하기
// // 객체는 구조분해 할당이 가능하다.
// function MyHeader(props) {
//   const { pageName, a } = props;
//   // props는 오브젝트. 이 안에 pageName이라는 키로 값을 가져올 수 있다.
//   // 마찬가지로 a라는 키로 값을 가져올 수 있다.
//   return (
//     <>
//       <h1>제목입니다. 이곳은 {props.pageName}입니다.</h1>
//       <h2>부제목입니다. 이곳은 {props.pageName}입니다.</h2>
//     </>
//   );
// }

// pageName="홈페이지" 이거는 아래처럼나온다
//
// props = {
//   pageName:"홈페이지"
//   a:"a"
// }

// 아래의 map과 비교해보기.
const Memo = ({ title, idx }) => {
  return (
    <>
      <div>{idx + 1}번 메모</div>
      <article>{title}</article>
    </>
  );
};

// 아래에서 map을 한 줄로 만들어 주기 위해서.
function MemoList({ titles }) {
  return (
    <div>
      <h1>메모장 리스트 제목</h1>
      {titles.map((title, idx) => {
        return <Memo title={title} idx={idx} />;
      })}
      ;
    </div>
  );
}

// HopmePage를 컴포넌트라고 부른다.
function HomePage(params) {
  // [mwmo, setMemo] : 스프레드 문법 = 펼쳐서 넣기
  const [memo, setMemo] = useState("");
  const [memos, setMemos] = useState([]);
  // setState: 화면이 바뀌었을 때, 화면에 다시 그려주는 함수
  const onChangeHandler = (e) => {
    setMemo(e.target.value);
  };
  const onClickButtonHandler = () => {
    const newTitles = [...memos, memo];
    setMemos(newTitles);
  };
  // jsx 안에서 변수를 사용하려면 중괄호로 감싸야 한다.
  // 중괄호 안에 들어가는 건 무조건 값이어야 한다. map, filter 등 마지막으로 return 돼서 값을 남겨주는 것.
  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={onClickButtonHandler}>버튼</button>
      <br></br>
      {/* 
      1단계:
      {titles.map((title, idx) => {
        return (
          <>
            <div>{idx + 1}번 메모</div>
            <article>{title}</article>
          </>
        );
      })} */}

      {/* 
      2단계:
      {titles.map((title, idx) => {
        return <Memo title={title} idx={idx} />;
      })} */}

      <MemoList titles={memos} />
    </div>
  );
}

// 1단계
// const root = document.getElementById("root");
// ReactDOM.render(<h1>제목입니다.</h1>, root); //ReactDOM.render(내용,어디에 렌더할 거?);

// 2단계
// function App() {
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<h1>제목입니다.</h1>);
// }

function App() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // const header = document.createElement("h1");
  // header.innerText = "제목입니다.";
  // root.appendChild(header);
  root.render(<Hompage />);
}

App();
