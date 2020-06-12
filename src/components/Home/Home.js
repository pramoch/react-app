import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './Home.module.css';
import { CreditCard, ScreenLockPortrait } from '@material-ui/icons';

const Home = () => {
  return (
    <div>
      <div className={styles.buttonWrapper}>
        <Button startIcon={<ScreenLockPortrait/>} fullWidth size="large" variant="contained" color="primary">
          OTP
        </Button>
      </div>
      <div className={styles.buttonWrapper}>
        <Button startIcon={<CreditCard/>} fullWidth size="large" variant="contained" color="primary">
          Card
        </Button>
      </div>
    </div>
  )
}

export default Home;