import styled from "styled-components";
import {Link} from "react-router-dom";

export const BrandsContainer = styled.div`
  &&& {
    display: block;
    text-align: center;
    padding: 40px 0;
    margin: 0 auto;
  }
`;

export const BrandLink = styled(Link)`
  &&& {
    color: lightgrey;
    opacity: 0.5;

    &&:hover {
      color: black;
      text-decoration: none;
    }
  }
`;

export const BrandIcon = styled.i`
  &&& {
    display: inline-block;
    margin: 10px 20px;
    vertical-align: middle;
  }
`;
