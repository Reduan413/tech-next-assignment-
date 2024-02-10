import { actionTypes } from "./actionTypes";

export const initialState = {
  location: false,
  error: false,
  users: [],
};
export const userReducer = (state, action) => {
  switch (action?.type) {
    case actionTypes?.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes?.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action?.payload,
        error: false,
      };
    case actionTypes?.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
