import React from "react";
import ReactDOM from "react-dom";
import GameOfLife from "./app/GameOfLife";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000000;
    margin: 10px;
    font-family: sans-serif;
  }
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <GameOfLife />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
