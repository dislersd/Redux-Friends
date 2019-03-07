import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route path='/login' component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
