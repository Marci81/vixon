import React from "react";
import ImageSlider from "../../components/image-slider/image-slider.component";
import SideNav from "../../components/side-nav/side-nav.component";
import ItemsDirectory from "../../components/items-directory/items-directory.component";
import { selectShopItemsByCategory } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

const ShopPage = ({
  matchedCategoryItems,
  match: {
    params: { category, id }
  },
  history
}) => (
  <div>
    {!matchedCategoryItems ? (
      history.push("/error")
    ) : (
      <>
        <ImageSlider />
        <hr />
        <div className="container">
          <div className="row">
            <SideNav title={matchedCategoryItems.name} />
            <ItemsDirectory
              category={category}
              {...matchedCategoryItems}
              isShowAllItems={true}
              cardsSize="mt - 3 col-auto col-sm-12 col-md-6 col-lg-4 col-xl-4"
            />
          </div>
        </div>
      </>
    )}
  </div>
);

const mapStateToProp = (state, props) => ({
  matchedCategoryItems: selectShopItemsByCategory(props.match.params.category)(
    state
  )
});

export default connect(mapStateToProp)(ShopPage);
