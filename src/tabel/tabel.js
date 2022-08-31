import { useState } from "react";
import "./tabel.css";

export default function Tabel(props) {
  const { list, length = 1 } = props;
  const width = `${(1 / length) * 100}%`;

  const [currentNum, setCurrentNum] = useState(0);
  const [startTime, setStartTime] = useState(new Date());
  const [cost, setCost] = useState(0);
  const [errorTip, setErrorTip] = useState(null);

  const onClickCell = (item) => {
    const targetNum = currentNum >= props.list.length ? 1 : currentNum + 1;
    console.log("点击了:", item);
    if (item !== targetNum) {
      setErrorTip(`当前应当点击：${targetNum}`);
    } else {
      setErrorTip(null);
      setCurrentNum(item);
      if (item === list.length) {
        const cost = new Date().getTime() - startTime.getTime();
        setCost(cost / 1000);
      }
    }

    if (targetNum === 1) {
      console.log("开始");
      setStartTime(new Date());
    }
  };
  return (
    <div className="container">
      <h1> 舒尔特表格 </h1>
      <div style={{ opacity: cost ? 1 : 0 }}>
        本次用时 : {cost.toFixed(1)}秒
      </div>
      <div style={{ color: "red", opacity: errorTip ? 1 : 0 }}>
        {errorTip}。
      </div>
      <div className="table">
        {list.map((item, index) => {
          return (
            <div
              key={item}
              className="cell"
              onClick={() => onClickCell(item)}
              style={{
                width,
                height: width,
                color: index % 2 ? "white" : " black",
                backgroundColor: index % 2 ? "black" : " white"
              }}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>

      <h5> 评测结果 以下数据以 5x5 为参考 </h5>
      <p>7—12岁 26"以上为优秀 42"属于中等水平 50"则问题较大</p>
      <p>12—17岁 16 "以上为优良 26"属于中等水平 36"则问题较大</p>
      <p> 18岁及以上成年人 最快可到达 8 "的程度 20"为中等程度 </p>
    </div>
  );
}
