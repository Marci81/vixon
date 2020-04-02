import React from "react";
import ImageSlider from "../../components/image-slider/image-slider.component";
import Divider from "../../components/divider/divider.component";
import ItemsDirectory from "../../components/items-directory/items-directory.component";
import Section from "../../components/section/section.component";
import Brands from "../../components/brands/brands.component";
import {selectItemsByBrand, selectItemsOrderByPrice} from "../../redux/shop/shop.selector";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

const HomePage = ({ itemsOrderByPrice,itemsSamsung }) => (
  <div>
    <ImageSlider />
    <div className="container">
      <Brands />
      <Divider title="Cheapest" />
      <ItemsDirectory
        items={itemsOrderByPrice}
        isShowAllItems={false}
        cardsSize="mt - 3 col-auto col-sm-12 col-md-6 col-lg-4 col-xl-3"
      />
      <Divider title="Samsung" />
      <ItemsDirectory
        items={itemsSamsung}
        isShowAllItems={false}
        cardsSize="mt - 3 col-auto col-sm-12 col-md-6 col-lg-4 col-xl-3"
      />
      <Divider title="About us" />
      <Section />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemsOrderByPrice: selectItemsOrderByPrice,
  itemsSamsung: selectItemsByBrand("Samsung")
});

export default connect(mapStateToProps)(HomePage);
