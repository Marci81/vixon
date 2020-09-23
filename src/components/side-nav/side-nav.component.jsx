import React from "react";
import {
  SideNavContainer,
  SideNavItems,
  SideNavItemsContainer,
  SideNavTitle
} from "./side-nav.style";

const SideNav = ({ title, brands, filterToBrand }) => (
  <div className="col-md-3 col-6">
    <SideNavContainer className="side-nav ">
      <SideNavTitle>{title}</SideNavTitle>
      <SideNavItemsContainer className="mt-5">
        {Array(...new Set(brands)).map((brand, idx) => (
          <div key={idx}>
            <SideNavItems  onClick={() => filterToBrand(brand)}>
              {brand}
            </SideNavItems>
            <hr />
          </div>
        ))}
      </SideNavItemsContainer>
    </SideNavContainer>
  </div>
);

export default SideNav;
