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
  const [mobileNumberTouched, setMobileNumberTouched] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpTouched, setOtpTouched] = useState(false);

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

  const onRequestOtp = () => {
    console.log('Mobile Number = ' + mobileNumber);
  }

  const onConfirm = () => {
    console.log('OTP = ' + otp);
  }

  const isMobileNumberError = () => {
    return mobileNumberTouched && mobileNumber.length < 10;
  }

  const isOtpError = () => {
    return otpTouched && otp.length < 6;
  }

  return (
    <Box fontSize={12}>
      <form>
        <div className={styles.inputWrapper}>
          <div>{ t('ENTER_MOBILE_NUMBER') }</div>
          <Box display="flex" alignItems="flex-start">
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
                error={isMobileNumberError()}
                helperText={isMobileNumberError() ? t('MOBILE_NUMBER_ERROR') : ''}
                onBlur={() => {setMobileNumberTouched(true)}}
              />
            </Box>
            <Box className={styles.otpButtonWrapper}>
              <Button
                size="small"
                variant="contained"
                color="primary"
                disabled={mobileNumber.length < 10}
                onClick={onRequestOtp}
              >{ t('REQUEST_OTP') }</Button>
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
            inputProps={{
              maxLength: 6
            }}
            variant="outlined"
            size="small"
            margin="dense"
            placeholder={ t('OTP') }
            fullWidth
            onKeyDown={onKeyDown}
            onInput={(e) => setOtp(e.target.value)}
            defaultValue={otp}
            error={isOtpError()}
            helperText={isOtpError() ? t('OTP_ERROR') : ''}
            onBlur={() => { setOtpTouched(true) }}
          />
        </div>
        <Box textAlign="center">
          <Button
            size="small"
            variant="contained"
            color="primary"
            disabled={otp.length < 6}
            onClick={onConfirm}
          >{ t('CONFIRM') }</Button>
        </Box>
      </form>
    </Box>
  )
}

export default OTP;