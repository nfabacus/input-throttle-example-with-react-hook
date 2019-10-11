import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import ChildInputComponent from "./ChildInputComponent";

import "./styles.css";

function App() {
  const [parentValue, setParentValue] = useState("");

  return (
    <div className="App">
      <h1>Input Throttle Example with React Hook</h1>
      <p>
        You can see that parent value is throttled (updated 0.5 seconds later)
      </p>
      <p>
        This is particularly useful when the parent component has a large data
        and you do not want to update immediately every time input value is
        changed (triggering the change of the whole parent component).
      </p>
      <p>For example:</p>
      <ul>
        <li>
          When filtering (thus rerendering) a large list as you type fiter term.
        </li>
        <li>
          When dynamically calling api for the term search result (as you do not
          want to call api for every key troke)
        </li>
      </ul>
      <p>Parent Value:</p>
      <p>{parentValue}</p>
      <ChildInputComponent
        parentValue={parentValue}
        setParentValue={setParentValue}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
