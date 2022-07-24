import {
  GET_HOTELS_FAILED,
  GET_HOTELS_REQUEST,
  GET_HOTELS_SUCCESS,
} from "./appTypes";
import axios from "axios";

export const getHotelsList = (params) => (dispatch) => {
  // console.log(params);
  dispatch({ type: GET_HOTELS_REQUEST });

  axios
    .get("http://localhost:8080/hotelDetails", params)
    .then((r) => dispatch({ type: GET_HOTELS_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: GET_HOTELS_FAILED, payload: e }));
};

// export const filterByStarating = (params) => (dispatch) => {
//   axios
//     .get("http://localhost:8080/hotelDetails", params)
//     .then((r) => dispatch({ type: STAR_RATING_FILTER, payload: r.data }));
// };

// export const filterByStarating = (payload) => (dispatch) => {
//   dispatch({ type: STAR_RATING_FILTER, payload });
// };
