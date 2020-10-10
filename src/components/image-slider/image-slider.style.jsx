import styled, { css } from "styled-components";

export const Image = styled.div`
  &&& {
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50vh;
    background-image: url(${props => props.imageUrl});
  }
`;

export const ImageSliderSwitcherContainer = styled.h1`
  text-align: center;
`;

export const ImageArrow = styled.i`
  cursor: pointer;
`;

const width = "100%",
  height = "40vh";

export const ImagSliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: ${width};
`;
export const ImageSliderChildren = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
export const ImageSliderArrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  color: whitesmoke;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`;
export const ImageSliderDot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
export const ImageSliderDots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`;
