import React, { useContext } from 'react';
import axios from 'axios';
import createStripe from 'stripe-client';

const stripe = createStripe('pk_test_2ZsRGpgxvRAu9I6gRIoxbGds00cHSUhQoJ');

export const cardTokenRequest = (card) => stripe.createToken({ card });

// export const payRequest = (token, amount, name, tourId, jwtToken) => {
//   console.log(jwtToken);
//   console.log(tourId);

//   return fetch(
//     `https://recorrido-shreyas.herokuapp.com/api/v1/booking/pay/${tourId}`,
//     {
//       headers: {
//         Authorization: `Bearer ${jwtToken}`,
//       },
//       body: JSON.stringify({
//         token,
//         name,
//         amount,
//         tourId,
//       }),
//       method: 'POST',
//     }
//   )
//     .then((res) => {
//       if (res.status > 200) {
//         return Promise.reject('something went wrong processing your payment');
//       }
//       console.log(`here:  ${res}`);
//       return res;
//     })
//     .catch((err) => {
//       console.log(`Error here:  ${err.message}`);
//       return err;
//     });
// };

export const payRequest = (token, amount, name, tourId, jwtToken) => {
  console.log(jwtToken);
  console.log(tourId);
  console.log(token);
  console.log(name);
  console.log(amount);

  return axios
    .post(
      `https://recorrido-shreyas.herokuapp.com/api/v1/booking/pay/${tourId}`,
      {
        token,
        name,
        amount,
        tourId,
      },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    )
    .then((res) => {
      if (res.status > 200) {
        return Promise.reject('something went wrong processing your payment');
      }
      console.log(`here:  ${JSON.stringify(res)}`);
      return res;
    })
    .catch((err) => {
      console.log(`Error here:  ${err.message}`);
      return err;
    });
};
