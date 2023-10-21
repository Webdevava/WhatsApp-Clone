import React from "react";
import "./App.css";
import ChatBox from "./components/ChatBox";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <Contact />
      <ChatBox />
    </div>
  );
};

export default App;
