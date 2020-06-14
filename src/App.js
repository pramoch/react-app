import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Home from './components/Home/Home';
import Card from './components/Card/Card';
import OTP from './components/OTP/OTP';
import Login from './components/Login/Login';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <Container maxWidth="xs" className={styles.container}>
        <Switch>
          <Route path="/otp">
            <OTP />
          </Route>
          <Route path="/card">
            <Card />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
