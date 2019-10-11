import React, { useState, useEffect } from "react";
import useThrottleTerm from "./useThrottleTerm";

const ChildInputComponent = ({ parentValue, setParentValue }) => {
  const [inputValue, setInputValue] = useState("");
  const throttledChildInputValue = useThrottleTerm(inputValue);
  useEffect(() => {
    setParentValue(throttledChildInputValue);
  }, [setParentValue, throttledChildInputValue]);
  return (
    <div
      style={{
        border: "1px solid black",
        width: "20rem",
        margin: "auto",
        padding: "1rem"
      }}
    >
      <p>Child Input Value:</p>
      <p>{inputValue}</p>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
    </div>
  );
};

export default ChildInputComponent;
