import React from 'react';
import {CartItemHeadProduct} from "./cart-item-head.style";

const CartItemHead = props => (
  <tr>
    <th scope="col" className="border-0 bg-light">
      <CartItemHeadProduct className="p-2 px-3 text-uppercase">Product</CartItemHeadProduct>
    </th>
    <th scope="col" className="border-0 bg-light">
      <CartItemHeadProduct className="py-2 text-uppercase">Price</CartItemHeadProduct>
    </th>
    <th scope="col" className="border-0 bg-light">
      <CartItemHeadProduct className="py-2 text-uppercase">Quantity</CartItemHeadProduct>
    </th>
    <th scope="col" className="border-0 bg-light">
      <CartItemHeadProduct className="py-2 text-uppercase">Remove</CartItemHeadProduct>
    </th>
  </tr>
);

export default CartItemHead;