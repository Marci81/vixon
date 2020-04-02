import React from "react";
import { BrandLink, BrandsContainer, BrandIcon } from "./brands.style";

const Brands = props => (
  <div>
    <BrandsContainer>
      <BrandLink href="">
        <BrandIcon className="fab fa-apple fa-5x"/>
      </BrandLink>
      <BrandLink href="">
        <BrandIcon className="fab fa-android fa-5x"/>
      </BrandLink>
      <BrandLink href="">
        <BrandIcon className="fab fa-microsoft fa-5x"/>
      </BrandLink>
      <BrandLink href="">
        <BrandIcon className="fab fa-amazon fa-5x"/>
      </BrandLink>
      <BrandLink href="">
        <BrandIcon className="fab fa-linux fa-5x"/>
      </BrandLink>
    </BrandsContainer>
  </div>
);

export default Brands;
