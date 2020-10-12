import React from "react";
import {
  ImageSliderArrow,
  ImageSliderChildren,
  ImagSliderContainer
} from "./image-slider.style";


const CarouselUI = ({ position, total, handleClick, children }) => (
  <ImagSliderContainer>
    <ImageSliderChildren>
      {children}
      <ImageSliderArrow onClick={handleClick} data-position={position - 1}>
        {"<"}
      </ImageSliderArrow>
      <ImageSliderArrow
        right
        onClick={handleClick}
        data-position={position + 1}
      >
        {">"}
      </ImageSliderArrow>
    </ImageSliderChildren>
  </ImagSliderContainer>
);

export default CarouselUI;
