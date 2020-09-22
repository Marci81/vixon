import styled from "styled-components";
import { HashLink as Link } from 'react-router-hash-link';

export const NavBarContainer = styled.nav`
  &&& {
    z-index:6;
    background-color: #f57d53;
  }
`;

export const NavItemLink = styled(Link)`
  &&& {
    color: rgb(255, 255, 255);
  }
`;
