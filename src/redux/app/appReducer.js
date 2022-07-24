import {
  GET_HOTELS_FAILED,
  GET_HOTELS_REQUEST,
  GET_HOTELS_SUCCESS,
} from "./appTypes";

const initState = {
  hotels: [],
  isLoading: false,
  isError: false,
};

export const appReducer = (state = initState, { type, payload }) => {
  console.log(state.hotels, "hotels");
  switch (type) {
    case GET_HOTELS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_HOTELS_SUCCESS:
      return {
        ...state,
        hotels: payload,
        isLoading: false,
        isError: false,
      };

    case GET_HOTELS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
