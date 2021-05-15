import React from 'react';
import { CreditCardInput } from 'react-native-credit-card-input';
import { cardTokenRequest } from '../../../services/checkout/checkout.service';

export const CreditCard = ({ name = 'Default Name', onSuccess, onError }) => {
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
      try {
        const info = await cardTokenRequest(card);
        onSuccess(info);
      } catch (e) {
        onError();
      }
    }
  };
  return (
    <CreditCardInput
      inputStyle={{
        fontSize: 15,
        color: '#000',
        border: 'none',
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        // borderWidth: 2,
        // borderColor: '#45d9fd',
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        height: 50,
      }}
      inputContainerStyle={{
        marginLeft: 10,
      }}
      cardFontFamily="sans-serif"
      onChange={onChange}
    />
  );
};
