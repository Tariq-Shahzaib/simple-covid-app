import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./Header";
import Footer from "./Footer";
import Main from "./Table.js";
ReactDOM.render(
  <div>
    <NavBar />

    <Main />

    <Footer />
  </div>,
  document.getElementById("root")
);
