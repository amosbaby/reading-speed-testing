import { useEffect, useState } from "react";
import "./styles.css";
import Tabel from "./tabel/tabel";

export default function App() {
  const [length, setLength] = useState(5);

  const createList = (length) =>
    Array(length)
      .fill(1)
      .map((item, index) => item + index)
      .sort(() => (Math.random() > 0.5 ? 1 : -1));
  const [list, setList] = useState(createList(length));

  const restart = () => {
    setList(createList(length * length));
  };

  useEffect(() => {
    restart();
  }, [length]);

  const options = [2, 3, 4, 5, 6].map((value) => {
    return (
      <option style={{ fontSize: "14px" }} value={value} key={value}>
        {value} x {value}{" "}
      </option>
    );
  });

  const changeOption = (event) => {
    setLength(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <select value={length} onChange={(value) => changeOption(value)}>
          {options}
        </select>
        <button onClick={() => restart()}> 重新开始 </button>
      </div>
      <Tabel list={list} length={length} />
    </div>
  );
}
