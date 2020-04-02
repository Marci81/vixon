import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const CardFontFamily = css`
  font-family: Antic, sans-serif;
`;

export const CardContainer = styled(Link)`
  &&& {
    color: black;
    text-decoration: none;
    padding: 15px;
  }
`;

export const CardBody = styled.div``;

export const CardTitle = styled.h3`
  color: rgb(81, 87, 94);
  ${CardFontFamily}
`;

export const CardSubTitle = styled.h5`
  color: #51b5d4;
  ${CardFontFamily}
`;

export const CardText = styled.p`
  color: rgb(81, 87, 94);
  text-align: justify;
  ${CardFontFamily}
`;

export const Button = styled.button`
  font-weight: normal;
  ${CardFontFamily}
`;

export const CardInfoContainer = styled.div`
  min-height: 330px;
`;
