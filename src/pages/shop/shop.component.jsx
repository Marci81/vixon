import React, { useEffect, useState } from "react";
import ImageSlider from "../../components/image-slider/image-slider.component";
import SideNav from "../../components/side-nav/side-nav.component";
import ItemsDirectory from "../../components/items-directory/items-directory.component";
import { selectShopItemsByCategory } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import { ShopPageContainer } from "./shop.style";
import { Fade } from "react-reveal";

const ShopPage = ({
  matchedCategoryItems,
  match: {
    params: { category }
  },
  history
}) => {
  useEffect(() => {
    setItems(matchedCategoryItems.items);
  }, [category, matchedCategoryItems.items]);

  const [items, setItems] = useState(matchedCategoryItems.items);

  const filterToBrand = brandName => {
    if (brandName !== "All") {
      setItems(matchedCategoryItems.items.filter(i => i.brand === brandName));
    } else {
      setItems(matchedCategoryItems.items);
    }
  };

  return (
    <ShopPageContainer>
      {!matchedCategoryItems ? (
        history.push("/error")
      ) : (
        <Fade bottom>
          <ImageSlider />
          <div className="container">
            <div className="row">
              <SideNav
                filterToBrand={filterToBrand}
                title={matchedCategoryItems.name}
                brands={[
                  "All",
                  ...matchedCategoryItems.items.map(i => i.brand)
                ]}
              />
              <ItemsDirectory
                category={category}
                items={items}
                isShowAllItems={true}
                cardsSize="mt - 3 col-auto col-sm-12 col-md-6 col-lg-4 col-xl-4"
              />
            </div>
          </div>
        </Fade>
      )}
    </ShopPageContainer>
  );
};

const mapStateToProp = (state, props) => ({
  matchedCategoryItems: selectShopItemsByCategory(props.match.params.category)(
    state
  )
});

export default connect(mapStateToProp)(ShopPage);
