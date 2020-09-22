import { cartActionTypes } from "./cart.types";

export const addItemToCart = item => ({
  type: cartActionTypes.ADD,
  payload: item
});

export const removeItemFromCart = item => ({
  type: cartActionTypes.REMOVE,
  payload: item
});

export const removeItemFromCartQuantityNotMatter = item => ({
  type: cartActionTypes.REMOVEALLQUANTITY,
  payload: item
});
