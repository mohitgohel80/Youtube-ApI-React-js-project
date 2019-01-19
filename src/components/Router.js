import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import About from "./About";

const RouterList = () => {
  return (
    <Router>
      <div>
       <Route path="/" exact component={App} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default RouterList;
