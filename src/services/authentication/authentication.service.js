import axios from 'axios';

export const loginRequest = async (email, password) => {
  try {
    const login = await axios.post(
      `https://recorrido-shreyas.herokuapp.com/api/v1/users/login`,
      {
        email: email,
        password: password,
      }
    );
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
    const signup = await axios.post(
      `https://recorrido-shreyas.herokuapp.com/api/v1/users/signup`,
      {
        name: name,
        email: email,
        password: password,
        passwordConfirm: repeatedPassword,
      }
    );
    return signup.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
