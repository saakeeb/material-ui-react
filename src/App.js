import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './Component/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user/:postIdNum">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/*">
            <h3>Not Found</h3>
            <h5>404 Error...</h5>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
