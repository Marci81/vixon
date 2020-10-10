import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import i1 from "../../assets/images/hero/1.png";
import i3 from "../../assets/images/hero/3.png";
import i4 from "../../assets/images/hero/4.png";
import { Image } from "./image-slider.style";
import CarouselUI from "./carousel-ui.component";

const Carousel = makeCarousel(CarouselUI);

const ImageSlider = () => (
  <div className="mb-5">
    <Carousel>
      <Slide right>
        <div>
          <Image className="img-fluid" imageUrl={i1} />
        </div>
      </Slide>
      <Slide right>
        <div>
          <Image className="img-fluid" imageUrl={i3} />
        </div>
      </Slide>
      <Slide right>
        <div>
          <Image className="img-fluid" imageUrl={i4} />
        </div>
      </Slide>
    </Carousel>
  </div>
);
export default ImageSlider;
