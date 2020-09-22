import React from "react";
import { BrandLink, BrandsContainer, BrandIcon } from "./brands.style";

const Brands = props => {
  const pathString = "/brands/";
  return (
    <div>
      <BrandsContainer>
        <BrandLink to={`${pathString}Apple`}>
          <BrandIcon className="fab fa-apple fa-5x" />
        </BrandLink>
        <BrandLink to={`${pathString}Android`}>
          <BrandIcon className="fab fa-android fa-5x" />
        </BrandLink>
        <BrandLink to={`${pathString}Windows`}>
          <BrandIcon className="fab fa-microsoft fa-5x" />
        </BrandLink>
        <BrandLink to={`${pathString}Amazon`}>
          <BrandIcon className="fab fa-amazon fa-5x" />
        </BrandLink>
        <BrandLink to={`${pathString}Linux`}>
          <BrandIcon className="fab fa-linux fa-5x" />
        </BrandLink>
      </BrandsContainer>
    </div>
  );
};

export default Brands;
