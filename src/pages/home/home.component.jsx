import React from "react";
import ImageSlider from "../../components/image-slider/image-slider.component";
import Divider from "../../components/divider/divider.component";
import ItemsDirectory from "../../components/items-directory/items-directory.component";
import Section from "../../components/section/section.component";
import Brands from "../../components/brands/brands.component";

const HomePage = props => (
  <div>
    <ImageSlider />
    <div className="container">
      <Brands />
      <Divider title="Most Popular" />
      {/*<ItemsDirectory*/}
      {/*  isShowAllItems={false}*/}
      {/*  cardsSize="mt - 3 col-auto col-sm-12 col-md-6 col-lg-4 col-xl-3"*/}
      {/*/>*/}
      <Divider title="Newest" />
      {/*<ItemsDirectory*/}
      {/*  isShowAllItems={false}*/}
      {/*  cardsSize="mt - 3 col-auto col-sm-12 col-md-6 col-lg-4 col-xl-3"*/}
      {/*/>*/}
      <Divider title="About us" />
      <Section />
    </div>
  </div>
);

export default HomePage;
