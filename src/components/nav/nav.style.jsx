import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavBarContainer = styled.nav`
  &&& {
    background-color: #f57d53;
  }
`;

export const NavItemLink = styled(Link)`
  &&& {
    color: rgb(255, 255, 255);
  }
`;
