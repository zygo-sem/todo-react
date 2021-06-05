/* eslint react-hooks/exhaustive-deps:off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("saisyo");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUP = () => {
    setNum(num + 1);
  };

  const onClickInitialize = () => {
    setNum(0);
  };

  const onClickChange = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 == 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "green", fontSize: "15px" }}>こんにちは</h1>
      <ColorfulMessage color="blue">オゲンキデスカ。</ColorfulMessage>
      <ColorfulMessage color="pink"> 元気です。</ColorfulMessage>
      <button onClick={onClickCountUP}>CountUP</button>
      <button onClick={onClickInitialize}>Initialize</button>
      <p>{num}</p>
      <button onClick={onClickChange}>on/Off</button>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
