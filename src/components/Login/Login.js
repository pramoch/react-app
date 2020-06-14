import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import styles from './Login.module.css';

import { login } from '../../store/action';
import { connect } from 'react-redux';
import { useHistory, useLocation, Redirect } from 'react-router-dom';

const Login = (props) => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  if (props.isLoggedIn) {
    return <Redirect to={from.pathname} />
  }
  else {
    return (
      <div className={styles.container}>
        <Button onClick={() => props.login(history, from)} variant="contained" color="primary">{t('LOGIN')}</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.token
  }
}

export default connect(mapStateToProps, { login })(Login);