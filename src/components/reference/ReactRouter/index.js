import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import AnimatedTransitions from "./AnimatedTransitions";
import Basic from "./Basic";
import CustomLink from "./CustomLink";
import Nesting from "./Nesting";
import NoMatch404 from "./NoMatch404";
import PreventingTransitions from "./PreventingTransitions";
import QueryParameters from "./QueryParameters";
import Redirects from "./Redirects";
import RouteConfig from "./RouteConfig";
import Sidebar from "./Sidebar";
import URLParameters from "./URLParameters";

export default function ReactRouter() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>

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
      {topicId === "basic" && <Basic />}
      {topicId === "animated-transitions" && <AnimatedTransitions />}
      {topicId === "custom-link" && <CustomLink />}
      {topicId === "nesting" && <Nesting />}
      {topicId === "no-match-404" && <NoMatch404 />}
      {topicId === "preventing-transitions" && <PreventingTransitions />}
      {topicId === "query-parameters" && <QueryParameters />}
      {topicId === "redirects" && <Redirects />}
      {topicId === "route-config" && <RouteConfig />}
      {topicId === "sidebar" && <Sidebar />}
      {topicId === "url-parameters" && <URLParameters />}
    </div>
  );
}
