import React from "react";
import CartItemBody from "../cart-item-body/cart-item-body.component";
import CartItemHead from "../cart-item-head/cart-item-head.component";
import WhiteRoundedContainer from "../white-rounded-container/white-rounded-container.component";
import {selectCartItems, selectCartTotalPrice} from "../../redux/cart/cart.selector";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

const Cart = ({ cartItems }) => (
  <WhiteRoundedContainer>
    <div className="col-12">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <CartItemHead />
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <CartItemBody key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </WhiteRoundedContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotalPrice: selectCartTotalPrice
});

export default connect(mapStateToProps)(Cart);
