import React from "react";
import Landing from './Layouts/landing';
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
            <Landing />
          </Route>
        </Switch>
    </Router>
    // <Landing />
  );
}
