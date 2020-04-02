import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  Button,
  CardBody,
  CardContainer,
  CardSubTitle,
  CardText,
  CardTitle,
  CardInfoContainer
} from "./card.style";
import { increaseItemClickCount } from "../../redux/shop/shop.action";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHover: false
    };
  }

  render() {
    const {
      imageUrl,
      description,
      brand,
      name,
      price,
      cardsSize,
      category,
      id,
    } = this.props;
    const { isHover } = this.state;
    return (
      <CardContainer
        to={`/category/${category}/item/${id}`}
        onMouseEnter={() => {
          this.setState({ isHover: true });
        }}
        onMouseLeave={() => {
          this.setState({ isHover: false });
        }}
        className={`${isHover ? "animated pulse" : ""} ${cardsSize} `}
      >
        <div className="bg-light border rounded shadow card">
          <img className="card-img-top" src={imageUrl} alt={name} />
          <CardBody className="card-body">
            <CardInfoContainer>
              <CardTitle>{name.substr(0, 14)}</CardTitle>
              <CardSubTitle>{brand}</CardSubTitle>
              <CardText>{description.substr(0, 180) + "..."}</CardText>
              <CardSubTitle>${price}</CardSubTitle>
            </CardInfoContainer>
            <Button className="btn btn-outline-primary" type="button">
              Add To Cart
            </Button>
          </CardBody>
        </div>
      </CardContainer>
    );
  }
}

export default Card;
