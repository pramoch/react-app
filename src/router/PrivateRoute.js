import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ children, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({location}) => {
        if (isLoggedIn) {
          return children;
        }
        else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          );
        }
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.token
  }
}

export default connect(mapStateToProps)(PrivateRoute);