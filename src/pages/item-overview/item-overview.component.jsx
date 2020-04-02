import React from "react";
import {
  ItemOverviewButton,
  ItemOverviewContainer,
  ItemOverviewImage,
  ItemOverviewText,
  ItemOverviewTextAndPriceContainer,
  ItemOverviewTitle
} from "./item.overview.style";

import { selectShopItem } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

const ItemOverviewPage = ({ item, history }) => (
  <div>
    {!item ? (
      history.push("/error")
    ) : (
      <div className="container">
        <ItemOverviewContainer className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12">
                <ItemOverviewImage
                  className="img-fluid center-block OverviewImage"
                  src={item.imageUrl}
                />
              </div>
              <ItemOverviewTextAndPriceContainer className="row">
                <div className="col-6">
                  <h1>${item.price}</h1>
                </div>
                <div className="col-6">
                  <ItemOverviewButton className="btn btn-primary btn-lg">
                    Add To Cart
                  </ItemOverviewButton>
                </div>
              </ItemOverviewTextAndPriceContainer>
            </div>
          </div>
          <div className="col-md-5">
            <ItemOverviewTitle>{item.name}</ItemOverviewTitle>
            <hr />
            <ItemOverviewText>{item.description}</ItemOverviewText>
          </div>
        </ItemOverviewContainer>
      </div>
    )}
  </div>
);

const mapStateToProps = (state, props) => ({
  item: selectShopItem(props.match.params.category,props.match.params.id)(
    state
  )
});

export default connect(mapStateToProps) (ItemOverviewPage);
