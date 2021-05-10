import axios from 'axios';

export const reviewsRequest = async (tourID) => {
  try {
    let response = await axios.get(
      `https://recorrido-shreyas.herokuapp.com/api/v1/tours/${tourID}/reviews`
    );

    // console.log(response);
    const tourReviews = response.data.data.data; //array of all tour objects
    // console.log(tourReviews);
    return tourReviews;
  } catch (error) {
    console.log(error);
  }
};

export const reviewsTransform = (results) => {
  const mappedResults = results.map((reviewItem) => {
    return {
      ...reviewItem,
    };
  });

  return mappedResults;
};
