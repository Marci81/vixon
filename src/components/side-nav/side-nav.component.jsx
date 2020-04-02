import React from "react";
import { SideNavContainer, SideNavTitle } from "./side-nav.style";

const SideNav = ({title}) => (
  <div className="col-md-3 col-6">
    <SideNavContainer className="side-nav ">
      <SideNavTitle>{title}</SideNavTitle>
      <p>
        <a href="">Apple(2)</a>
      </p>
      <p>
        <a href="">Apple(2)</a>
      </p>
      <p>
        <a href="">Apple(2)</a>
      </p>
      <p>
        <a href="">Apple(2)</a>
      </p>
    </SideNavContainer>
  </div>
);

export default SideNav;
