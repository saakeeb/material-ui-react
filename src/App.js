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
import FriendRequest from './Component/FriendRequest/FriendRequest';
import Notification from './Component/Notification/Notification';
import Message from './Message/Message';

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
          <Route path="/friendRequest">
            <FriendRequest></FriendRequest>
          </Route>
          <Route path="/notification">
            <Notification></Notification>
          </Route>
          <Route path="/message">
            <Message></Message>
          </Route>
          <Route path="/users">
            <h4 style={{marginTop: '7.5rem'}}>Users details coming soon</h4>
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
