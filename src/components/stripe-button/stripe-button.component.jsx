import React from "react";
import StripeCheckout from "react-stripe-checkout";

import vixonLogo from "../../assets/images/logo/logo.png";
import { resetAlert, toggleAlert } from "../../redux/alert/alert.action";
import { connect } from "react-redux";

const StripeCheckoutButton = ({ price, dispatch }) => {
  // dollar to cent stripe wants that
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HU7BbBkeiGUzugVFKEGrEMmfMOc0KzsCjmcsZhSuESCBRrGL0ImcNKqRhNST8BpsblY9Hiy9FTUyin8CqPGyNNk000h18Epj3";

  const onToken = token => {
    console.log(token);
    dispatch(toggleAlert("Payment Successful!"));
    setTimeout(() => {
      dispatch(resetAlert());
    }, 1000);
  };

  return (
    <StripeCheckout
      label="Procceed to checkout"
      name="Vixon"
      billingAddress
      shippingAddress
      image={vixonLogo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default connect(null)(StripeCheckoutButton);
