"use client";

import Header from "@/components/header";
import { useState } from "react";

export default function Assignment3() {
  const [count, setCount] = useState(0);

  const upCount = () => {
    setCount(count + 1);
  };

  const downCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Header title={"카운터 만들기"} hasBack={true} />
      <div>
        <h1>{count}</h1>
        <button onClick={upCount}>증가</button>
        {count > 0 ? (
          <button onClick={downCount}>감소</button>
        ) : (
          <button>감소</button>
        )}
      </div>
    </>
  );
}
