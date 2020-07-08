import React from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import "./App.css";

const App = () => {
  return (
    <>
      <Route render={({ location }) => {
        return (
          <div className="page-container">
            <TransitionGroup component={null}>
              <CSSTransition
                timeout={500}
                classNames="page"
                key={location.pathname}
              >
                <Switch location={location}>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/dashboard" component={Dashboard} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        );
      }}
      />
    </>
  );
}
export default App;