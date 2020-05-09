import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseContext from "./UseContext";
import UseRef from "./UseRef";
import UseReducer from "./UseReducer";
import UseMemo from "./UseMemo";
import CustomHooks from "./CustomHooks";

export default function Hooks() {
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
      {topicId === "use-state" && <UseState />}
      {topicId === "use-effect" && <UseEffect />}
      {topicId === "use-context" && <UseContext />}
      {topicId === "use-ref" && <UseRef />}
      {topicId === "use-reducer" && <UseReducer />}
      {topicId === "use-memo" && <UseMemo />}
      {topicId === "custom-hooks" && <CustomHooks />}
    </div>
  );
}
