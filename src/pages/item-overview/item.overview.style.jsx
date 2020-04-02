import styled from "styled-components";

export const ItemOverviewContainer = styled.div`
  margin-top: 40px;
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
`;

export const ItemOverviewTitle = styled.h1`
    margin-top: 20px;
    @media screen and (min-width: 721px){
    .OverviewTitle {
        margin-top: 0;
    }
`;

export const ItemOverviewText = styled.p`
  text-align: justify;
  margin-top: 30px;
`;

export const ItemOverviewImage = styled.img`
  border: 1px solid #51b5d4;
  padding: 5px;
  margin-top:25px
`;
