import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    fontSize: 12
  }
});

const OTP = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box fontSize={12}>
      <form>
        <div>{ t('ENTER_MOBILE_NUMBER') }</div>
        <TextField
          InputProps={{
            classes: {
              input: classes.input
            }
          }}
          variant="outlined"
          size="small"
          margin="dense"
          placeholder={ t('YOUR_MOBILE_NUMBER') }
          fullWidth
        />
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
      </form>
    </Box>
  )
}

export default OTP;