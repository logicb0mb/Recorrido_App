import camelize from 'camelize';
import axios from 'axios';
import { host, isMock } from '../../utils/env';

export const locationRequest = (searchTerm) => {
  return axios
    .get(`${host}/geocode?city=${searchTerm}&mock=${isMock}`)
    .then((response) => {
      console.log(`Location response: ${response}`);
      return response;
    })
    .catch((error) => console.error('error in fetching location', error));
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.data.results[0];
  console.log(geometry);
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
