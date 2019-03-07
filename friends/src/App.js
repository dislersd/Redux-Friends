import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'
//
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Link to='/login'> <button>Login</button> </Link>
        <Link to='/friends-list'> <button>FriendsList</button> </Link>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/friends-list' component={FriendsList} />
        </div>
      </Router>
    );
  }
}

export default App;
