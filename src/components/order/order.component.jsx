import React from "react";
import WhiteRoundedContainer from "../white-rounded-container/white-rounded-container.component";

const Order = props => (
  <WhiteRoundedContainer className='d-flex'>
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
            <strong>$390.00</strong>
          </li>
          <li className="d-flex justify-content-between py-3 border-bottom">
            <strong className="text-muted">Shipping and handling</strong>
            <strong>$10.00</strong>
          </li>
          <li className="d-flex justify-content-between py-3 border-bottom">
            <strong className="text-muted">Tax</strong>
            <strong>$0.00</strong>
          </li>
          <li className="d-flex justify-content-between py-3 border-bottom">
            <strong className="text-muted">Total</strong>
            <h5 className="font-weight-bold">$400.00</h5>
          </li>
        </ul>
        <a href="#" className="btn btn-primary rounded-pill py-2 btn-block">
          Procceed to checkout
        </a>
      </div>
    </div>
  </WhiteRoundedContainer>
);

export default Order;
