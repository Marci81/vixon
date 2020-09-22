import React from "react";
import {
  addItemToCart,
  removeItemFromCart, removeItemFromCartQuantityNotMatter
} from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import { CartIcon } from "./cart-item-body.style";
import {Link} from "react-router-dom";

const CartItemBody = ({ item, dispatch }) => (
  <tr>
    <th scope="row" className="border-0">
      <div className="p-2">
        <img
          src={item.imageUrl}
          alt={item.name}
          width="70"
          className="img-fluid rounded shadow-sm"
        />
        <div className="ml-3 d-inline-block align-middle">
          <h5 className="mb-0">
            <Link to={`/item/${item.id}`} className="text-dark d-inline-block align-middle">
              {item.name}
            </Link>
          </h5>
          <span className="text-muted font-weight-normal font-italic d-block">
            Brand: {item.brand}
          </span>
        </div>
      </div>
    </th>
    <td className="border-0 align-middle">
      <strong>${item.price * item.quantity}.00</strong>
    </td>
    <td className="border-0 align-middle">
      <strong>
        <CartIcon
          className="fas fa-chevron-left"
          onClick={() => dispatch(removeItemFromCart(item))}
        />
        {` ${item.quantity} `}
        <CartIcon
          className="fas fa-chevron-right"
          onClick={() => dispatch(addItemToCart(item))}
        />
      </strong>
    </td>
    <td className="border-0 align-middle">
      <CartIcon
        className="fa fa-trash"
         onClick={() => dispatch(removeItemFromCartQuantityNotMatter(item))}
      />
    </td>
  </tr>
);

export default connect(null)(CartItemBody);
