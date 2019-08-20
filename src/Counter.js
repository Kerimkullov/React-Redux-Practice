import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";
import Main from "./Main";

const Counter = props => (
  <LocalizeProvider>
    <Router>
      <Route path="/" component={Main} />
    </Router>
  </LocalizeProvider>
);

export default Counter;