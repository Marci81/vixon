import { createSelector } from "reselect";

const selectAlert = state => state.alert;

export const selectMessage = createSelector(
  selectAlert,
  alert => alert.message
);

export const selectIsHidden = createSelector(
  selectAlert,
  alert => alert.isHidden
);