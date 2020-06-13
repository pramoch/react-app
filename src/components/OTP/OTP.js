import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, TextField, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './OTP.module.css';

const useStyles = makeStyles({
  input: {
    fontSize: 12
  }
});

const OTP = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [mobileNumber, setMobileNumber] = useState('');

  const onKeyDown = (event) => {
    const isAllowedKey = event.ctrlKey || event.altKey
    || (47 < event.keyCode && event.keyCode < 58 && event.shiftKey === false)
    || (95 < event.keyCode && event.keyCode < 106)
    || (event.keyCode === 8) || (event.keyCode === 9)
    || (event.keyCode > 34 && event.keyCode < 40)
    || (event.keyCode === 46)

    if (!isAllowedKey) {
      event.preventDefault();
    }
  };

  return (
    <Box fontSize={12}>
      <form>
        <div className={styles.inputWrapper}>
          <div>{ t('ENTER_MOBILE_NUMBER') }</div>
          <Box display="flex" alignItems="center">
            <Box flex="1">
              <TextField
                InputProps={{
                  classes: {
                    input: classes.input
                  }
                }}
                inputProps={{
                  maxLength: 10
                }}
                variant="outlined"
                size="small"
                margin="dense"
                placeholder={ t('YOUR_MOBILE_NUMBER') }
                fullWidth
                onKeyDown={onKeyDown}
                onInput={(e) => setMobileNumber(e.target.value)}
                defaultValue={mobileNumber}
              />
            </Box>
            <Box className={styles.otpButtonWrapper}>
              <Button size="small" variant="contained" color="primary" disabled={mobileNumber.length < 10}>{ t('REQUEST_OTP') }</Button>
            </Box>
          </Box>
        </div>
        <div className={styles.inputWrapper}>
          <div>{ t('ENTER_OTP') }</div>
          <TextField
            InputProps={{
              classes: {
                input: classes.input
              }
            }}
            variant="outlined"
            size="small"
            margin="dense"
            placeholder={ t('OTP') }
            fullWidth
          />
        </div>
        <Box textAlign="center">
          <Button size="small" variant="contained" color="primary">{ t('CONFIRM') }</Button>
        </Box>
      </form>
    </Box>
  )
}

export default OTP;