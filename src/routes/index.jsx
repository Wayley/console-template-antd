import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from '../pages/login'


export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h3>Index</h3>
        </Route>
        <Route path="/public" exact>
          <h3>Public</h3>
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <PrivateRoute path="/car" exact>
          <Redirect to="/car/list" />
        </PrivateRoute>
        <PrivateRoute path="/car/list" exact>
          <h3>Car list</h3>
        </PrivateRoute>
        <PrivateRoute path="/car/add" exact>
          <h3>Car Add</h3>
        </PrivateRoute>
        <PrivateRoute path="/car/:id" exact>
          <h3>Car detail</h3>
        </PrivateRoute>
        <Route path="403">
          <h3>403</h3>
        </Route>
        <Route path="*">
          <h3>404</h3>
        </Route>
      </Switch>
    </Router>
  );
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
