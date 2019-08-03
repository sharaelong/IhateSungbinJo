import "typeface-roboto";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Main from "./main.jsx";

const App = () => (
    <>
        <CssBaseline />
        <Main />
    </>
);

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
