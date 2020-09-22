import React from "react";
import {SideNavContainer, SideNavItems, SideNavItemsContainer, SideNavTitle} from "./side-nav.style";
import { connect } from "react-redux";
import { setBrandToFilter } from "../../redux/shop/shop.action";

const SideNav = ({ title, brands, filterToBrand }) => (
  <div className="col-md-3 col-6">
    <SideNavContainer className="side-nav ">
      <SideNavTitle>{title}</SideNavTitle>
      <SideNavItemsContainer className="mt-5">
        {Array(...new Set(brands)).map((brand, idx) => (
          <SideNavItems key={brand} onClick={evt => filterToBrand(brand)}>
            {brand}
            <hr/>
          </SideNavItems>
        ))}
      </SideNavItemsContainer>
    </SideNavContainer>
  </div>
);

export default SideNav;
