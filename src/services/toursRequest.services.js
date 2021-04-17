import axios from 'axios';

// export const toursRequest = async () => {
//   const res = await fetch(
//     `${host}/placesNearby?location=${location}&mock=${isMock}`
//   );
//   return await res.json();
// };
export const toursRequest = async () => {
  try {
    // 1) Get tours data from API
    const response = await axios.get(
      'https://recorrido-shreyas.herokuapp.com/api/v1/tours'
    );

    // console.log(response);
    const allTours = response.data.data.data; //array of all tour objects

    // console.log(allTours);
    // console.log(
    //   '******************************* ALL Tours *****************************'
    // );
    // console.log(allTours[0]);
    return allTours;
  } catch (error) {
    console.log(error);
  }
};

// toursRequest()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
