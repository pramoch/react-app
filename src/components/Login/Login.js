import React from 'react';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import styles from './Login.module.css';

import { login } from '../../store/action';
import { connect } from "react-redux";

const Login = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Button onClick={props.login} variant="contained" color="primary">{t('LOGIN')}</Button>
    </div>
  )
}

export default connect(null, { login })(Login);