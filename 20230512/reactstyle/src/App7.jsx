import React from "react";
import Question from "./Components/Question";
import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <nav className={styles.box}>
        <ul>
          <li id="detail" className={styles.txt}>
            상세정보
          </li>
          <li id="qa" className={styles.txt}>
            Q&A
          </li>
          <li id="review" className={styles.txt}>
            Review
          </li>
        </ul>
      </nav>
      <Question />
    </>
  );
};

export default App;
