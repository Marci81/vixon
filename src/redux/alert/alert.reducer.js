import { alertActionTypes } from "./alert.types";

const INITIAL_STATE = {
  isHidden: true,
  message: ""
};

const alertReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case alertActionTypes.TOGGLE_ALERT:
      return {
        ...state,
        isHidden: false,
        message: action.payload
      };

    case alertActionTypes.RESET_ALERT:
      return {
        ...state,
        isHidden: true,
        message: ""
      };

    default:
      return state;
  }
};

export default alertReducer;
