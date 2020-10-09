import styled from "styled-components";

export const ItemOverviewContainer = styled.div`
  margin-top: 40px;

  @media (max-width: 991px) {
    margin-bottom: 100px;
  }
`;

export const ItemOverviewTextAndPriceContainer = styled.div`
  margin-top: 20px;
  margin-left: 0;
  width: 100%;
`;

export const ItemOverviewButton = styled.button`
  height: 50px;
  width: 100%;
  position: absolute;
  right: 0;
  margin-right: 15px;
  @media (max-width: 991px) {
    margin-top: 0;
    font-size: 16px;
    width: 80%;
  }
`;

export const ItemOverviewTitle = styled.h1`
  margin-top: 20px;
  @media (max-width: 991px) {
    margin-top: 0;
    font-size: 1.5em;
  }
`;

export const ItemOverviewPrice = styled.h1`
  font-size: 2em;
  opacity: 0.7;
  @media (max-width: 991px) {
    margin-top: 0;
    font-size: 1.3em;
  }
`;

export const ItemOverviewText = styled.p`
  text-align: justify;
  margin-top: 30px;
`;

export const ItemOverviewImage = styled.img`
  padding: 5px;
  margin-top: 25px;
`;
