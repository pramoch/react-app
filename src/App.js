import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Home from './components/Home/Home';
import Card from './components/Card/Card';
import OTP from './components/OTP/OTP';
import Login from './components/Login/Login';
import styles from './App.module.css';
import PrivateRoute from './router/PrivateRoute';

function App() {
  return (
    <Router>
      <Container maxWidth="xs" className={styles.container}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/otp">
            <OTP />
          </PrivateRoute>
          <PrivateRoute path="/card">
            <Card />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
