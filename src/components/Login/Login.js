import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import styles from './Login.module.css';

import { login } from '../../store/action';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

const Login = (props) => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  return (
    <div className={styles.container}>
      <Button onClick={() => props.login(history, from)} variant="contained" color="primary">{t('LOGIN')}</Button>
    </div>
  )
}

export default connect(null, { login })(Login);