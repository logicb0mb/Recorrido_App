import axios from 'axios';

export const bookingsRequest = async () => {
  try {
    let response = await axios.get(
      `https://recorrido-shreyas.herokuapp.com/my-tours-data`
    );

    const toursBooked = response.data.data.bookedTours; //array of all booked tour objects
    console.log(`toursBooked : ${toursBooked}`);
    return toursBooked;
  } catch (error) {
    console.log(error);
  }
};
