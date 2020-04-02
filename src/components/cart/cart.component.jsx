import React from "react";
import CheckoutItem from "../cart-item-body/cart-item-body.component";
import CartItemHead from "../cart-item-head/cart-item-head.component";
import WhiteRoundedContainer from "../white-rounded-container/white-rounded-container.component";

const Cart = props => (
  <WhiteRoundedContainer>
    <div className="col-12">
      <div className="table-responsive">
        <table className="table">
          <thead>
          <CartItemHead/>
          </thead>
          <tbody>
          <CheckoutItem/>
          <CheckoutItem/>
          <CheckoutItem/>
          </tbody>
        </table>
      </div>
    </div>
  </WhiteRoundedContainer>
);

export default Cart;
