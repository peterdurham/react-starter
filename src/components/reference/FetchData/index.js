import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import Axios from "./Axios";
import Fetch from "./Fetch";

export default function FetchData() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Context Topics</h2>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div className="content-box">
      {topicId === "fetch" && <Fetch />}
      {topicId === "axios" && <Axios />}
    </div>
  );
}
