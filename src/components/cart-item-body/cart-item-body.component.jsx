import React from "react";

const CheckoutItem = props => (
  <tr>
    <th scope="row" className="border-0">
      <div className="p-2">
        <img
          src="http://bit.ly/2vmAq1S"
          alt=""
          width="70"
          className="img-fluid rounded shadow-sm"
        />
        <div className="ml-3 d-inline-block align-middle">
          <h5 className="mb-0">
            <a href="#" className="text-dark d-inline-block align-middle">
              Timex Unisex Originals
            </a>
          </h5>
          <span className="text-muted font-weight-normal font-italic d-block">
            Category: Watches
          </span>
        </div>
      </div>
    </th>
    <td className="border-0 align-middle">
      <strong>$79.00</strong>
    </td>
    <td className="border-0 align-middle">
      <strong>
        {" "}
        <i className="fas fa-chevron-left" /> 3{" "}
        <i className="fas fa-chevron-right" />
      </strong>
    </td>
    <td className="border-0 align-middle">
      <a href="#" className="text-dark">
        <i className="fa fa-trash" />
      </a>
    </td>
  </tr>
);

export default CheckoutItem;
