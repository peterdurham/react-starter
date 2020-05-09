import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import CreateContext from "./CreateContext";
import UseContext from "./UseContext";

export default function Context() {
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
      {/* <h3>{topicId}</h3> */}
      {topicId === "create-context" && <CreateContext />}
      {topicId === "use-context" && <UseContext />}
    </div>
  );
}
