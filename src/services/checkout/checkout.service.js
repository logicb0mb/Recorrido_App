import createStripe from 'stripe-client';

const stripe = createStripe('pk_test_2ZsRGpgxvRAu9I6gRIoxbGds00cHSUhQoJ');

export const cardTokenRequest = (card) => stripe.createToken({ card });
