import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (count === 10) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [count]);

  return (
    <div className="App">
      <div className="card">
        <h1 className="card-title">Counter Sederhana Kel 07</h1>
        <div className="counter-container">
          <button className="counter-button" onClick={() => setCount(count - 1)}>
            -
          </button>
          <p className="counter-value">Counter: {count}</p>
          <button className="counter-button" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
        {showMessage && <p className="message">Counter telah mencapai nilai 10</p>}
      </div>
    </div>
  );
}

export default App;
