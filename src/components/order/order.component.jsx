import React from "react";
import WhiteRoundedContainer from "../white-rounded-container/white-rounded-container.component";
import { createStructuredSelector } from "reselect";
import {
  selectCartTotalPrice,
  selectCartTotalPriceWithoutTaxAndShipping,
  selectShippingCost,
  selectTaxPortion
} from "../../redux/cart/cart.selector";
import { connect } from "react-redux";
import StripeCheckoutButton from "../stripe-button/stripe-button.component";

const Order = ({
  cartTotalPrice,
  shippingCost,
  cartTotalPriceWithoutFees,
  tax
}) => (
  <WhiteRoundedContainer className="d-flex">
    <div className="col-lg-12">
      <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
        Order summary
      </div>
      <div className="p-4">
        <p className="font-italic mb-4">
          Shipping and additional costs are calculated based on values you have
          entered.
        </p>
        <ul className="list-unstyled mb-4">
          <li className="d-flex justify-content-between py-3 border-bottom">
            <strong className="text-muted">Order Subtotal </strong>
            <strong>${cartTotalPriceWithoutFees}.00</strong>
          </li>
          <li className="d-flex justify-content-between py-3 border-bottom">
            <strong className="text-muted">Shipping and handling</strong>
            <strong>${cartTotalPrice === 0 ? 0 : shippingCost}</strong>
          </li>
          <li className="d-flex justify-content-between py-3 border-bottom">
            <strong className="text-muted">Tax</strong>
            <strong>${tax}.00</strong>
          </li>
          <li className="d-flex justify-content-between py-3 border-bottom">
            <strong className="text-muted">Total</strong>
            <h3 className="font-weight-bold">${cartTotalPrice}.00</h3>
          </li>
        </ul>
        {/*<a href="#" className="btn btn-primary rounded-pill py-2 btn-block">*/}
        {/*  Procceed to checkout*/}
        {/*</a>*/}
        <StripeCheckoutButton price={cartTotalPrice} />
      </div>
    </div>
  </WhiteRoundedContainer>
);

const mapStateToProps = createStructuredSelector({
  cartTotalPrice: selectCartTotalPrice,
  shippingCost: selectShippingCost,
  cartTotalPriceWithoutFees: selectCartTotalPriceWithoutTaxAndShipping,
  tax: selectTaxPortion
});

export default connect(mapStateToProps)(Order);
