import "./App.css";
import Viewer from "./component/Viewer.js";
import Controller from "./component/Controller.js";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const [text, setText] = useState("");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("count 업데이트: ", count, text);
  }, [count, text]);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
