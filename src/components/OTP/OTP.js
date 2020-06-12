import React from 'react';
import { useTranslation } from 'react-i18next';

const OTP = () => {
  const { t } = useTranslation();

  return (
    <div>{ t('OTP')}</div>
  )
}

export default OTP;