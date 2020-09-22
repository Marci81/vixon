import { cartActionTypes } from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  removeItemFromCartQuantityNotMatter
} from "./cart.utils";
import { SHIPPING_COST, TAX_RATE } from "./cart.data";

const INITIAL_STATE = {
  taxRate: TAX_RATE,
  shippingCost: SHIPPING_COST,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case cartActionTypes.REMOVE:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case cartActionTypes.REMOVEALLQUANTITY:
      return {
        ...state,
        cartItems: removeItemFromCartQuantityNotMatter(
          state.cartItems,
          action.payload
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
