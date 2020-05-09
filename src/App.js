import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "./components/nav/index";
import ReactRouter from "./components/reference/ReactRouter/index";
import ReactSpring from "./components/reference/ReactSpring/index";
import Hooks from "./components/reference/Hooks/index";
import Context from "./components/reference/Context/index";
import FetchData from "./components/reference/FetchData/index";
import Forms from "./components/reference/Forms/index";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div style={{ marginTop: "100px", marginRight: "60px" }}>
          <Nav />
        </div>
        <div style={{ width: "100%" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            <h1 style={{ marginBottom: "30px" }}>React Starter</h1>
          </Link>

          <Switch>
            <Route path="/react-router">
              <ReactRouter />
            </Route>
            <Route path="/react-spring">
              <ReactSpring />
            </Route>
            <Route path="/hooks">
              <Hooks />
            </Route>
            <Route path="/context">
              <Context />
            </Route>
            <Route path="/forms">
              <Forms />
            </Route>
            <Route path="/fetch-data">
              <FetchData />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
