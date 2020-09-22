import React from "react";

import { connect } from "react-redux";

import {
  Button,
  CardBody,
  CardContainer,
  CardInfoContainer,
  CardSubTitle,
  CardText,
  CardTitle
} from "./card.style";
import { addItemToCart } from "../../redux/cart/cart.action";
import { resetAlert, toggleAlert } from "../../redux/alert/alert.action";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHover: false
    };
  }

  render() {
    const { item, cardsSize, category, dispatch } = this.props;
    const { isHover } = this.state;
    return (
      <CardContainer
        to={`/item/${item.id}`}
        onMouseEnter={() => {
          this.setState({ isHover: true });
        }}
        onMouseLeave={() => {
          this.setState({ isHover: false });
        }}
        className={`${isHover ? "animated pulse" : ""} ${cardsSize} `}
      >
        <div className="bg-light border rounded shadow card">
          <img className="card-img-top" src={item.imageUrl} alt={item.name} />
          <CardBody className="card-body">
            <CardInfoContainer>
              <CardTitle>{item.name.substr(0, 14)}</CardTitle>
              <CardSubTitle>{item.brand}</CardSubTitle>
              <CardText>{item.description.substr(0, 180) + "..."}</CardText>
              <CardSubTitle>${item.price}.00</CardSubTitle>
            </CardInfoContainer>
            <Button
              className="btn btn-outline-primary"
              type="button"
              onClick={evt => {
                evt.preventDefault();
                evt.stopPropagation();
                dispatch(toggleAlert("Added to cart"));
                dispatch(addItemToCart(item));
                setTimeout(() => {
                  dispatch(resetAlert());
                }, 1000);
              }}
            >
              Add To Cart
            </Button>
          </CardBody>
        </div>
      </CardContainer>
    );
  }
}

export default connect(null)(Card);
