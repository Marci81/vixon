import React from "react";
import {
  ItemOverviewButton,
  ItemOverviewContainer,
  ItemOverviewImage,
  ItemOverviewText,
  ItemOverviewTextAndPriceContainer,
  ItemOverviewTitle
} from "./item.overview.style";

import { selectShopItem2 } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";
import { resetAlert, toggleAlert } from "../../redux/alert/alert.action";
import { Fade } from "react-reveal";

const ItemOverviewPage = ({ item, history, dispatch }) => (
  <div>
    {item.length > 0
      ? item.map(i => (
          <Fade right>
            <div className="container" key={i.id}>
              <ItemOverviewContainer className="row">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12">
                      <ItemOverviewImage
                        className="img-fluid center-block OverviewImage"
                        src={i.imageUrl}
                      />
                    </div>
                    <ItemOverviewTextAndPriceContainer className="row">
                      <div className="col-6">
                        <h1>${i.price}.00</h1>
                      </div>
                      <div className="col-6">
                        <ItemOverviewButton
                          className="btn btn-primary btn-lg"
                          onClick={evt => {
                            evt.preventDefault();
                            evt.stopPropagation();
                            dispatch(toggleAlert("Added to cart"));
                            dispatch(addItemToCart(i));
                            setTimeout(() => {
                              dispatch(resetAlert());
                            }, 1000);
                          }}
                        >
                          Add To Cart
                        </ItemOverviewButton>
                      </div>
                    </ItemOverviewTextAndPriceContainer>
                  </div>
                </div>
                <div className="col-md-5">
                  <ItemOverviewTitle>{i.name}</ItemOverviewTitle>
                  <hr />
                  <ItemOverviewText>{i.description}</ItemOverviewText>
                </div>
              </ItemOverviewContainer>
            </div>
          </Fade>
        ))
      : history.push("/error")}
  </div>
);

const mapStateToProps = (state, props) => ({
  item: selectShopItem2(props.match.params.id)(state)
});

export default connect(mapStateToProps)(ItemOverviewPage);
