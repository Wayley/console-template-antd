import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";



export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h3>Index</h3>
        </Route>
        <Route path="/public">
          <h3>Public</h3>
        </Route>
        <Route path="/login">
          <h3>Login</h3>
        </Route>
        <PrivateRoute path="/protected">
          <h3>Protected</h3>
        </PrivateRoute>
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
