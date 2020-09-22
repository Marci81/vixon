import React from "react";
import {SearchItemContainer} from "./search-item.style";
import {Link} from "react-router-dom";

const SearchItem = ({brand,name,imageUrl,price,id}) => (
  <SearchItemContainer>
    <Link to={`/item/${id}`}>
      <th scope="row" className="border-0">
        <div className="p-2">
          <img
            src={imageUrl}
            alt={name}
            width="70"
            className="img-fluid rounded shadow-sm"
          />
          <div className="ml-3 d-inline-block align-middle">
            <h5 className="mb-0">
              <Link to={`/item/${id}`} className="text-dark d-inline-block align-middle">
                {name.substr(0, 9)}
              </Link>
            </h5>
            <span className="text-muted font-weight-normal font-italic d-block">
            Brand: {brand}
          </span>
          </div>
        </div>
      </th>
    
      <td className="border-0 align-middle">
        <strong>${price}.00</strong>
      </td>
    </Link>
  </SearchItemContainer>
);

export default SearchItem;
