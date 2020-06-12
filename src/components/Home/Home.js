import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './Home.module.css';
import { CreditCard, ScreenLockPortrait } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (e, lang) => {
    e.preventDefault();
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <div className={styles.buttonWrapper}>
        <Button startIcon={<ScreenLockPortrait/>} fullWidth size="large" variant="contained" color="primary">
          {t('OTP')}
        </Button>
      </div>
      <div className={styles.buttonWrapper}>
        <Button startIcon={<CreditCard/>} fullWidth size="large" variant="contained" color="primary">
          {t('Card')}
        </Button>
      </div>
      <div className={styles.languageWrapper}>
        Language: <a href='/' onClick={(e) => changeLang(e, 'en')}>EN</a> / <a href='/' onClick={(e) => changeLang(e, 'th')}>TH</a>
      </div>
    </div>
  )
}

export default Home;