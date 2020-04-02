import React from "react";
import Cart from "../../components/cart/cart.component";
import Order from "../../components/order/order.component";

const CheckoutPage = props => (
  <div className="container mt-5">
    <div className="px-4 px-lg-0">
      <div className="pb-5">
        <Cart />
        <Order />
      </div>
    </div>
  </div>
);

export default CheckoutPage;
