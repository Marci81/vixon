import React from "react";

const WhiteRoundedContainer = ({children}) => (
  <div className="row p-2 bg-white rounded shadow-sm mb-5">
    {children}
  </div>
);

export default WhiteRoundedContainer;
