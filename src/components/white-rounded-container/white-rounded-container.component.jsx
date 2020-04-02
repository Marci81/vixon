import React from "react";

const WhiteRoundedContainer = props => (
  <div className="row p-5 bg-white rounded shadow-sm mb-5">
    {props.children}
  </div>
);

export default WhiteRoundedContainer;
