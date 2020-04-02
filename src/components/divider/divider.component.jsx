import React from "react";
import {DividerContainer, DividerLine, DividerTitle} from "./divider.style";

const Divider = ({ title }) => (
  <div>
    <DividerContainer>
      <DividerTitle>{title}</DividerTitle>
      <DividerLine />
    </DividerContainer>
  </div>
);

export default Divider;
