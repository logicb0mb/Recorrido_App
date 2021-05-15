import axios from 'axios';
import { host, isMock } from '../../utils/env';

export const loginRequest = async (email, password) => {
  try {
    const login = await axios.post(`${host}/api/v1/users/login`, {
      email: email,
      password: password,
    });
    return login.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const registerRequest = async (
  name,
  email,
  password,
  repeatedPassword
) => {
  try {
    const signup = await axios.post(`${host}/api/v1/users/signup`, {
      name: name,
      email: email,
      password: password,
      passwordConfirm: repeatedPassword,
    });
    return signup.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const logoutRequest = async () => {
  try {
    let logout = await axios.get(`${host}/api/v1/users/logout`);
    return logout;
  } catch (error) {
    console.log(error);
  }
};
