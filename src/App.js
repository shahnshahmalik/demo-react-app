import React from "react";
import Landing from './Layouts/landing';
import Player from './Components/player/player';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./style.css";

export default function App() {
  return (
    <Router>
      <Switch>
          <Route path="/about">
            <Landing />
          </Route>
          <Route path="/topics">
            <Landing />
          </Route>
          <Route path="/">
            <Player />
          </Route>
        </Switch>
    </Router>
    // <Landing />
  );
}
