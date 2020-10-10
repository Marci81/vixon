import React from "react";
import {
  ImageSliderArrow,
  ImageSliderChildren,
  ImageSliderDot,
  ImageSliderDots,
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
    <ImageSliderDots>
      {Array(...Array(total)).map((val, index) => (
        <ImageSliderDot key={index} onClick={handleClick} data-position={index}>
          {index === position ? "● " : "○ "}
        </ImageSliderDot>
      ))}
    </ImageSliderDots>
  </ImagSliderContainer>
);

export default CarouselUI;
