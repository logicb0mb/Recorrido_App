import axios from 'axios';

export const reviewsRequest = async (tourID) => {
  try {
    // 1) Get tours data from API
    let login = await axios.post(
      `https://recorrido-shreyas.herokuapp.com/api/v1/users/login`,
      {
        email: 'sophie@example.com',
        password: 'test1234',
      }
    );
    // console.log(login);

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
