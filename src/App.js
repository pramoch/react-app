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
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <Container maxWidth="xs" className={styles.container}>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/otp">OTP</Link>
            </li>
            <li>
              <Link to="/card">card</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/otp">
            <OTP />
          </Route>
          <Route path="/card">
            <Card />
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
