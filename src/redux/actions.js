import axios from "axios";

export const GET_DATA = "GET_DATA";
export const ADD_COLOR_AND_ID = "ADD_COLOR_AND_ID";
export const ADD_SIZE = "ADD_SIZE";
export const SUCCESS_SET_CONFIRMATION = "SUCCESS_SET_CONFIRMATION";
export const RESET_SELECTED_PRODUCTS = "RESET_SELECTED_PRODUCTS";
export const START_TIME = "START_TIME";

const API_URL =
  "https://www.mocky.io/v2/5e3940013200005e00ddf87e?mocky-delay=600ms";

export const getData = () => {
  try {
    return async (dispatch) => {
      const response = await axios.get(`${API_URL}`);
      // debugger;
      if (response) {
        dispatch({
          type: GET_DATA,
          payload: response?.data?.results,
          isLoading: true,
          selectedProducts: [],
          selectedSets: [],
          filterdProducts: [],
          startTime: 0
        });
      } else {
        console.log("Unable to fetch");
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    return error;
  }
};
