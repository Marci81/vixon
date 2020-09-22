import { alertActionTypes } from "./alert.types";

export const toggleAlert = message => ({
  type: alertActionTypes.TOGGLE_ALERT,
  payload: message
});

export const resetAlert = () => ({
  type: alertActionTypes.RESET_ALERT
});
