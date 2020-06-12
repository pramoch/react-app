import React from 'react';
import { useTranslation } from 'react-i18next';

const Card = () => {
  const { t } = useTranslation();

  return (
    <div>{ t('Card')}</div>
  )
}

export default Card;