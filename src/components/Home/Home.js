import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import styles from './Home.module.css';
import { CreditCard, ScreenLockPortrait, VpnKey } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from '../../store/action';

const Home = (props) => {
  const { t, i18n } = useTranslation();
  const history = useHistory();

  const changeLang = (e, lang) => {
    e.preventDefault();
    i18n.changeLanguage(lang);
  };

  const getMenu = () => {
    if (props.isLoggedIn) {
      return (
        <Fragment>
          <div className={styles.buttonWrapper}>
            <Button onClick={() => history.push('/otp')} startIcon={<ScreenLockPortrait/>} fullWidth size="large" variant="contained" color="primary">
              {t('OTP')}
            </Button>
          </div>
          <div className={styles.buttonWrapper}>
            <Button onClick={() => history.push('/card')} startIcon={<CreditCard/>} fullWidth size="large" variant="contained" color="primary">
              {t('CARD')}
            </Button>
          </div>
          <div className={styles.buttonWrapper}>
            <Button onClick={props.logout} startIcon={<VpnKey/>} fullWidth size="large" variant="contained" color="primary">
              {t('LOGOUT')}
            </Button>
          </div>
        </Fragment>
      );
    }
    else {
      return (
        <Fragment>
          <div className={styles.buttonWrapper}>
            <Button onClick={() => history.push('/login')} startIcon={<VpnKey/>} fullWidth size="large" variant="contained" color="primary">
              {t('LOGIN')}
            </Button>
          </div>
        </Fragment>
      );
    }
  }

  return (
    <div>
      { getMenu() }
      <div className={styles.languageWrapper}>
        Language: <a href='/' onClick={(e) => changeLang(e, 'en')}>EN</a> / <a href='/' onClick={(e) => changeLang(e, 'th')}>TH</a>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.token
  }
}

export default connect(mapStateToProps, { logout })(Home);