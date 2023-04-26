import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Div100, Div50 } from "./Div100";

const FreeBoard = ({ a, b }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const writerRef = useRef();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const doSave = () => {
    axios
      .post("http://localhost:5000/freeboard/insert", {
        title: titleRef.current.value,
        content: contentRef.current.value,
        writer: writerRef.current.value,
      })
      .then((result) => console.log(result));
  };

  const doSearch = (e) => {
    setText(e.current.value);
    axios
      .get("http://localhost:5000/freeboard/list", { text: e.target.value })
      .then((result) => setData(result.data));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/freeboard/list")
      .then((result) => console.log(result.data));
  }, []);
  return (
    <>
      <h1>FreeBoard</h1>
      <Div100>
        <Div50>
          <label>title</label>
          <input type="text" ref={titleRef} />
          <br />
          <label>content</label>
          <input type="text" ref={contentRef} />
          <br />
          <label>writer</label>
          <input type="text" ref={writerRef} />
          <br />
          <Button onClick={doSave}>저장</Button>
        </Div50>
        <Div50>
          <h1>list화면</h1>
          <input value={text} onChange={setText}></input>
        </Div50>
      </Div100>
    </>
  );
};

export default FreeBoard;
