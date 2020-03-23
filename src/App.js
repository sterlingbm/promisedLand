import React from "react";
import "./styles.css";
import Login from "./Login";

export default function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />

      <h1>Hello CodeSandbox</h1>
      <Login />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
