import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FreeBoard from "./components/FreeBoard";

function App() {
  const [myResult, setMyResult] = useState("");
  const [resText, setResText] = useState("없음");
  useEffect(() => {
    axios
      .get(`http://localhost:5000${myResult}`)
      .then((result) => setResText(result.data));
  }, [myResult]);
  return (
    <div className="App">
      <FreeBoard a="10" b="20" />
      <h1>Test</h1>
      <h2>{myResult}</h2>
      <h2>통신결과 {resText}</h2>
      <button onClick={() => setMyResult("/")}>/경로</button>
      <button onClick={() => setMyResult("/json")}>/json경로</button>
    </div>
  );
}

export default App;
