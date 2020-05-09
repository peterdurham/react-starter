import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import OnChange from "./OnChange";
import OnSubmit from "./OnSubmit";

export default function Forms() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Forms Topics</h2>

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
      {topicId === "on-change" && <OnChange />}
      {topicId === "on-submit" && <OnSubmit />}
    </div>
  );
}
