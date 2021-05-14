import React from 'react';
import { CreditCardInput } from 'react-native-credit-card-input';
import { cardTokenRequest } from '../../../services/checkout/checkout.service';

export const CreditCard = ({ name = 'Default Name', onSuccess }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes('incomplete');
    // console.log(isIncomplete);
    const expiry = values.expiry.split('/');
    // console.log(expiry);
    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: name,
    };
    if (!isIncomplete) {
      const info = await cardTokenRequest(card);
      onSuccess(info);
    }
  };
  return <CreditCardInput onChange={onChange} />;
};
