import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState("Click the button below for Advice");

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const { advice } = response.data.slip;
      return advice;
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async () => {
    const response = await fetchData();
    if (response) {
      setData(response);
    } else {
      console.log("error");
    }

  };

  return (
    <div>
      <div className="App">
        <div className="card">
          <h1 className="heading">{data}</h1>
        </div>
          <button className="button-23" onClick={handleClick}>Give me Advice</button>
      </div>
    </div>
  );
}

export default App;
