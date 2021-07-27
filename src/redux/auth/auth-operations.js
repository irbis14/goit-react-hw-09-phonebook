/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import authActions from "./auth-actions";
const CORS_URL = "https://newsuperserver.herokuapp.com/";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post("/users/signup", credentials);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

export default {
  register,
};
