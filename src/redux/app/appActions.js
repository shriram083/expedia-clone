import {
  GET_HOTELS_FAILED,
  GET_HOTELS_REQUEST,
  GET_HOTELS_SUCCESS,
} from "./appTypes";
import axios from "axios";

export const getHotelsList = () => (dispatch) => {
  dispatch({ type: GET_HOTELS_REQUEST });

  axios
    .get("http://localhost:8080/hotelDetails")
    .then((r) => dispatch({ type: GET_HOTELS_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: GET_HOTELS_FAILED, payload: e }));
};
