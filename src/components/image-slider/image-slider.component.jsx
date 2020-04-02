import React from "react";
import {
  Image,
  ImageArrow,
  ImageSliderSwitcherContainer
} from "./image-slider.style";
import { imageUrls } from "./image-slider.data";

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImagePosition: 0
    };
  }

  render() {
    const { currentImagePosition } = this.state;
    const imageUrl =imageUrls[currentImagePosition];
    return (
      <div>
        <Image className="img-fluid" imageUrl={imageUrl} />
        <ImageSliderSwitcherContainer className="mt-3">
          <span className="mr-3">
            <ImageArrow
              onClick={() => {
                if ( currentImagePosition >=1) {
                  this.setState(state => {
                    return {
                      currentImagePosition: state.currentImagePosition - 1
                    };
                  });
                }
              }}
              className="fas fa-chevron-left"
            />
          </span>
          <span className="ml-3">
            <ImageArrow
              onClick={() => {
                if (currentImagePosition <= 1) {
                  this.setState(state => {
                    return {
                      currentImagePosition: state.currentImagePosition + 1
                    };
                  });
                }
              }}
              className="fas fa-chevron-right"
            />
          </span>
        </ImageSliderSwitcherContainer>
      </div>
    );
  }
}

export default ImageSlider;
