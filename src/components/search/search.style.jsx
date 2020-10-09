import styled from "styled-components";

export const SearchContainer = styled.div`
  &&& {
    position: absolute;
    top: 55px;
    left: 10vw;
    width: 450px;
    height: 500px;
    overflow: scroll;
    z-index: 1;
    
    @media (max-width: 991px) {
        top:333px;
        left:6vw;
  }
`;
