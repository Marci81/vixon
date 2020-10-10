import styled from "styled-components";

export const SideNavContainer = styled.div`
  width: 100%;
  height: 100%;
  border-right: 2px solid #51b5d4;
  @media (max-width: 776px) {
    border-right: none;
  }
`;

export const SideNavTitle = styled.h1`
  padding-bottom: 15px;
  border-bottom: 2px solid #51b5d4;
  @media (max-width: 991px) {
    font-size: 30px;
  }
`;

export const SideNavItemsContainer = styled.div``;

export const SideNavItems = styled.p`
  font-size: 1.25em;
  &&:hover {
    color: #f57d53;
    cursor: pointer;
  }
`;
