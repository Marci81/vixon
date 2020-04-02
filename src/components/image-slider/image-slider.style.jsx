import styled from "styled-components";



export const Image = styled.div`
  &&& {
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 50vh;
    background-image: url(${props => props.imageUrl}) ;
  }
`;

export const ImageSliderSwitcherContainer = styled.h1`
  text-align: center;
`;

export const ImageArrow = styled.i`
  cursor: pointer;
`;
