import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

export const NavBarContainer = styled.nav`
  &&& {
    z-index: 6;
    background-color: #f57d53;
  }
`;

export const NavItemLink = styled(Link)`
  &&& {
    color: rgb(255, 255, 255);
  }
`;

export const NavIcon = styled.img`
  width: 40px;
  height: 40px;
  opacity: 0.8;
  &&:hover {
    opacity: 1;
  }
`;

export const NavSearchInput = styled.input`
  @media (min-width: 991px) {
    width: 400px!important;
  }
`
