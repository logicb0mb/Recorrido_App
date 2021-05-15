import axios from 'axios';
import { host, isMock } from '../../utils/env';
export const toursRequest = async (location) => {
  try {
    if (location === 'alltours') {
      // 1) Get tours data from API
      let response = await axios.get(
        `${host}/api/v1/tours?sort=-ratingsAverage`
      );

      // console.log(response);
      const allTours = response.data.data.data; //array of all tour objects

      // console.log(allTours);
      // console.log(
      //   '******************************* ALL Tours *****************************'
      // );
      // console.log(allTours[0]);
      return allTours;
    } else {
      const response = await axios.get(
        `${host}/api/v1/tours/tours-within/500/center/${location}/unit/mi`
      );
      const toursWithin = response.data.data.data;
      //   console.log(toursWithin);
      return toursWithin;
    }
  } catch (error) {
    console.log(error);
  }
};

export const tourTransform = (results) => {
  const mappedResults = results.map((tourItem) => {
    const imageCoverUri = `../../../../../assets/img/tours/${tourItem.imageCover}`;
    return {
      ...tourItem,
      imageCoverUri,
    };
  });

  return mappedResults;
};
