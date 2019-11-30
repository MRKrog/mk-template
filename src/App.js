import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "./redux/actions";

import routes from "./routes";
import { Switch, Redirect, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
      {
        routes.map((prop, key) => {
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.to} key={key} />;
          return (
            <Route
              path={prop.path}
              key={key}
              render={props => <prop.component {...props} />}
            />
          );
        })
      }
      </Switch>
    </div>
  );
}

export default App;
