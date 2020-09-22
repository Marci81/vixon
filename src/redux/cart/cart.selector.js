import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectTaxRate = createSelector(
  selectCart,
  cart => cart.taxRate
);

export const selectShippingCost = createSelector(
  selectCart,
  cart => cart.shippingCost
);

export const selectCartItems = createSelector(
  selectCart,
  cart => cart.cartItems
);

export const selectCartTotalPriceWithoutTaxAndShipping = createSelector(
  selectCartItems,
  cartItems =>
    Math.floor(
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
      )
    )
);

export const selectTaxPortion = createSelector(
  [selectCartTotalPriceWithoutTaxAndShipping, selectTaxRate],
  (price, taxRate) => Math.floor(price * (taxRate - 1))
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems, selectTaxRate, selectShippingCost],
  (cartItems, taxRate, shippingCost) => {
    const price = cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    );
    return price === 0 ? 0 : Math.floor(price * taxRate + shippingCost);
  }
);
