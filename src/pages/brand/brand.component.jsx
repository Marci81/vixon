import React from "react";
import Divider from "../../components/divider/divider.component";
import { Fade } from "react-reveal";
import ItemsDirectory from "../../components/items-directory/items-directory.component";
import {
  selectItemsByBrandAndOs
} from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import { BrandPageContainer } from "./brand.style";

const BrandPage = ({
  match: {
    params: { name }
  },
  items
}) => (
  <BrandPageContainer>
    <Fade right>
      <div className="container mb-5">
        <Divider
          title={
            items.length > 0
              ? `All ${name} products (${items.length})`
              : `There is no ${name} product in the shop currently!`
          }
        />
        <ItemsDirectory
          items={items}
          isShowAllItems={true}
          cardsSize="mt - 3 col-auto col-sm-12 col-md-6 col-lg-4 col-xl-3"
        />
      </div>
    </Fade>
  </BrandPageContainer>
);

const mapStateToProp = (state, props) => ({
  items: selectItemsByBrandAndOs(props.match.params.name)(state)
});

export default connect(mapStateToProp)(BrandPage);
