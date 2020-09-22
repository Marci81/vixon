import styled from "styled-components";

export const AlertContainer = styled.div`
  &&& {
    position: fixed;
    bottom: 5px;
    right: 25px;
    width: 400px;
    height: 20px;
    z-index: 10;

    @media (max-width: 768px) {
     right: 0;
    }
  }
`;

export const AlertText = styled.h5`
  margin-top: -10px;
  width: 275px;
  text-align: center;
  color: white;
  text-align: center;
`;
