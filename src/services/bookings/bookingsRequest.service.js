import axios from 'axios';
import { host, isMock } from '../../utils/env';
export const bookingsRequest = async () => {
  try {
    let response = await axios.get(`${host}/my-tours-data`);

    const toursBooked = response.data.data.bookedTours; //array of all booked tour objects
    console.log(`toursBooked : ${toursBooked}`);
    return toursBooked;
  } catch (error) {
    console.log(error);
  }
};
