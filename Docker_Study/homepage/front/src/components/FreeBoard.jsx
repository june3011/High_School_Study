import axios from "axios";
import { useEffect, useRef } from "react";

const FreeBoard = ({ a, b }) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const writerRef = useRef();

  const doSave = () => {
    axios
      .post("http://localhost:5000/freeboard/insert", {
        title: titleRef.current.value,
        content: contentRef.current.value,
        writer: writerRef.current.value,
      })
      .then((result) => console.log(result));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/freeboard/list")
      .then((result) => console.log(result.data));
  }, []);
  return (
    <>
      <h1>FreeBoard</h1>
      <label>title</label>
      <input type="text" ref={titleRef} />
      <br />
      <label>content</label>
      <input type="text" ref={contentRef} />
      <br />
      <label>writer</label>
      <input type="text" ref={writerRef} />
      <br />
      <button onClick={doSave}>저장</button>
    </>
  );
};

export default FreeBoard;
